import React from "react"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"
import Html5 from "../public/image/html5.png"
import Css from "../public/image/css.png"
import JavaScript from "../public/image/js.png"
import ReactJs from "../public/image/reactjs.png"
import ExpressJs from "../public/image/expressjs.png"
import NodeJs from "../public/image/nodejs.png"
import NextJs from "../public/image/nextjs.png"
import VueJs from "../public/image/vuejs.png"
import Framework7 from "../public/image/framework7.png"
import Bootstrap from "../public/image/bootstrap.png"
import Tailwind from "../public/image/tailwind.png"
import MySql from "../public/image/mysql.png"
import MongoDB from "../public/image/mongodb.png"
import Firebase from "../public/image/firebase.png"
import AdobePS from "../public/image/adobeps.png"
import Git from "../public/image/git.png"

function SkillsSection() {
  const tech_stack_obj = [
    {
      id: 1,
      name: "HTML",
      img: Html5,
    },
    {
      id: 2,
      name: "CSS",
      img: Css,
    },
    {
      id: 3,
      name: "Javascript",
      img: JavaScript,
    },
    {
      id: 4,
      name: "ReactJs",
      img: ReactJs,
    },
    {
      id: 5,
      name: "ExpressJs",
      img: ExpressJs,
    },
    {
      id: 6,
      name: "NodeJs",
      img: NodeJs,
    },
    {
      id: 7,
      name: "NextJs",
      img: NextJs,
    },
    {
      id: 8,
      name: "VueJs",
      img: VueJs,
    },
    {
      id: 9,
      name: "Framework7",
      img: Framework7,
    },
    {
      id: 10,
      name: "Bootstrap",
      img: Bootstrap,
    },
    {
      id: 11,
      name: "Tailwind",
      img: Tailwind,
    },
    {
      id: 12,
      name: "MySql",
      img: MySql,
    },
    {
      id: 13,
      name: "MongoDB",
      img: MongoDB,
    },
    {
      id: 14,
      name: "Firebase",
      img: Firebase,
    },
    {
      id: 15,
      name: "Photoshop",
      img: AdobePS,
    },
    {
      id: 16,
      name: "Git",
      img: Git,
    },
  ]
  // const skills = ["HTML", "CSS", "JavaScript", "PHP", "MySql", "Rest API", "Bootstrap", "Stored Procedure", "Framework7", "Git", "Adobe Photoshop"]
  // const basic_knowledge = ["ReactJs", "NodeJs", "ExpressJs", "MongoDB", "NextJs", "Tailwind CSS", "VueJs", "Firebase"]

  const tech_stack = tech_stack_obj.map((v) => (
    <div key={v.id} className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-teal-600">
      <span className="group relative flex justify-center">
        <div className="w-20 h-20 relative mx-4 my-4 justify-center items-center">
          <Image className="w-full h-full object-contain hover:scale-110 ease-in duration-200" src={v.img} alt={v.name} />
        </div>
        <span className="absolute top-28 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white text-center group-hover:scale-95">{v.name}</span>
      </span>
    </div>
  ))

  return (
    <Fade>
      <section className="mb-20">
        <h1 className="text-2xl font-bold mb-6 text-center">Tech Stack</h1>
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-center max-w-5xl mx-auto gap-10">{tech_stack}</div>
        {/* <div className="flex flex-wrap flex-row justify-center z-10 md:justify-center max-w-3xl mx-auto gap-1">
          {skills.map((v, i) => {
            return (
              <p key={i} className="bg-teal-600 text-white px-2 mr-1 mt-2  rounded font-semibold">
                {v}
              </p>
            )
          })}
        </div>
        <h1 className="text-1xl text-center mt-6 mb-2">Basic knowledge and still learning</h1>
        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-center max-w-3xl mx-auto gap-1">
          {basic_knowledge.map((v, i) => {
            return (
              <p key={i} className="bg-teal-600 text-white px-2 mr-1 mt-2 rounded font-semibold">
                {v}
              </p>
            )
          })}
        </div> */}
      </section>
    </Fade>
  )
}

export default SkillsSection
