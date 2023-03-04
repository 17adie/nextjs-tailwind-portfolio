import React from "react"
import { Fade } from "react-awesome-reveal"

function SkillsSection() {
  const skills = ["HTML", "CSS", "JavaScript", "PHP", "MySql", "Rest API", "MySql", "Stored Procedure", "Framework7", "Git", "Adobe Photoshop"]
  const basic_knowledge = ["ReactJs", "NodeJs", "ExpressJs", "MongoDB", "NextJs", "Tailwind CSS"]
  return (
    <Fade>
      <section className="pb-24">
        <h1 className="text-2xl font-bold mb-6 text-center">My Skills</h1>
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-center max-w-3xl mx-auto gap-1">
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
        </div>
      </section>
    </Fade>
  )
}

export default SkillsSection
