import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

import { Link } from "react-router-dom";

import Sliders from "../components/Sliders";

import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

import { GiArchiveResearch, GiDiscussion, GiTeamIdea } from "react-icons/gi";
import { AiOutlineBuild } from "react-icons/ai";

import Projects from "../components/Projects";
import FormPage from "../components/FormPage";

const Home = () => {
  const style = {
    backgroundImage: `url('observe.png')`,

    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const style2 = {
    backgroundImage: `url('bg.png')`,

    backgroundPosition: "center",
    backgroundSize: "cover",
  };
   const style3 = {
     backgroundImage: `url('lamp.png')`,

     backgroundPosition: "center",
     backgroundSize: "cover",
   };


  const mainCaption = useRef(null);
  const product = useRef(null);
  const handIcon = useRef(null);

  useEffect(() => {
    if (mainCaption.current) {
      gsap.to(mainCaption.current, {
        color: "#8c0",
        duration: 8,
        delay: 6,
        repeat: -1,
        ease: "power1.inOut",
      });
    }
    gsap.to(product.current, {
      color: "#000081",
      duration: 5,
      delay: 10,
      repeat: -1,
      ease: "power1.inOut",
    });
    gsap.fromTo(
      handIcon.current,
      {
        duration: 3,
        opacity: 0,
        y: 200,
        ease: "power1.out",
        rotation: 180,
        scale: 0.2,
      },
      {
        duration: 2,
        opacity: 1,
        y: 0,
        ease: "power1.out",
        rotation: 360,
        scale: 1,
        
      }
    );
  }, [mainCaption, product]);

   useEffect(() => {
     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
   }, []);

  return (
    <div className="tracking-wider flex flex-col gap-20">
      <div className="flex flex-col md:flex-row gap-20 justify-around items-center p-5">
        <div className="w-full md:w-1/2 flex flex-col">
          <h1
            className="font-bold text-center -mb-5 text-[2.5em] md:text-[3.2em]"
            ref={mainCaption}
          >
            Creating Digital{" "}
            <span className="text-green-700 text-[3.8rem]" ref={product}>
              Products
            </span>{" "}
            That Adds Value
          </h1>
          <img
            src="openHand.png"
            alt=""
            className="w-full h-32"
            ref={handIcon}
          />
          <p className="mt-5">
            <span className="font-bold">Fly Technology (FlyT)</span> is majorly
            concerned with building digital products and services that drives
            and sustains business growth. We are more than ready and skilled to
            help you develop the digital tools, products and services that
            creates the needed positive acceleration of your business.
          </p>
          <button className=" text-gray-200 bg-green-700 hover:bg-green-900 leading-tight px-5 py-3 rounded-lg mt-5 md:w-1/2">
            <Link to="appointment">Book an appointment</Link>
          </button>
        </div>
        <div className="md:w-[350px] md:rotate-6 hidden md:block" style={style}>
          <Sliders />
          <figure className="-mt-52 rotate-24 ml-20 ">
            <img src="framing.png" alt="" className="" />
          </figure>
        </div>
      </div>
      <div className="bg-green-50">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 p-5 md:px-10">
          <h1 className="md:w-1/2 font-semibold">
            We are a dedicated department of your team.
          </h1>
          <p className="md:w-1/2">
            Software products, tools and services that propels your business
            should never be a thing you worry about, and this is because it is
            our duty and expertise to design, build and deploy these
            self-serving products and services. While you concentrate on the
            core of your business, let our dedicated team build highly efficient
            and useful software applications for you--on time!{" "}
          </p>
        </div>
        <div className="p-5 flex flex-col md:flex-row flex-wrap gap-10 md:gap-5 cursor-pointer my-10 md:justify-around">
          <div className="bg-white p-4 rounded w-full md:w-1/3 md:hover:shadow-lg md:hover:border-b-2 border-green-700 transition-all duration-500">
            <GiArchiveResearch size={50} className="text-green-700" />
            <h2 className="text-2xl font-semibold underline my-2">
              We do research
            </h2>
            <p className="mt-2 font-thin">
              We investigate the nature and problems of your products/services
              which enables us to recommend the most possible and feasible
              approach to improve on it through software applications and other
              mechanisms. This is a very efficient and reliable approach that
              has worked over time.
            </p>
          </div>
          <div className="bg-white p-4 rounded w-full md:w-1/3 md:hover:shadow-lg md:hover:border-b-2 border-green-700 transition-all duration-500">
            <GiDiscussion size={50} className="text-green-700" />
            <h2 className="text-2xl font-semibold underline my-2">
              Hold a discussion session
            </h2>
            <p className="mt-2 font-thin">
              We hold series of conversations with a client at different stages
              of a project. This is quite necessary as it helps the team to get
              the needed review from the client before proceeding forward. Helps
              a great deal in achieving required results.
            </p>
          </div>
          <div className="bg-white p-4 rounded w-full md:w-1/3 md:hover:shadow-lg md:hover:border-b-2 border-green-700 transition-all duration-500">
            <GiTeamIdea size={50} className="text-green-700" />
            <h2 className="text-2xl font-semibold underline my-2">
              Ideation with team
            </h2>
            <p className="mt-2 font-thin">
              This is one of the most important activities. The entire team
              assembles together to discuss the best idea to achieve maximum
              result for a project. All possible options are duly considered
              while the best is adopted for best results.
            </p>
          </div>
          <div className="bg-white p-4 rounded w-full md:w-1/3 md:hover:shadow-lg md:hover:border-b-2 border-green-700 transition-all duration-500">
            <AiOutlineBuild size={50} className="text-green-700" />
            <h2 className="text-2xl font-semibold underline my-2">
              Implementation
            </h2>
            <p className="mt-2 font-thin">
              At this stage, the implementation takes effect. This is obviously
              the final stage having carefully considered and adopted an idea.
              The wireframes and prototypes are implemented one milestone at a
              time.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#121212] text-gray-200 py-5 md:px-10 px-5">
        <h1 className="md:text-center mb-10">Recent Projects</h1>
        <Projects />
      </div>
      <div
        className="h-[50em] max-h-[100em] flex items-center justify-center"
        style={style2}
      >
        <div className="flex flex-col md:flex-row justify-around items-center">
          <figure className="md:w-1/3 w-[80%]">
            <img
              src="techpic.jpeg"
              alt=""
              className="rounded-xl rotate-6 h-[400px] md:h-auto"
            />
            <figcaption className="md:w-1/3 w-3/4 bg-gray-200 text-center md:p-2 p-1 rounded-xl -mt-28 md:-mt-52 md:-ml-16 -ml-10 relative z-50">
              <span className="text-3xl font-semibold">40%</span>
              <br />
              More affordable than in-house developers
            </figcaption>
          </figure>
          <div className="md:w-1/3 p-5 text-gray-100 " style={style3}>
            <h1 className="text-4xl font-bold my-5">Are we mission driven?</h1>
            <p>
              We are absolutely mission driven. We dive into your project once
              we have established a clear picture and path of what we set to
              achieve. Moreso, time is absolutely essential to what we do,
              therefore, we do everything possible to keep to time.
            </p>
            <p>
              We help new and existing businesses save money by providing
              software dev. as a service - SDASS, skipping the time and money
              spent on setting up an in house development team.
            </p>
          </div>
        </div>
      </div>
      <FormPage />
    </div>
  );
};

export default Home;
