import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { myContextApi } from "./ContextApi";

import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";


import { Flip } from "gsap/Flip";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

gsap.registerPlugin(CSSPlugin);


const Header = () => {
  const { showNavlinks, toggleNavlinks } = useContext(myContextApi);

  const slideIn = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      slideIn.current,
      {
        duration: 0,
        opacity: 0.2,
        x: 200,
        ease: "power1.out",
      },
      {
        duration: 1,
        opacity: 1,
        x: 0,
        ease: "power1.out",
      }
    );
      
  }, [slideIn, toggleNavlinks]);


  return (
    <header className="flex justify-between md:p-5 items-center font-semibold tracking-wider  z-50 top-0">
      <Link to="/">
        <figure
          className={`${
            showNavlinks ? "hidden" : "flex"
          } md:flex w-[80px] h-[50px] items-center gap-1 underline underline-offset-4 decoration-green-700 m-2 md:m-0`}
        >
          <img src="flytLogo.png" alt="FlyT Logo" className="w-full" />
          <figcaption className="text-xl text-green-700">
            FlyT
          </figcaption>
        </figure>
      </Link>
      <GiHamburgerMenu
        onClick={toggleNavlinks}
        size={40}
        className={`${
          showNavlinks ? "hidden" : "block"
        } md:hidden text-green-700 m-2 md:m-0`}
      />
      <nav
        className={`${
          showNavlinks ? "flex" : "hidden"
        } md:flex w-full md:w-auto bg-[#1a1a1a] md:bg-transparent  md:flex-row list-none gap-8 text-lg font-normal justify-between p-5 md:p-0 pb-10 md:h-auto border-b-4 border-green-700 md:border-none`}
        ref={slideIn}
      >
        <ul
          className={`${
            showNavlinks ? "flex" : "hidden"
          } md:flex flex-col md:flex-row list-none gap-8 text-lg font-normal text-gray-200 md:text-black`}
        >
          <Link to="about">
            <li
              className="md:hover:border-b border-green-700 transition-all duration-400"
              onClick={toggleNavlinks}
            >
              About
            </li>
          </Link>
          <Link to="services">
            <li
              className="md:hover:border-b border-green-700 transition-all duration-400"
              onClick={toggleNavlinks}
            >
              Services
            </li>
          </Link>
          <li
            className="md:hover:border-b border-green-700 transition-all duration-400"
            onClick={toggleNavlinks}
          >
            <a href="#projects">Projects</a>
          </li>
          <Link to="contact">
            <li
              className="md:hover:border-b border-green-700 transition-all duration-400"
              onClick={toggleNavlinks}
            >
              Contact
            </li>
          </Link>
        </ul>
        <AiOutlineClose
          size={40}
          className="text-gray-200 md:hidden"
          onClick={toggleNavlinks}
        />
      </nav>{" "}
      <button className="hidden md:block text-gray-200 bg-[#1a1a1a] leading-tight px-5 py-2 rounded-lg">
        <Link to="appointment">
          Book an <br /> appointment{" "}
        </Link>
      </button>
    </header>
  );
};

export default Header;
