import React from "react"
import Image from "next/image"
import dev from "../public/dp.jpg"
import { AiFillFacebook, AiFillLinkedin, AiFillGithub, AiOutlineSolution } from "react-icons/ai"
import { Fade } from "react-awesome-reveal"

function HeroSection() {
  const data = [
    {
      id: 1,
      name: "Facebook",
      fragment: <AiFillFacebook />,
      link: "https://www.facebook.com/17aldrn/",
    },
    {
      id: 2,
      name: "Github",
      fragment: <AiFillGithub />,
      link: "https://github.com/17adie",
    },
    {
      id: 3,
      name: "LinkedIn",
      fragment: <AiFillLinkedin />,
      link: "https://www.linkedin.com/in/aldrinefacistol/",
    },
    {
      id: 4,
      name: "Resume",
      fragment: <AiOutlineSolution />,
      link: "https://drive.google.com/file/d/1zWjjplAL-33fCP4YFvyK4gqmP3N0rCJ_/view?usp=share_link",
    },
  ]

  const icons = data.map((v) => (
    <a key={v.id} href={v.link} target="_blank" className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-teal-600">
      <span className="group relative flex justify-center">
        {v.fragment}
        <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white text-center group-hover:scale-95">{v.name}</span>
      </span>
    </a>
  ))

  return (
    <section className="mb-20">
      <Fade cascade>
        <div className="relative mx-auto rounded-full w-60 h-60 mt-3 mb-5 overflow-hidden">
          <Image src={dev} alt="display photo" />
        </div>
        <div className="text-center p-1">
          <h2 className="text-4xl py-2 text-teal-600 font-medium md:text-6xl lg:mt-5">Aldrine Facistol</h2>
          <h3 className="text-2xl py-1 md:text-3xl dark:text-gray-300">Web Developer</h3>
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
          <p className="text-xs py-3 leading-5 text-gray-800 md:text-lg max-w-3xl mx-auto dark:text-gray-500">As a web developer, I specialize in building interactive and visually appealing web applications. I am committed to continuously learning and improving my skills, and I enjoy the challenges and opportunities that come with creating user-friendly websites.</p>
        </div>
      </Fade>
      <Fade direction="up" cascade>
        <div className="text-4xl flex justify-center gap-12 pt-2 text-gray-500">{icons}</div>
      </Fade>
    </section>
  )
}

export default HeroSection
