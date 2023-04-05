import { useState, useRef } from "react";
import projectsdata from "../db.js";
import ProjectCard from "./ProjectCard";

const Projects = ({ goTo }) => {
  const [current, setCurrent] = useState("all");
  const projectRef = useRef(null);

  const currentHandler = (value) => {
    console.log(value);
    setCurrent(value);
  };

  if (goTo === "projects") {
    projectRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <div className="my-container" ref={projectRef}>
      <p className="section-title">Projects I have Built</p>
      <div className="flex items-center justify-center gap-5 flex-wrap">
        <div
          className={
            current === "all"
              ? "border-b-4 px-5 py-1 border-secondary cursor-pointer flex items-center gap-2"
              : "px-5 py-1 cursor-pointer flex items-center gap-2 hover:font-bold"
          }
          onClick={() => currentHandler("all")}
        >
          <p className="text-secondary text3">All</p>
          <small className="bg-secondary text-white rounded-md text-xs h-5 w-5 flex justify-center items-center">
            {projectsdata.length}
          </small>
        </div>
        <p
          className={`text-secondary text3 px-5 py-1 cursor-pointer ${
            current === "fullstack" && "border-b-4 border-secondary"
          }`}
          onClick={() => currentHandler("fullstack")}
        >
          Full Stack
        </p>
        <p
          className={`text-secondary text3 px-5 py-1 cursor-pointer ${
            current === "frontend" && "border-b-4 border-secondary"
          }`}
          onClick={() => currentHandler("frontend")}
        >
          Front End
        </p>
        <p
          className={`text-secondary text3 px-5 py-1 cursor-pointer ${
            current === "landingpage" && "border-b-4 border-secondary"
          }`}
          onClick={() => currentHandler("landingpage")}
        >
          Landing Page
        </p>
        <p
          className={`text-secondary text3 px-5 py-1 cursor-pointer ${
            current === "others" && "border-b-4 border-secondary"
          }`}
          onClick={() => currentHandler("others")}
        >
          Others
        </p>
      </div>
      <div className="mt-20 flex justify-center gap-5 flex-wrap">
        {projectsdata.map((project) => {
          return current === "all" ? (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
              webLink={project.webLink}
            />
          ) : (
            current === project.type && (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubLink={project.githubLink}
                webLink={project.webLink}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
