import React from "react"
import SectionShell from "./SectionShell"
import { SECTIONS } from "../data/sections";
import { CERTIFICATES } from "../data/certificates"
import Image from "next/image"

function CertSection() {

  const certList = CERTIFICATES.map((v, i) => {
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
    <SectionShell tone="b" id={SECTIONS.certificates.id}>
      <div className="container px-2 mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">My Certificates</h2>
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        <div className="flex flex-wrap justify-center gap-7 pt-3">{certList}</div>
      </div>
    </SectionShell>
  )
}

export default CertSection
