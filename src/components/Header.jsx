import React, { useContext } from "react";
import { myContextApi } from "./ContextApi";

import { GiHamburgerMenu } from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"

const Header = () => {
  const { showNavlinks, toggleNavlinks } = useContext(myContextApi);
  return (
    <header className="flex justify-between md:p-5 items-center font-semibold tracking-wider  z-50 top-0">
      <figure
        className={`${
          showNavlinks ? "hidden" : "flex"
        } md:flex w-[80px] h-[50px] items-center gap-1 underline underline-offset-4 decoration-green-700 m-5 md:m-0`}
      >
        <img src="flytLogo.png" alt="FlyT Logo" className="w-full" />
        <figcaption className="text-xl text-green-700">FlyT</figcaption>
      </figure>
      <GiHamburgerMenu
        onClick={toggleNavlinks}
        size={40}
        className={`${
          showNavlinks ? "hidden" : "block"
        } md:hidden text-green-700 m-5 md:m-0`}
      />
      <nav
        className={`${
          showNavlinks ? "flex" : "hidden"
        } md:flex w-full md:w-auto bg-[#1a1a1a] md:bg-transparent  md:flex-row list-none gap-8 text-lg font-normal justify-between p-5 md:p-0 pb-10 md:h-auto`}
      >
        <ul
          className={`${
            showNavlinks ? "flex" : "hidden"
          } md:flex flex-col md:flex-row list-none gap-8 text-lg font-normal text-gray-200 md:text-black`}
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
        {showNavlinks && <button className="text-gray-800 bg-gray-200 leading-tight p-3 font-bold rounded-t-lg">
        Book an appointment
        </button>}
        </ul>
        <AiOutlineClose
          size={40}
          className="text-gray-200 md:hidden"
          onClick={toggleNavlinks}
        />
      </nav>
      <button className="hidden md:block text-gray-200 bg-[#1a1a1a] leading-tight px-5 py-2 rounded-lg">
        Book an <br /> appointment
      </button>
    </header>
  );
};

export default Header;
