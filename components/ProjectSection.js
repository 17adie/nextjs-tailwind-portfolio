import React from "react"
import Image from "next/image"
import Alphalab from "../public/projects/alphalab.png"
import AtAccess from "../public/projects/ataccess-telemed-app.png"
import EApp from "../public/projects/eapp.png"
import QrCodeGenerator from "../public/projects/qr-code-generator.png"
import CrudPhpOop from "../public/projects/crud-php-oop.png"
import ReactPortfolio from "../public/projects/my-portfolio.png"
import MemeGenerator from "../public/projects/meme-generator-project.png"
import TenziesGame from "../public/projects/tenzies-game.png"
import AddCart from "../public/projects/simple-add-to-cart.png"
import ResortApp from "../public/projects/ResortApp-3.png"

import { AiFillGithub, AiOutlineLink } from "react-icons/ai"

function ProjectSection() {
  let data = [
    {
      title: "ARMS",
      subtitle: "ARMS is a record management system for water samples. It monitors the status of water tests, whether they are ongoing or completed and ready for release. It also has a Sales and Payment module that allows you to monitor the sales and payments of your customers.",
      demo_link: "",
      git_link: "",
      photo: Alphalab,
      details: "",
      stack: ["PHP-PDO", "HTML", "Css", "JavaScript", "Bootstrap", "MySQL", "REST-API", "SammyJS", "ChartJS", "jQuery", "SweetAlert2", "DataTables"],
    },
    {
      title: "ATAccess",
      subtitle: "A teleconsultation app enables remote consultations with healthcare professionals for diagnosis and treatment of medical conditions, reducing the need for in-person visits.",
      demo_link: "https://ataccess.ph/app/",
      git_link: "",
      photo: AtAccess,
      details: "",
      stack: ["PHP", "HTML", "Css", "JavaScript", "Framework7", "MySQL", "Stored Procedure", "REST-API", "Cordova"],
    },
    {
      title: "E-APP",
      subtitle: "An e-approval system streamlines approval processes by allowing electronic requests, reviews, and approvals of documents or forms, increasing organizational efficiency.",
      demo_link: "https://e-approval.000webhostapp.com/",
      git_link: "https://github.com/17adie/e-app",
      photo: EApp,
      details: "",
      stack: ["PHP-PDO", "HTML", "Css", "JavaScript", "Bootstrap", "MySQL", "REST-API", "HighChartJs", "ChartJS", "jQuery", "SweetAlert2", "MomentJs", "DataTables"],
    },
    {
      title: "Resort App",
      subtitle: "Final Project in Backend101 online course. Simple CRUD app using NodeJs",
      demo_link: "",
      git_link: "https://github.com/17adie/ResortApp",
      photo: ResortApp,
      details: "",
      stack: ["NodeJs", "ExpressJs", "EJS", "Bootstrap", "MongoDB"],
    },
    {
      title: "QR Code",
      subtitle: "QR Code Generator",
      demo_link: "https://reactjs-qrcode-generator.netlify.app/",
      git_link: "https://github.com/17adie/react-qr-code-generator",
      photo: QrCodeGenerator,
      details: "",
      stack: ["ReactJs", "QR-Code API", "CSS Modules"],
    },
    {
      title: "Todo List App",
      subtitle: "A simple todo list app using Object-Oriented Programming (OOP) allows users to create, edit, and delete tasks that they need to complete.",
      demo_link: "",
      git_link: "https://github.com/17adie/todo-list-php-oop",
      photo: CrudPhpOop,
      details: "",
      stack: ["PHP-OOP", "MySql"],
    },
    {
      title: "Old Portfolio",
      subtitle: "I created my portfolio entirely from scratch using React.js, showcasing my skills in building dynamic and responsive web applications.",
      demo_link: "https://aldrinefacistol.netlify.app/",
      git_link: "https://github.com/17adie/react-js-portfolio",
      photo: ReactPortfolio,
      details: "",
      stack: ["ReactJs", "CSS Modules"],
    },
    {
      title: "Meme Generator",
      subtitle: "Project-based learning with Scrimba",
      demo_link: "https://react-meme-generator-project.netlify.app/",
      git_link: "https://github.com/17adie/react-meme-generator",
      photo: MemeGenerator,
      details: "",
      stack: ["ReactJs", "CSS Modules"],
    },
    {
      title: "Tenzies Game",
      subtitle: "Project-based learning with Scrimba",
      demo_link: "https://tenzies-game-reactjs-project.netlify.app/",
      git_link: "https://github.com/17adie/tenzies-game-reactjs",
      photo: TenziesGame,
      details: "Tenzi is a dice game where the objective is to roll dice until all of them show the same value, and players can select and 'freeze' individual dice to keep their current value between rolls.",
      stack: ["ReactJs"],
    },
    {
      title: "Add to Cart",
      subtitle: "Project-based learning with Scrimba",
      demo_link: "https://simple-add-to-cart-reactjs.netlify.app/",
      git_link: "https://github.com/17adie/reactjs-addtocart-project",
      photo: AddCart,
      details: "The 'add to cart' feature found on e-commerce websites allows users to select and save products they want to buy in a virtual shopping cart, simplifying the checkout process.",
      stack: ["ReactJs"],
    },
  ]

  const ProjectCards = data.map((v, i) => {
    const have_git = (link) => (
      <a href={link} target="_blank">
        <AiFillGithub />
      </a>
    )

    const have_demo = (link) => (
      <a href={link} target="_blank">
        <AiOutlineLink />
      </a>
    )

    return (
      <div key={i} className="max-w-xs rounded overflow-hidden shadow-lg dark:border-teal-900 dark:border-2">
        <Image className="object-cover h-48 w-96" src={v.photo} alt={v.title} />
        <div className="px-3 py-4">
          <div className="flex items-baseline justify-between">
            <div className="font-bold text-xl mb-2">{v.title} </div>
            <div className="flex text-2xl text-teal-600">
              <span>{v.git_link != "" ? have_git(v.git_link) : ""}</span>
              <span className="ml-2">{v.demo_link != "" ? have_demo(v.demo_link) : ""}</span>
            </div>
          </div>
          <p className="text-gray-700 text-sm dark:text-gray-500">{v.subtitle}</p>
        </div>
        <div className="px-3 py-5">
          {v.stack.map((v, i) => (
            <span key={i} className="text-xs inline-block bg-teal-800 text-white px-2 mr-1 mt-2 rounded row-end-auto">
              {v}
            </span>
          ))}
        </div>
      </div>
    )
  })

  return (
    <section className="pb-24">
      <h1 className="text-2xl font-bold mb-6 text-center">My Works</h1>
      <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      <div className="max-w-7xl mx-auto">
        <div className="p-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">{ProjectCards}</div>
      </div>
    </section>
  )
}

export default ProjectSection
