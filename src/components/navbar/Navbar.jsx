import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgMenuGridR, CgClose } from "react-icons/cg";
import avatar from "../../../public/assets/avatar.svg";
import { gsap } from "gsap";
import "./Navbar.css";
import { HoverContext } from "../../utils/HoverContext";

const Navbar = () => {
  const { handleHover, handleLeave } =
    useContext(HoverContext);
  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    handleHover();
  };

  const handleMouseLeave = () => {
    handleLeave();
  };

  const handleLinkClick = (routeName) => {
    setActive(routeName);
  };

  useEffect(() => {
    gsap.set(".nav", { opacity: 0 });

    gsap.to(".nav", {
      opacity: 1,
      duration: 2,
    });
  }, []);

  return (
    <>
      <div className="nav flex flex-row justify-between items-center pt-[3vh] mx-5 md:mx-[10vw]">
        <img
          className="min-w-[40px] min-h-[40px] w-[60px] md:w-[80px] h-[60px] md:h-[60px]"
          src={avatar}
          alt="avatar"
        />

        <ul className="md:flex flex-row justify-center items-center hidden gap-12">
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="link transition duration-[0.3s] ease-in-out cursor-pointer"
          >
            <a href={`#${active}`} onClick={() => setActive("About")}>
              About
            </a>
          </li>
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="link transition duration-[0.3s] ease-in-out cursor-pointer"
          >
            <a href={`#${active}`} onClick={() => setActive("Skills")}>
              Skills
            </a>
          </li>
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="link transition duration-[0.3s] ease-in-out cursor-pointer"
          >
            <a href={`#${active}`} onClick={() => handleLinkClick("Works")}>
              Works
            </a>
          </li>
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="link transition duration-[0.3s] ease-in-out cursor-pointer"
          >
            <a href={`#${active}`} onClick={() => setActive("Contact")}>
              Contact Me
            </a>
          </li>
        </ul>

        <div className="cursor-pointer block md:hidden" onClick={handleNav}>
          {!isOpen ? <CgMenuGridR size={30} /> : <CgClose size={30} />}
        </div>

        <div
          className={`fixed h-[100vh] overflow-x-hidden left-0 top-0 w-[14rem] border-r border-r-gray-900 bg-[#000300] transform transition-all duration-500 z-30
                ${
                  !isOpen
                    ? "translate-x-[-100%]"
                    : "translate-x-0 md:translate-x-[-100%]"
                }`}
        >
          <img
            className="min-w-[40px] min-h-[40px] w-[60px] md:w-[80px] place-self-start ml-10 my-10"
            src={avatar}
            alt="avatar"
          />
          <ul className="flex flex-col justify-center items-start gap-[4vh] ml-10">
            <li className="cursor-pointer">
              <a
                href={`#${active}`}
                onClick={() => {
                  setActive("About");
                  setIsOpen(!isOpen);
                }}
              >
                About
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                href={`#${active}`}
                onClick={() => {
                  setActive("Skills");
                  setIsOpen(!isOpen);
                }}
              >
                Skills
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                href={`#${active}`}
                onClick={() => {
                  setActive("Works");
                  setIsOpen(!isOpen);
                }}
              >
                Works
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                href={`#${active}`}
                onClick={() => {
                  setActive("Contact");
                  setIsOpen(!isOpen);
                }}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
