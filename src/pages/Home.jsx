import React, {useEffect} from "react";
import locomotiveScroll from "locomotive-scroll";


import Sliders from "../components/Sliders";

import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

import { GiArchiveResearch, GiDiscussion, GiTeamIdea } from "react-icons/gi";
import { AiOutlineBuild } from "react-icons/ai"

import Projects from "../components/Projects";


const Home = () => {
  const style = {
    backgroundImage: `url('observe.png')`,

    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const scrollRef = React.createRef();

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
  });

  return (
    <div
      className="my-10 md:my-20 tracking-wider flex flex-col gap-20"
      ref={scrollRef}
    >
      <div className="flex flex-col md:flex-row gap-20 justify-around items-center p-5">
        <div className="w-full md:w-1/2 flex flex-col">
          <h1 className="font-bold text-center -mb-5 text-[2.5em] md:text-[3.2em]" >
            Creating Digital{" "}
            <span className="text-green-700 text-[3.8rem]">Products</span> That
            Adds Value
          </h1>
          <img src="openHand.png" alt="" className="w-full h-32" />
          <p className="mt-5">
            <span className="font-bold">Fly Technology (FlyT)</span> is majorly
            concerned with building digital products and services that drives
            and sustains business growth. We are more than ready and skilled to
            help you develop the digital tools, products and services that
            creates the needed positive acceleration of your business.
          </p>
          <button className=" text-gray-200 bg-green-700 leading-tight px-5 py-3 rounded-lg mt-5 md:w-1/2">
            Book an appointment
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
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 p-5">
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
      <div>
        <h1 className="text-center">Recent Projects</h1>
        <Projects />
        </div>
    </div>
  );
};

export default Home;
