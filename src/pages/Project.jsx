import React, { useEffect, useContext } from "react";
import Mouse from "../components/mouse/mouse";
import { HoverContext } from "../utils/HoverContext";
import ProjectNav from "../components/projectNav/ProjectNav";
import { gsap } from "gsap";
import ProjectContent from "../components/projectContent/ProjectContent";
import { useLocation } from "react-router-dom";

const Project = () => {
  const { handleClick } = useContext(HoverContext);

  const location = useLocation();

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
      <ProjectContent data={location} />
    </div>
  );
};

export default Project;
