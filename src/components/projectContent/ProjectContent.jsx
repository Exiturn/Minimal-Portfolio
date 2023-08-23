import React, { useEffect, useContext } from "react";
import { HoverContext } from "../../utils/HoverContext";
import projects from "../works/projects";

const ProjectContent = ({ data }) => {
  const project = data;  
  const { handleHover, handleLeave } = useContext(HoverContext);

  const handleMouseEnter = () => {
    handleHover();
  };

  const handleMouseLeave = () => {
    handleLeave();
  };

  return (
    <div className="flex flex-col justify-center items-start py-[3vh] mx-5 md:mx-[10vw]">
      <h1 className="text-[3rem]">{projects[project].title}</h1>
      <div className="w-full border-b-2 border-stone-500" />
      <p className="mt-3">{projects[project].fullDescription}</p>
      <button className="mt-4 py-3 px-8 border-[1px]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><a href={projects[project].link} target="_blank">Visit the site</a></button>

      <img
        className="hidden md:block w-[60vw] place-self-center mt-10"
        src={projects[project].showcase}
        alt="GPT3 Showcase"
      />
      <img
        className="md:hidden place-self-center mt-10"
        src={projects[project].image}
        alt="GPT3 Showcase Mobile"
      />

      <div className="flex flex-col-reverse md:flex-row justify-start items-start w-full mt-20 gap-x-[5vw]">
        <div className="grid grid-cols-2 grid-rows-2 w-full md:w-[65%] place-self-center mt-4 md:mt-0">
          {projects[project].stack.map((item, index) => (
            <img
              className={`${
                index >= 2
                  ? "place-self-center"
                  : "place-self-center md:place-self-start"
              } w-[80px] md:w-[100px]`}
              key={index}
              src={item}
            />
          ))}
        </div>

        <div className="flex flex-col w-full">
          <h1 className="text-[2rem]">Tech Stack</h1>
          <div className="w-full border-b-2 border-stone-500" />
          <p className="mt-3">{projects[project].stackDescription}</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-start my-20 w-full">
        <h1 className="text-[2rem]">What I Learned</h1>
        <div className="w-full border-b-2 border-stone-500" />
        <p className="mt-3">{projects[project].learned}</p>
      </div>
    </div>
  );
};

export default ProjectContent;
