import React from "react"
import Image from "next/image"
import backEnd101 from "../public/cert/bayanacademy-backend-web-development-101.png"
import reactAdvanceScrimba from "../public/cert/scrimba-certificate-advanced-react.png"
import javascriptProgramming from "../public/cert/javascript-programming.png"

function CertSection() {
  const data = [
    {
      title: "BACK-END DEVELOPMENT 101",
      org: "Bayan Academy",
      image: backEnd101,
    },
    {
      title: "Advanced React",
      org: "Scrimba",
      image: reactAdvanceScrimba,
    },
    {
      title: "Advanced React",
      org: "Bayan Academy",
      image: javascriptProgramming,
    },
  ]

  const certList = data.map((v, i) => {
    return (
      <a
        href={v.image.src}
        key={i}
        target="_blank"
      >
        <Image
          className="object-cover h-60 w-80 hover:scale-110 ease-in duration-300 cursor-pointer shadow-md"
          src={v.image}
          alt={v.title}
        />
      </a>
    )
  })

  return (
    <section className="pb-24">
      <div className="container px-2 mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">My Certificates</h1>
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        <div className="flex flex-wrap justify-center gap-7 pt-3">{certList}</div>
      </div>
    </section>
  )
}

export default CertSection
