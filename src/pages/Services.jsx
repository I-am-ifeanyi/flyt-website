import React from 'react'

import FormPage from '../components/FormPage';

import software from "../images/software.jpeg";
import webdev from "../images/webdev.jpeg";
import design from "../images/design.jpeg";



const Services = () => {
  return (
    <div className='mb-40'>
      <div className="p-5 md:p-10">
        <h1 className="md:text-center md:text-8xl font-semibold md:w-3/4 relative m-auto">
          We are an extension of your team
        </h1>
        <p className="md:w-2/3 relative m-auto mt-5 md:text-center">
          The goodnews is, we are a reliable and efficient addition to your
          team. We offer a wide range of services that adds the needed value to
          your business growth. We guarantee 100% that you get maximum value for
          your engagement with us; we also have a money back policy of within 30
          days should you feel dissatisfied with your project.
        </p>
      </div>
      <div className="bg-green-200 p-5 md:p-0 flex flex-col gap-16">
        <div className="md:p-10 flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-5xl font-semibold">
              Software <br />
              Development
            </h2>
            <p className="mt-5">
              Get exclusive access to a professional team of standby software
              developers to handle small, medium and large scale projects in
              your company
            </p>
          </div>
          <figure className="md:w-1/2 ">
            <img src={software} alt="" className="rounded-xl shadow-lg" />
          </figure>
        </div>
        <div className="md:p-10 flex flex-col justify-between items-center gap-5 md:flex-row-reverse">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-5xl font-semibold">
              UI/UX & Product Design
            </h2>
            <p className="mt-5">
              Get exceptional team with experience accross multiple industries
              to handle ideation, user experience and user interface designs for
              your company, brand and product.
            </p>
          </div>
          <figure className="md:w-1/2 ">
            <img src={design} alt="" className="rounded-xl shadow-lg" />
          </figure>
        </div>
        <div className="md:p-10 flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-5xl font-semibold">
              App/Web <br />
              Development
            </h2>
            <p className="mt-5">
              Get a team of specialists to build and manage mobile and web
              development projects with your in-house team.
            </p>
          </div>
          <figure className="md:w-1/2 ">
            <img src={webdev} alt="" className="rounded-xl shadow-lg" />
          </figure>
        </div>
          </div>
          <FormPage />
    </div>
  );
}

export default Services