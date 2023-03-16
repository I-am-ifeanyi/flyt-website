import React, { useEffect } from 'react'

import Sliders from "../components/Sliders";

import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

import Projects from '../components/Projects';
import FormPage from '../components/FormPage';


const About = () => {
    
  
  return (
    <div className="my-10 ">
      <div className="p-5 flex flex-col md:flex-row gap-10 justify-around items-center tracking-wider">
        <div className="md:w-1/2 flex flex-col gap-5">
          <h1 className="underline">
            Start Building Today!
          </h1>
          <p>
            We are very passionate about Software Development with a
            demonstrated history of implementing programming knowledge and
            skills in the software industry. To solve programming problems, we
            employ skills in HTML, CSS, JavaScript, React, React Native,
            Typescript, SQL, NodeJs, PHP and a host of other software tools.
            Given any opportunity, we make sure to work as a team with our
            client to enable us get the full picture of what's required to do;
            we always deliver the best eventually.
          </p>
          <p>
            We focus on the core of your business and we would deliver the
            product, effectively and timely.
          </p>
          <div
            className="flex flex-col md:flex-row gap-4"
          >
            <button className="flex items-center gap-2 font-bold">
              <span className="text-4xl font-bold text-green-700">100%</span>
              Reliable
            </button>
            <button className="flex items-center gap-2 font-bold">
              <span className="text-4xl font-bold text-green-700">100%</span>
              Efficient
            </button>
            <button className="flex items-center gap-2 font-bold">
              <span className="text-4xl font-bold text-green-700">100%</span>
              Trust
            </button>
          </div>
        </div>
        <div className="md:w-1/3">
          <figure className="w-[90%] relative m-auto rounded-lg border-2 border-green-700 shadow-lg p-1 flex flex-col items-center hover:bg-[#121212] hover:text-gray-200 transition-all duration-500">
            <img
              src="profile.jpeg"
              alt="profile"
              className="rounded-lg hover:rounded-full transition-all duration-500"
            />
            <figcaption className="text-center font-bold scale-105">
              Ifeanyi Onyeka
            </figcaption>
            <i>React Developer</i>
            <i className="text-center">Founder</i>
          </figure>
        </div>
      </div>
      <div className="my-20">
        <div className="flex flex-col md:flex-row justify-around items-center my-20">
          <figure className="md:w-1/4 w-[80%] rotate-12">
            <img src="techpic.jpeg" alt="" className="rounded-xl" />
            <figcaption className="md:w-1/2 w-3/4 bg-gray-200 text-center p-2 rounded-xl -mt-28 md:-mt-52 md:-ml-16 -ml-10 relative z-50 -rotate-45">
              <span className="text-3xl font-semibold">40%</span>
              <br />
              More affordable than in-house developers
            </figcaption>
          </figure>
          <div className="md:w-1/3 p-5">
            <h1 className="text-4xl font-bold my-5">
              Are we mission driven?
            </h1>
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
      <div className="bg-[#121212] text-gray-200 py-5 md:px-10 px-5 mt-20">
        <Projects />
          </div>
          <FormPage />
    </div>
  );
}

export default About