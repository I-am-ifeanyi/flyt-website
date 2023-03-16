import React, { useState } from "react";
import emailjs from "@emailjs/browser";


const FormPage = () => {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    text: "",
  });
const {name, email, text} = formInputs
  const formHandler = (e) => {
    setFormInputs((formInputs) => ({
      ...formInputs,
      [e.target.name]: e.target.value,
    }));
  };
  const preventD = (e) => {
    e.preventDefault();
    console.log(formInputs);
     emailjs
       .send(
         "service_60dxvag",
         "template_otswcbe",
         formInputs,
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
  return (
    <div className="flex flex-col md:flex-row items-center justify-around md:py-10 py-4 bg-[#121212] text-gray-200 w-[90%] relative m-auto rounded-t-2xl mt-20 shadow-2xl ">
      <div className="md:w-1/3 p-5">
        <h2 className="text-2xl font-bold tracking-widest md:text-start text-center ">
          Get a quick estimate
        </h2>
        <p className="mt-2 font-extralight text-sm text-center md:text-start">
          Our time is GMT +1. We are available 24/7 every weekday. On weekends,
          we are only available from 7am to 5pm; on special occassions we can be
          available all day.
        </p>
      </div>
      <div>
        <form className="" onSubmit={preventD}>
          <div className="flex flex-col md:flex-row gap-5">
            <fieldset className="flex flex-col gap-5 text-gray-800">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                name="name"
                required
                className="rounded-lg p-2 text-sm"
                onChange={formHandler}
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                name="email"
                required
                className="rounded-lg p-2 text-sm"
                onChange={formHandler}
              />
            </fieldset>
            <textarea
              placeholder="Please describe your project details here ..."
              value={text}
              name="text"
              required
              className="w-[300px] rounded-lg text-gray-800 p-2 text-sm h-52 md:h-auto resize-none"
              onChange={formHandler}
              
            />
          </div>
          <button
            type="submit"
            className="bg-green-700 mt-4 py-2 px-5 rounded-lg hover:bg-green-900 hover:translate-x-1"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
