import React from "react";

import * as Icons from "../../assets/icons";

const Skills = () => {
  return (
    <div
      id="Skills"
      className="flex flex-col justify-start items-start px-5 md:px-[10vw] w-[100vw] mt-[7.5rem] overflow-hidden"
    >
      <h1 className="text-[3rem]">Skills</h1>
      <div className="w-full border-b-2 border-stone-500" />
      <p className="mt-3 w-full">
        Aside from my university education, I have been digging into online
        courses about{" "}
        <span className="text-[#4ABF6C] font-medium">UI/UX Design</span> and
        cultivating an aesthetic that I want to explore deeper. I have also been
        teaching myself{" "}
        <span className="text-[#4ABF6C] font-medium">
          React.js with TypeScript in Next.js
        </span>{" "}
        by completing smaller projects such as my blog application and ADV/MNSTRY website.
        <br />
        <br /> With UI/UX design, I have also been getting stuck into prototyping app and web designs for my personal side projects using Figma.
      </p>

      <div className="grid md:grid-cols-3 lg:grid-cols-5 grid-cols-2 justify-start items-start gap-x-[3.5rem] md:gap-x-[2rem] xl:gap-x-[8rem] gap-y-[2rem] mt-10">
        <div className="flex flex-row justify-start items-center gap-2 w-auto h-auto">
          <img className="w-[40px] h-[40px]" src={Icons.html5} alt="html5" />
          <h2 className="font-medium">HTML5</h2>
        </div>
        <div className="flex flex-row justify-start items-center min-w-[10rem] gap-2 w-auto h-auto">
          <img className="w-[40px] h-[40px]" src={Icons.css3} alt="css3" />
          <h2 className="font-medium">CSS3</h2>
        </div>
        <div className="flex flex-row justify-start items-center max-w-[10rem] gap-2 w-auto h-auto">
          <img
            className="w-[40px] h-[40px]"
            src={Icons.javascript}
            alt="javascript ES6"
          />
          <h2 className="font-medium">Javascript ES6</h2>
        </div>
        <div className="flex flex-row justify-start items-center max-w-[10rem] gap-2 w-auto h-auto">
          <img className="w-[40px] h-[40px]" src={Icons.react} alt="react" />
          <h2 className="font-medium">React</h2>
        </div>
        <div className="flex flex-row justify-start items-center gap-2 max-w-[10rem] w-auto h-auto">
          <img className="w-[40px] h-[40px]" src={Icons.nextjs} alt="nextjs" />
          <h2 className="font-medium">Next.js 13</h2>
        </div>
        <div className="flex flex-row justify-start items-center max-w-[10rem] gap-2 w-auto h-auto">
          <img
            className="w-[40px] h-[40px]"
            src={Icons.tailwind}
            alt="tailwind"
          />
          <h2 className="font-medium">Tailwind CSS</h2>
        </div>
        <div className="flex flex-row justify-start items-center max-w-[10rem] gap-2 w-auto h-auto">
          <img className="w-[40px] h-[40px]" src={Icons.figma} alt="figma" />
          <h2 className="font-medium">Figma</h2>
        </div>
        <div className="flex flex-row justify-start items-center gap-2 max-w-[10rem] w-auto h-auto">
          <img className="w-[40px] h-[40px]" src={Icons.git} alt="github" />
          <h2 className="font-medium">Github Desktop</h2>
        </div>
        <div className="flex flex-row justify-start items-center gap-2 max-w-[10rem] w-auto h-auto">
          <img className="w-[40px] h-[40px]" src={Icons.mongodb} alt="MongoDB" />
          <h2 className="font-medium text-[14px] md:text-[1rem]">MongoDB</h2>
        </div>
      </div>
    </div>
  );
};

export default Skills;
