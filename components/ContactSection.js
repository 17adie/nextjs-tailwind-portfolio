import React, { useState, useEffect, useRef } from "react"
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"
import { Fade } from "react-awesome-reveal"
import { ThreeDots } from "react-loading-icons"
import ReCAPTCHA from "react-google-recaptcha"
import { useTheme } from "next-themes"

// When unset the form still works, just without the captcha — that keeps local dev
// running before the key exists. EmailJS rejects the send if the template requires
// verification, so a missing key in production fails loudly rather than silently.
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

const baseField =
  "w-full bg-gray-50 rounded border text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"

// Red border while a field is invalid so the message below it has something to point at
const fieldClass = (hasError) => `${baseField} ${hasError ? "border-red-500 focus:border-red-500" : "focus:border-teal-500"}`

function FieldError({ id, error }) {
  if (!error) return null
  return (
    <p id={id} className="mt-1 text-sm text-red-600">
      {error.message}
    </p>
  )
}

function ContactSection() {
  const [isSending, setIsSending] = useState(false)
  const [captchaToken, setCaptchaToken] = useState(null)
  const [mounted, setMounted] = useState(false)
  const recaptchaRef = useRef(null)
  const { resolvedTheme } = useTheme()

  // The widget is client-only; rendering it after mount avoids a hydration mismatch
  // on the theme prop (same reason NavBar defers its theme toggle).
  useEffect(() => setMounted(true), [])

  const captchaRequired = Boolean(RECAPTCHA_SITE_KEY)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const sendEmail = async (formData) => {
    if (captchaRequired && !captchaToken) {
      toast.error("Please confirm you're not a robot.", { toastId: "contact-captcha" })
      return
    }

    setIsSending(true)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
        // EmailJS verifies this token with Google server-side, so it also blocks
        // requests that skip the form and hit the API directly.
        captchaRequired ? { ...formData, "g-recaptcha-response": captchaToken } : formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER
      )
      toast.success("Message sent! I'll get back to you soon.", { toastId: "contact-success" })
      reset()
    } catch (error) {
      // EmailJS rejects with { status, text }. The text carries the real reason
      // (expired service connection, blocked origin, bad template id) — without it
      // a 4xx here is undebuggable, so always log it.
      const detail = error?.text || error?.message || "Unknown error"
      console.error(`EmailJS send failed — status ${error?.status}: ${detail}`)

      toast.error(
        process.env.NODE_ENV === "development"
          ? `EmailJS ${error?.status}: ${detail}`
          : "Sorry, the message could not be sent. Please try again, or reach me through the links at the top of the page.",
        { toastId: "contact-error" }
      )
    } finally {
      // Runs on both paths, so the Submit button always comes back
      setIsSending(false)

      // reCAPTCHA tokens are single-use and expire after ~2 minutes, so the widget
      // has to be cleared after every attempt — including failures, otherwise a
      // retry would resend a token Google has already consumed.
      if (captchaRequired) {
        recaptchaRef.current?.reset()
        setCaptchaToken(null)
      }
    }
  }

  return (
    <section className="pb-10">
      <div className="container px-2 mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact me</h2>
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>

        <div className="md:w-2/3 mx-auto">
          <Fade>
            <form onSubmit={handleSubmit(sendEmail)} noValidate>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full md:w-1/2">
                  <div className="relative">
                    <label htmlFor="user_name" className="leading-7 text-lg text-teal-600">
                      Name
                    </label>
                    <input
                      id="user_name"
                      type="text"
                      placeholder="Name"
                      aria-invalid={errors.user_name ? "true" : "false"}
                      aria-describedby={errors.user_name ? "user_name_error" : undefined}
                      {...register("user_name", { required: "Please enter your name." })}
                      className={fieldClass(errors.user_name)}
                    />
                    <FieldError id="user_name_error" error={errors.user_name} />
                  </div>
                </div>
                <div className="p-2 w-full md:w-1/2">
                  <div className="relative">
                    <label htmlFor="user_email" className="leading-7 text-lg text-teal-600">
                      Email
                    </label>
                    <input
                      id="user_email"
                      type="email"
                      placeholder="Email"
                      aria-invalid={errors.user_email ? "true" : "false"}
                      aria-describedby={errors.user_email ? "user_email_error" : undefined}
                      {...register("user_email", {
                        required: "Please enter your email address.",
                        pattern: {
                          value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                          message: "That doesn't look like a valid email address.",
                        },
                      })}
                      className={fieldClass(errors.user_email)}
                    />
                    <FieldError id="user_email_error" error={errors.user_email} />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="user_subject" className="leading-7 text-lg text-teal-600">
                      Subject
                    </label>
                    <input
                      id="user_subject"
                      type="text"
                      placeholder="Subject"
                      aria-invalid={errors.user_subject ? "true" : "false"}
                      aria-describedby={errors.user_subject ? "user_subject_error" : undefined}
                      {...register("user_subject", { required: "Please add a subject." })}
                      className={fieldClass(errors.user_subject)}
                    />
                    <FieldError id="user_subject_error" error={errors.user_subject} />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-lg text-teal-600">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Message"
                      aria-invalid={errors.message ? "true" : "false"}
                      aria-describedby={errors.message ? "message_error" : undefined}
                      {...register("message", { required: "Please write a message." })}
                      className={`${fieldClass(errors.message)} h-32 resize-none leading-6`}
                    ></textarea>
                    <FieldError id="message_error" error={errors.message} />
                  </div>
                </div>
                {captchaRequired && mounted && (
                  <div className="p-2 w-full flex justify-center">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={RECAPTCHA_SITE_KEY}
                      theme={resolvedTheme === "dark" ? "dark" : "light"}
                      onChange={setCaptchaToken}
                      onExpired={() => setCaptchaToken(null)}
                      onErrored={() => setCaptchaToken(null)}
                    />
                  </div>
                )}
                <div className="p-2 w-full">
                  {isSending ? (
                    <ThreeDots
                      height="12px"
                      fill="#008080"
                      className="mx-auto"
                    />
                  ) : (
                    <button
                      type="submit"
                      disabled={captchaRequired && !captchaToken}
                      className="flex mx-auto text-white bg-teal-500 border-0 py-2 px-8 focus:outline-none hover:bg-teal-600 rounded text-lg disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:bg-gray-400"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </form>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
