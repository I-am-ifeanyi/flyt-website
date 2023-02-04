import React, { useState } from "react";

import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Appointment = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isTimeSelected, setIsTimeSelected] = useState(true);
  const [appointmentDetails, setAppointmentDetails] = useState({
    date: "",
    email: "",
    company: "",
    time: "",
  });

  const { date, email, company, time } = appointmentDetails;

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setAppointmentDetails((prevAppointmentDetails) => {
      return {
        ...prevAppointmentDetails,
        [name]: value,
      };
    });
  };

  return (
    <div>
      {!isFormSubmitted ? (<form
        className="md:w-2/3 relative m-auto my-20 bg-gray-800 text-gray-200 p-5 md:p-10 flex flex-col md:gap-5 rounded-t-lg"
        onSubmit={(e) => {
          e.preventDefault();
        
          setIsFormSubmitted(true);
          setIsTimeSelected(time ? true : false);
          if (!time) {
            return false;
          }
          console.log(appointmentDetails);
        }}
      >
        <h2 className="text-2xl font-bold tracking-widest md:text-start text-center ">
          Book an appointment with us
        </h2>
        <p className="mt-2 font-extralight text-sm text-center md:text-start">
          Our time is GMT +1. We are available 24/7 every weekday. On weekends,
          we are only available from 7am to 5pm; on special occassions we can be
          available all day.
        </p>
        <label className="mr-3 flex items-center">
          Select Date:
          <input
            type="date"
            placeholder=""
            required
            className="p-2 rounded-lg text-black mx-3 w-[250px] my-2"
            name="date"
            value={date}
            onChange={handleOnchange}
          />
        </label>
        <label className="mr-3 flex items-center">
          Your Email:
          <input
            type="email"
            placeholder="Email"
            required
            className="p-2 rounded-lg text-black mx-3 w-[250px]"
            name="email"
            value={email}
            onChange={handleOnchange}
          />
        </label>
        <label>
          Company:{" "}
          <input
            type="text"
            placeholder="Company Name (optional)"
            className="p-2 rounded-lg text-black mx-3 w-[250px] my-2"
            name="company"
            value={company}
            onChange={handleOnchange}
          />
        </label>
        <div className="flex md:w-2/3 w-full">
          <legend className="w-1/4">Select Time:</legend>
          <div className="grid grid-cols-2 md:grid-cols-3 md:gap-1 gap-2">
            <label className="flex gap-2 items-center bg-green-700 p-2 rounded hover:bg-green-900">
              {" "}
              <input
                type="radio"
                className="p-2 rounded-lg text-black"
                name="time"
                onChange={handleOnchange}
                value="              09:00 am
                
"
                checked={time === "09:00 am"}
              />
              09:00 am
            </label>
            <label className="flex gap-2 items-center bg-green-700 p-2 rounded hover:bg-green-900">
              {" "}
              <input
                type="radio"
                className="p-2 rounded-lg text-black"
                name="time"
                onChange={handleOnchange}
                value="              10:00 am
                
"
                checked={time === "10:00 am"}
              />
              10:00 am
            </label>
            <label className="flex gap-2 items-center bg-green-700 p-2 rounded hover:bg-green-900">
              {" "}
              <input
                type="radio"
                className="p-2 rounded-lg text-black"
                name="time"
                onChange={handleOnchange}
                value="              11:00 am
                
"
                checked={time === "11:00 am"}
              />
              11:00 am
            </label>
            <label className="flex gap-2 items-center bg-green-700 p-2 rounded hover:bg-green-900">
              {" "}
              <input
                type="radio"
                className="p-2 rounded-lg text-black"
                name="time"
                onChange={handleOnchange}
                value="              12:00 pm
                
"
                checked={time === "12:00 pm"}
              />
              12:00 pm
            </label>
            <label className="flex gap-2 items-center bg-green-700 p-2 rounded hover:bg-green-900">
              {" "}
              <input
                type="radio"
                className="p-2 rounded-lg text-black"
                name="time"
                onChange={handleOnchange}
                value="              01:00 pm
                
"
                checked={time === "01:00 pm"}
              />
              01:00 pm
            </label>
            <label className="flex gap-2 items-center bg-green-700 p-2 rounded hover:bg-green-900">
              {" "}
              <input
                type="radio"
                className="p-2 rounded-lg text-black"
                name="time"
                onChange={handleOnchange}
                value="              02:00 pm
                
"
                checked={time === "02:00 pm"}
              />
              02:00 pm
            </label>
            <label className="flex gap-2 items-center bg-green-700 p-2 rounded hover:bg-green-900">
              {" "}
              <input
                type="radio"
                className="p-2 rounded-lg text-black"
                name="time"
                onChange={handleOnchange}
                value="              03:00 pm
                
"
                checked={time === "03:00 pm"}
              />
              03:00 pm
            </label>
            <label className="flex gap-2 items-center bg-green-700 p-2 rounded hover:bg-green-900">
              {" "}
              <input
                type="radio"
                className="p-2 rounded-lg text-black"
                name="time"
                onChange={handleOnchange}
                value="              04:00 pm
                
"
                checked={time === "04:00 pm"}
              />
              04:00 pm
            </label>
            <label className="flex gap-2 items-center bg-green-700 p-2 rounded hover:bg-green-900">
              {" "}
              <input
                type="radio"
                className="p-2 rounded-lg text-black"
                name="time"
                onChange={handleOnchange}
                value="              05:00 pm
                
"
                checked={time === "05:00 pm"}
              />
              05:00 pm
            </label>
            {!isTimeSelected && (
              <p className="text-red-500">Please select a preferred time</p>
            )}{" "}
          </div>
        </div>
        <button
          type="submit"
          className="hover:text-gray-200 text-green-700 bg-gray-200 mt-4 py-2 px-5 rounded-lg hover:bg-green-900 hover:translate-x-1 font-bold transition-all duration-500 md:w-2/3 md:m-auto"
        >
          Submit
        </button>
      </form>) :
    (  <div
        className="flex flex-row items-center bg-green-700 text-gray-200 p-4 justify-center my-20 md:w-2/3 relative m-auto"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <figure className="w-1/3">
          <img src="cartoon.png" alt="" />
        </figure>
        <div className="text-center">
          <h1 className="text-3xl">Successfully Sent!</h1>
                      <p>{ `Speak to you at ${time} `}</p>
          <Link to="/">
            <button className="bg-gray-200 text-gray-800 rounded-lg p-1 mt-4 hover:bg-gray-700 hover:text-gray-200 transition-all duration-500">
              Back to Home page
            </button>
          </Link>
        </div>
      </div>)}
    </div>
  );
};

export default Appointment;
