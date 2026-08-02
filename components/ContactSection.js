import React, { useState, useEffect, useRef } from "react"
import SectionShell from "./SectionShell"
import { SECTIONS } from "../data/sections";
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"
import { Fade } from "react-awesome-reveal"
import { ThreeDots } from "react-loading-icons"
import ReCAPTCHA from "react-google-recaptcha"
import { useTheme } from "next-themes"
import { MdSend } from "react-icons/md"

// When unset the form still works, just without the captcha — that keeps local dev
// running before the key exists. EmailJS rejects the send if the template requires
// verification, so a missing key in production fails loudly rather than silently.
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

const baseField =
  "w-full rounded-lg border bg-gray-50 px-4 py-3 text-sm outline-none transition text-gray-900 placeholder:text-gray-400 dark:bg-gray-900/50 dark:text-gray-100 dark:placeholder:text-gray-500"

// Red border while a field is invalid so the message below it has something to point at
const fieldClass = (hasError) =>
  `${baseField} ${
    hasError
      ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
      : "border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-gray-700"
  }`

function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-gray-700 dark:text-gray-300">
      {children}
    </label>
  )
}

function FieldError({ id, error }) {
  if (!error) return null
  return (
    <p id={id} className="mt-1.5 text-xs text-red-600 dark:text-red-400">
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
    <SectionShell tone="a" id={SECTIONS.contact.id}>
      <h2 className="text-2xl font-bold mb-6 text-center">Contact me</h2>
      <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>

      <Fade>
        {/* Same panel treatment as the Tech Stack groups: rounded-2xl, hairline border,
            one step lighter than the section tone underneath it. */}
        <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 dark:border-gray-700/60 dark:bg-gray-800/40">
          <form onSubmit={handleSubmit(sendEmail)} noValidate className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="user_name">Your Name</Label>
                <input
                  id="user_name"
                  type="text"
                  placeholder="Juan Dela Cruz"
                  aria-invalid={errors.user_name ? "true" : "false"}
                  aria-describedby={errors.user_name ? "user_name_error" : undefined}
                  {...register("user_name", { required: "Please enter your name." })}
                  className={fieldClass(errors.user_name)}
                />
                <FieldError id="user_name_error" error={errors.user_name} />
              </div>

              <div>
                <Label htmlFor="user_email">Your Email</Label>
                <input
                  id="user_email"
                  type="email"
                  placeholder="juan@company.com"
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

            <div>
              <Label htmlFor="user_subject">Subject</Label>
              <input
                id="user_subject"
                type="text"
                placeholder="Project inquiry"
                aria-invalid={errors.user_subject ? "true" : "false"}
                aria-describedby={errors.user_subject ? "user_subject_error" : undefined}
                {...register("user_subject", { required: "Please add a subject." })}
                className={fieldClass(errors.user_subject)}
              />
              <FieldError id="user_subject_error" error={errors.user_subject} />
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                placeholder="Hi Aldrine, I'm reaching out about..."
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message_error" : undefined}
                {...register("message", { required: "Please write a message." })}
                className={`${fieldClass(errors.message)} h-36 resize-none leading-6`}
              ></textarea>
              <FieldError id="message_error" error={errors.message} />
            </div>

            {captchaRequired && mounted && (
              <div className="flex justify-center">
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

            {/* The spinner sits inside the button rather than replacing it, so the
                layout doesn't jump the moment you submit. */}
            <button
              type="submit"
              disabled={isSending || (captchaRequired && !captchaToken)}
              className="flex min-h-[3rem] w-full items-center justify-center gap-2 rounded-lg bg-teal-500 px-6 py-3 font-semibold text-white transition hover:bg-teal-600 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:bg-gray-400"
            >
              {isSending ? (
                <>
                  <ThreeDots height="14px" fill="#fff" />
                  {/* The dots carry no text, so keep a label for screen readers */}
                  <span className="sr-only">Sending</span>
                </>
              ) : (
                <>
                  <MdSend className="text-lg" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </Fade>
    </SectionShell>
  )
}

export default ContactSection
