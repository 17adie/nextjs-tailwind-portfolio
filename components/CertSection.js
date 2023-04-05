import React from "react"
import Image from "next/image"
import backEnd101 from "../public/Certificates/bayanacademy-backend-web-development-101.JPG"
import reactAdvanceScrimba from "../public/Certificates/scrimba-certificate-advanced-react.png"
import Link from "next/link"

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
  ]

  const certList = data.map((v, i) => {
    return (
      <Image
        key={i}
        className="object-cover h-60 w-80 hover:scale-110 ease-in duration-300 cursor-pointer shadow-md"
        src={v.image}
        alt={v.title}
      />
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
