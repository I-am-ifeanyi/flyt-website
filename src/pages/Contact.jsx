import React, { useState } from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import {
  AiOutlineMail,
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    details: "",
  });

  const { name, email, company, budget, details } = formData;

  const handleOnchange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="p-5 md:p-10">
        <h1 className="md:text-center md:text-8xl font-semibold md:w-3/4 relative m-auto">
          We are delighted to hear from you!
        </h1>
        <p className="md:w-2/3 relative m-auto mt-5 md:text-center">
          Your time is very important to us, which is why our response and
          turnaround time is one of the fastest in the world. Please take a
          moment to briefly explain to us what you would like us do for you.
        </p>
      </div>
      <div className="flex gap-10 md:gap-16 text-green-700 md:mt-3 justify-center">
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
      {!isFormSubmitted ? (
        <form
          className="md:w-2/3 relative m-auto my-20 bg-gray-800 text-gray-200 p-5 md:p-10 flex flex-col md:gap-5 rounded-t-lg"
          onSubmit={(e) => {
            e.preventDefault();
            setFormData({
              name: "",
              email: "",
              company: "",
              budget: "",
              details: "",
            });
            setIsFormSubmitted(true);
            console.log(formData);
          }}
        >
          <h2 className="text-2xl font-bold tracking-widest md:text-start text-center ">
            Get a quick estimate
          </h2>
          <p className="mt-2 font-extralight text-sm text-center md:text-start">
            Our time is GMT +1. We are available 24/7 every weekday. On
            weekends, we are only available from 7am to 5pm; on special
            occassions we can be available all day.
          </p>
          <div className="mt-5 flex gap-2 justify-center flex-col md:flex-row">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="p-2 rounded-lg"
              name="name"
              value={name}
              onChange={handleOnchange}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="p-2 rounded-lg"
              name="email"
              value={email}
              onChange={handleOnchange}
            />
          </div>
          <div className="flex gap-2 justify-center flex-col md:flex-row mt-2">
            <input
              type="text"
              placeholder="Company Name"
              required
              className="p-2 rounded-lg"
              name="company"
              value={company}
              onChange={handleOnchange}
            />
            <input
              type="number"
              placeholder="Budget"
              required
              className="p-2 rounded-lg text-black"
              name="budget"
              value={budget}
              onChange={handleOnchange}
            />
          </div>
          <textarea
            placeholder="Describe your project details here"
            className="mt-2 md:w-2/3 md:m-auto rounded-lg p-2 h-36 text-black"
            name="details"
            value={details}
            onChange={handleOnchange}
          />
          <button
            type="submit"
            className="bg-green-700 mt-2 py-2 px-5 rounded-lg hover:bg-green-900 hover:translate-x-1 font-bold transition-all duration-500 md:w-2/3 md:m-auto"
          >
            Submit
          </button>
        </form>
      ) : (
        <div
          className="flex flex-row items-center bg-green-700 text-gray-200 p-4 justify-center my-20"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <figure className="w-1/3">
            <img src="cartoon.png" alt="" />
          </figure>
          <div className="text-center">
            <h1 className="text-3xl">Successfully Sent!</h1>
            <p>Hear from us shortly</p>
            <Link to="/">
              <button className="bg-gray-200 text-gray-800 rounded-lg p-1 mt-4 hover:bg-gray-700 hover:text-gray-200 transition-all duration-500">
                Back to Home page
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
