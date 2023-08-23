import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const lines = [
    "I'm a front-end developer who's all about web aesthetics.",
    "I'm a front-end developer who's all about web aesthetics. I like those a lot.",
    "I'm a front-end developer who's all about web aesthetics. I like those a lot. I’m also a sucker for web animations albeit i’m still getting the hang of them.",
    "I'm a front-end developer who's all about web aesthetics. I like those a lot. I’m also a sucker for web animations albeit i’m still getting the hang of them.\n\nFeel free to look around.",
  ];

  return (
    <div
      id="/"
      className="flex flex-col justify-center items-start mt-[3vh] px-5 md:px-[10vw] w-[100vw] h-[85vh] overflow-hidden z-1"
    >
      <h1 className="md:hidden block">
        <TypeAnimation
          style={{
            fontSize: `3.15rem`,
          }}
          sequence={[1000, "Hi, I'm Bryan Magistrado."]}
          speed={70}
        />
      </h1>
      <p className="mt-2 md:hidden block">
        <TypeAnimation
          style={{
            whiteSpace: `pre-line`,
          }}
          sequence={[
            3000,
            `${lines[0]}`,
            250,
            `${lines[1]}`,
            250,
            `${lines[2]}`,
            250,
            `${lines[3]}`,
          ]}
          speed={100}
        />
      </p>

      <h1 className="hidden md:block">
        <TypeAnimation
          style={{
            fontSize: `6rem`,
          }}
          sequence={["Hi, I'm Bryan Magistrado."]}
          speed={80}
        />
      </h1>
      <p className="hidden md:block mt-5">
        <TypeAnimation
          style={{
            fontSize: `1.5rem`,
            whiteSpace: `pre-line`,
          }}
          sequence={[
            1500,
            `${lines[0]}`,
            250,
            `${lines[1]}`,
            250,
            `${lines[2]}`,
            250,
            `${lines[3]}`,
          ]}
          speed={90}
        />
      </p>
    </div>
  );
};

export default Hero;
