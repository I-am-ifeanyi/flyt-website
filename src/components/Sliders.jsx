import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Sliders = () => {
  const images = [
    "techpic.jpeg",
    "Kelechi1.jpeg",
    "techpic2.webp",
    "Kelechi2.jpeg",
    "techpic4.jpeg",
    "Kelechi3.jpeg",
  ];

  return (
    <Zoom scale={0.7} arrows={false} indicators={false} duration={3000}>
      {images.map((each, index) => (
        <div key={index} className="md:w-full md:h-full md:flex items-center justify-center mt-10 ">
          <figure className="w-[90%] h-[80%]">
          <img
            className="w-full h-full rounded-t-3xl rounded-3xl shadow-2xl rotate-6"
            alt="Slide Image"
            src={each}
            />
            </figure>
        </div>
      ))}
    </Zoom>
  );
};

export default Sliders;
