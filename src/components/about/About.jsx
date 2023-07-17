import React from "react";

const About = () => {
  return (
    <div
      id="About"
      className="flex flex-col justify-start items-start mt-[4vh] px-5 md:px-[10vw] w-[100vw] xs:h-[100vh] md:h-[70vh] xl:h-[40vh] overflow-hidden"
    >
      <h1 className="text-[3rem]">About</h1>
      <div className="w-full border-b-2 border-stone-500" />
      <p className="mt-3 w-full">
        I am a web developer by trade but a longing creative at heart. Growing
        up I never really had a creative outlet. Although I did place third in a
        Yu-Gi-Oh! card art competition where my sister drew the majority of it.
        Anyways, front-end development is my creative outlet. A way for me to
        continuously inspire and elevate myself to be a creative mind, younger
        me would be in awe of.
        <br />
        <br />
        For a more professional approach, I am a recent{" "}
        <span className="text-[#4ABF6C] font-medium">
          university graduate with a bachelor’s degree in Computer Science and a
          2:1 classification
        </span>
        . I have a year’s experience as a Web Developer for AXIA Digital where I
        learned the ropes of web development and had the opportunity to learn
        from senior members of the team.
        <br />
        <br />
        In my spare time, I enjoy watching football and F1, playing video games,
        collecting trading cards and browsing AWWWARDS and Dribbble for
        inspiration.
      </p>
    </div>
  );
};

export default About;
