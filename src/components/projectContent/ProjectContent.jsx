import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ProjectContent = ({ data }) => {
  const project = data.state[0];

  useEffect(() => {
    console.log(project);
  }, []);

  return (
    <div className="flex flex-col justify-center items-start py-[3vh] mx-5 md:mx-[10vw]">
      <h1 className="text-[3rem]">{project.title}</h1>
      <div className="w-full border-b-2 border-stone-500" />
      <p className="mt-3">{project.fullDescription}</p>

      <img className="hidden md:block w-[60vw] place-self-center mt-10" src={project.showcase} alt="GPT3 Showcase" />
      <div>
        <img className="place-self-center mt-10" src={project.image} alt="GPT3 Showcase Mobile" />
      </div>

      <div className="flex flex-row justify-start items-start w-full mt-20">
        <div className="grid grid-cols-2 grid-rows-2 w-full md:w-[30%]">
           {project.stack.map((item, index) => (
            <img className={`${index >=  2 ? 'place-self-end' : 'place-self-start'} w-[80px] md:w-[100px]`} key={index} src={item}/>
           ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;
