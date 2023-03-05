import React, { useState } from "react"
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"
import { Fade } from "react-awesome-reveal"
import { ThreeDots } from "react-loading-icons"

function ContactSection() {
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const sendEmail = (formData) => {
    setIsSending(true)
    setIsSent(false)

    emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE, formData, process.env.NEXT_PUBLIC_EMAILJS_USER).then(
      (result) => {
        console.log(result.text)
        setIsSending(false)
        setIsSent(true)
        reset()
      },
      (error) => {
        console.log(error.text)
      }
    )
  }

  // https://fkhadra.github.io/react-toastify/prevent-duplicate/
  const toastSuccess = () => {
    toast.success("Message Sent!", {
      toastId: "success1",
    })
    setIsSent(false)
  }

  return (
    <section className="pb-10">
      <div className="container px-2 mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Contact me</h1>
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>

        <div className="md:w-2/3 mx-auto">
          <Fade>
            <form onSubmit={handleSubmit(sendEmail)}>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label className="leading-7 text-lg text-teal-600">Name</label>
                    <input type="text" name="user_name" placeholder="Name" {...register("user_name", { required: true })} className="w-full bg-gray-50 rounded border  focus:border-teal-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label className="leading-7 text-lg text-teal-600">Email</label>
                    <input type="email" name="user_email" placeholder="Email" {...register("user_email", { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i })} className="w-full bg-gray-50 rounded border focus:border-teal-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label className="leading-7 text-lg text-teal-600">Subject</label>
                    <input type="text" name="user_suect" placeholder="Subject" {...register("user_subject", { required: true })} className="w-full bg-gray-50 rounded border focus:border-teal-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label className="leading-7 text-lg text-teal-600">Message</label>
                    <textarea name="message" placeholder="Message" {...register("message", { required: true })} className="w-full bg-gray-50 rounded border focus:border-teal-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  {isSending ? (
                    <ThreeDots height="12px" fill="#008080" className="mx-auto" />
                  ) : (
                    <button type="submit" className="flex mx-auto text-white bg-teal-500 border-0 py-2 px-8 focus:outline-none hover:bg-teal-600 rounded text-lg">
                      Submit
                    </button>
                  )}
                  {isSent && toastSuccess()}
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
