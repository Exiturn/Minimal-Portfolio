import React, { useEffect, useContext } from "react";
import Mouse from "../components/mouse/Mouse";
import { HoverContext } from "../utils/HoverContext";
import ProjectNav from "../components/projectNav/ProjectNav";
import { gsap } from "gsap";
import ProjectContent from "../components/projectContent/ProjectContent";

const Project = () => {
  const { handleClick } = useContext(HoverContext);

  useEffect(() => {
    handleClick();

    let tl = gsap.timeline();
    tl.fromTo(
      ".project",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
      }
    );
  }, []);

  return (
    <div className="project place-self-center">
      <Mouse />
      <ProjectNav />
      <ProjectContent />
    </div>
  );
};

export default Project;
