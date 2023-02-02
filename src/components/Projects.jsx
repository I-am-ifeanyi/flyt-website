import React from "react";
import info from "./API";





const Projects = () => {
  return (
    <div>
      {info.map((project) => {
        return (
          <div className="flex flex-col md:flex-row gap-10" key={project.id}>
            <div>
                    <h2>{project.name}</h2>
                    <i>{project.description2}</i>
                    <p>{project.description1 }</p>
                </div>
                <div>
                    <figure>
                        <img src={project.image} alt="projects" />
                    </figure>
                </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
