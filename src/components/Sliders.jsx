import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import image1 from "../images/sliders/techpic.jpeg"
import image2 from "../images/sliders/techpic2.webp"
import image3 from "../images/sliders/Kelechi1.jpeg"
import image4 from "../images/sliders/Kelechi2.jpeg"
import image5 from "../images/sliders/Kelechi3.jpeg"


const Sliders = () => {
  const images = [
    image1,
    image5,
    image2,
    image3,
    image4,
    

  ];

  if(!images) {
    return (
        <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    )
  }

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
