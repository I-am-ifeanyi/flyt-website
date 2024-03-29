import React, { useEffect } from "react";
import info from "./API";

import { AiFillGithub, AiOutlineDeliveredProcedure } from "react-icons/ai";

const Projects = () => {
  return (
    <div id="projects">
      {info.map((project) => {
        return (
          <div
            className="flex flex-col md:flex-row justify-around items-center gap-10 md:gap-20"
            key={project.id}
          >
            <div className="my-10 md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold rounded my-2 text-green-700 bg-gray-200 p-2 w-auto border-r-4 border-green-700">
                {project.name}
              </h2>
              <i className="">{project.description2}</i>
              <p className="mt-5">{project.description1}</p>
              <div className="flex flex-col md:flex-row flex-wrap gap-2 justify-around font-bold rounded my-4 text-green-700 md:bg-gray-200 md:border-l-4 md:border-green-700">
                {" "}
                <p
                  className={`bg-gray-200 border-l-4 border-green-700 pl-2 w-1/2 md:bg-none md:border-l-0 md:pl-0 md:w-auto md:border-transparent ${
                    project.stack1 ? "block" : "hidden"
                  }`}
                >
                  {project.stack1}
                </p>
                <p
                  className={`bg-gray-200 border-l-4 border-green-700 pl-2 w-1/2 md:bg-none md:border-l-0 md:pl-0 md:w-auto md:border-transparent ${
                    project.stack2 ? "block" : "hidden"
                  }`}
                >
                  {project.stack2}
                </p>
                <p
                  className={`bg-gray-200 border-l-4 border-green-700 pl-2 w-1/2 md:bg-none md:border-l-0 md:pl-0 md:w-auto md:border-transparent ${
                    project.stack3 ? "block" : "hidden"
                  }`}
                >
                  {project.stack3}
                </p>
                <p
                  className={`bg-gray-200 border-l-4 border-green-700 pl-2 w-1/2 md:bg-none md:border-l-0 md:pl-0 md:w-auto md:border-transparent ${
                    project.stack4 ? "block" : "hidden"
                  }`}
                >
                  {project.stack4}
                </p>
                 <p
                  className={`bg-gray-200 border-l-4 border-green-700 pl-2 w-1/2 md:bg-none md:border-l-0 md:pl-0 md:w-auto md:border-transparent ${
                    project.stack5 ? "block" : "hidden"
                  }`}
                >
                  {project.stack5}
                </p>
                 <p
                  className={`bg-gray-200 border-l-4 border-green-700 pl-2 w-1/2 md:bg-none md:border-l-0 md:pl-0 md:w-auto md:border-transparent ${
                    project.stack6 ? "block" : "hidden"
                  }`}
                >
                  {project.stack6}
                </p>
              </div>
              <div className="flex gap-20">
                <button className="underline md:hover:text-green-700 transition-all duration-500 md:hover:translate-x-1">
                  <a
                    href={project.source ? project.source : "#"}
                    target={project.source ? "_blank" : null}
                    className="flex items-center gap-2"
                  >
                    <AiFillGithub size={30} /> Source Code
                  </a>
                </button>
                <button className="underline md:hover:text-green-700 transition-all duration-500 md:hover:translate-x-1">
                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    <AiOutlineDeliveredProcedure size={30} /> Demo
                  </a>
                </button>
              </div>
            </div>
            <div className="my-10 bg-green-50 rounded-3xl p-10 md:w-1/2 shadow-xl">
              <figure>
                <img
                  src={project.image}
                  alt="projects"
                  className="rounded-t-3xl shadow-2xl"
                />
              </figure>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
