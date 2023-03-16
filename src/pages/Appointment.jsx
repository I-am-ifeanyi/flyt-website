import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import emailjs from "@emailjs/browser";




const Appointment = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isTimeSelected, setIsTimeSelected] = useState(true);
  const [appointmentDetails, setAppointmentDetails] = useState({
    fullName: "",
    email: "",
    company: "",
    time: "",
  });

  const { fullName, email, company, time } = appointmentDetails;

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setAppointmentDetails((prevAppointmentDetails) => {
      return {
        ...prevAppointmentDetails,
        [name]: value,
      };
    });
  };

    const formSubmit = (e) => {
      e.preventDefault();
      setIsFormSubmitted(true);
      setIsTimeSelected(time ? true : false);
      if (!time) {
        return false;
      }
      console.log(appointmentDetails);
        emailjs
          .send(
            "service_60dxvag",
            "template_m8cct19",
            appointmentDetails,
            "_4beOXByxwbLf94mJ"
          )
          .then(
            function (response) {
              console.log("SUCCESS!", response.status, response.text);
            },
            function (error) {
              console.log("FAILED...", error);
            }
          );
    };
   useEffect(() => {
     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
   }, [formSubmit]);

  return (
    <div>
      {!isFormSubmitted ? (
        <form
          className="md:w-2/3 relative m-auto bg-gray-800 text-gray-200 p-5 md:p-10 flex flex-col md:gap-5 md:rounded-t-lg"
          onSubmit={formSubmit}
        >
          <h2 className="text-2xl font-bold tracking-widest md:text-start text-center ">
            Book an appointment with us
          </h2>
          <p className="mt-2 font-extralight text-sm text-center md:text-start">
            Our time is GMT +1. We are available 24/7 every weekday. On
            weekends, we are only available from 7am to 5pm; on special
            occassions we can be available all day.
          </p>
          <fieldset className="flex flex-col md:flex-row mt-10 mt-4 md:mt-0">
            <label className="mr-3 flex items-center md:w-[15%]">
              Full Name:{" "}
            </label>

            <input
              type="text"
              placeholder="Adamu Ajiboye Okoye"
              required
              className="p-2 rounded-lg text-black w md:w-1/2"
              name="fullName"
              value={fullName}
              onChange={handleOnchange}
            />
          </fieldset>
          <fieldset className="flex flex-col md:flex-row mt-4 md:mt-0">
            <label className="mr-3 flex items-center md:w-[15%]">
              Your Email:{" "}
            </label>

            <input
              type="email"
              placeholder="myemail@yahoo.com"
              required
              className="p-2 rounded-lg text-black w-full md:w-1/2"
              name="email"
              value={email}
              onChange={handleOnchange}
            />
          </fieldset>
          <fieldset className="flex flex-col md:flex-row mt-4 md:mt-0">
            <label className="mr-3 flex items-center md:w-[15%]">
              Company:{" "}
            </label>

            <input
              type="text"
              placeholder="Company Name (optional)"
              className="p-2 rounded-lg text-black w-full md:w-1/2 my-2"
              name="company"
              value={company}
              onChange={handleOnchange}
            />
          </fieldset>
          <div className="flex flex-col md:flex-row mt-4 md:mt-0 ">
            <label className="mr-3 flex items-center md:w-[15%]">
              Select Time:
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 md:gap-1 gap-2 md:w-1/2">
              <label className="flex gap-2 items-center bg-green-700 p-2 rounded hover:bg-green-900">
                {" "}
                <input
                  type="radio"
                  className="p-2 rounded-lg text-black"
                  name="time"
                  onChange={handleOnchange}
                  value="              08:00 am
                
"
                  checked={time === "08:00 am"}
                />
                08:00 am
              </label>
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
          <div className="flex items-center">
            <div className="md:w-[15%] md:mr-3"></div>
            <button
              type="submit"
              className="hover:text-gray-200 text-green-700 bg-gray-200 mt-4 py-2 rounded-lg hover:bg-green-900 hover:translate-x-1 font-bold transition-all duration-500 w-full md:w-1/2"
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div className="flex flex-row items-center bg-green-700 text-gray-200 p-4 justify-center my-20 md:w-2/3 relative m-auto">
          <figure className="w-1/3">
            <img src="cartoon.png" alt="" />
          </figure>
          <div className="text-center">
            <h1 className="text-3xl">Successfully Sent!</h1>
            <p>{`Speak to you at ${time} `}</p>
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

export default Appointment;
