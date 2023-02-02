import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Sliders = () => {
  const images = [
    "techpic.jpeg",
    "techpic2.webp",
    "techpic3.jpeg",
    "techpic4.jpeg",
  ];

  return (
    <Zoom scale={0.7} arrows={false} indicators={false} duration={3000}>
      {images.map((each, index) => (
        <div key={index} className="md:w-full md:h-full md:flex items-center justify-center mt-10 ">
          <img
            className="w-[90%] h-[90%] rounded-t-3xl rounded-bl-3xl shadow-2xl rotate-6"
            alt="Slide Image"
            src={each}
          />
        </div>
      ))}
    </Zoom>
  );
};

export default Sliders;
