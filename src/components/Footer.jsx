import React from 'react'

import {
  AiOutlineMail,
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="p-5 bg-[#1a1a1a] md:bg-transparent md:text-gray-800 text-gray-200 relative w-full bottom-0">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-10">
        <figure
          className={`flex w-[80px] h-[50px] items-center gap-1 underline underline-offset-4 decoration-green-700 md:bg-transparent bg-gray-200 p-1`}
        >
          <img src="flytLogo.png" alt="FlyT Logo" className="w-full" />
          <figcaption className="text-xl text-green-700 font-bold bg-gray-200 md:bg-transparent">
            FlyT
          </figcaption>
        </figure>
        <div className="flex gap-5 md:mt-3">
          <a
            href="mailto: theonyekagroup@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineMail className="" size={30} />
          </a>
          <a
            href="https://github.com/I-am-ifeanyi?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/ifeanyi-onyeka/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin size={30} />
          </a>
          <a
            href="https://twitter.com/ifeanyi_onyeka"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineTwitter size={30} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=2348063611278"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineWhatsApp size={30} />
          </a>
        </div>
      </div>
      <div className="my-10 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <ul
          className={`flex flex-col md:flex-row list-none gap-5 md:gap-8 text-lg font-normal`}
        >
          <li className="md:hover:border-b border-green-700 transition-all duration-400">
            About
          </li>
          <li className="md:hover:border-b border-green-700 transition-all duration-400">
            Services
          </li>
          <li className="md:hover:border-b border-green-700 transition-all duration-400">
            Projects
          </li>
          <li className="md:hover:border-b border-green-700 transition-all duration-400">
            Contact
          </li>
        </ul>
        <p>Copyright &copy; Fly Technology LLC, 2022</p>
      </div>
    </footer>
  );
}

export default Footer