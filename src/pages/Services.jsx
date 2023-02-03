import React from 'react'

import software from "../images/software.jpeg";

const Services = () => {
  return (
      <div>
          <div className='p-10'>
              <h1 className='text-center text-8xl font-semibold md:w-3/4 relative m-auto'>We are an extension of your team</h1>
              <p className='md:w-2/3 relative m-auto mt-5'>The goodnews is, we are a reliable and efficient addition to your team. We offer a wide range of services that adds the needed value to your business growth. We guarantee 100% that you get maximum value for your engagement with us; we also have a money back policy of within 30 days should you feel dissatisfied with your project.</p>
          </div>
          <div className='bg-green-200'>
              <div className='md:p-10 flex flex-col md:flex-row justify-between items-center'>
                  <div className='md:w-1/3'>
                      <h1>Software <br />Development</h1>
                      <p className='mt-5'>Get exclusive access to a professional team of standby software developers to handle small, medium and large scale projects in your company</p>
                  </div>
                  <figure className='md:w-1/2 '>
                      <img src={software} alt="" className='rounded-xl'/>
                  </figure>
              </div>
          </div>
    </div>
  )
}

export default Services