import tailwind from "../../assets/tailwind.svg";
import react from "../../assets/react.svg";
import html5 from "../../assets/html5.svg";
import css3 from "../../assets/css3.svg";

const projects = [
    {
      title: "GPT-3 Project",
      description:
        "A fully responsive, Modern UI/UX website using React.js, styled with TailwindCSS and CSS.",
      image: "../src/assets/gpt3laptop.png",
      showcase: "../src/assets/gpt3showcase.png",
      stack: [
        html5,
        css3,
        tailwind,
        react,
      ],
      id: "gpt3",
    },
    {
      title: "Hoobank",
      description:
        "This is a responsive, glassmoprhic style website built with React.js, Vite and styled with TailwindCSS.",
      image: "../src/assets/hoolaptop.png",
      stack: [
        html5,
        css3,
        tailwind,
        react,
      ],
      id: "hoobank",
    },
    {
      title: "Insightify",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "../src/assets/insightifylaptop.png",
      showcase: "../src/assets/insightifyshowcase.png",
      stack: [
        html5,
        css3,
        tailwind,
        react,
      ],
      fullDescription: 
      "Insightify is a responsive, minimalistic website built with React.js, Vite and styled with TailwindCSS. It was a front-end project to test my UI/UX design skills as I designed the layout from scratch using Figma. This project is special to me as it was one of the first that I designed myself, and I could really hone in on what I enjoyed doing.",
      id: "insightify",
    },
  ];

  export default projects;