import * as icons from "../../../public/assets/icons";
import * as showcase from "../../../public/assets/showcase";

const projects = [
    {
      title: "GPT-3 Project",
      description:
        "A fully responsive, Modern UI/UX website using React.js, styled with TailwindCSS and CSS.",
      image: showcase.gpt3laptop,
      showcase: showcase.gpt3showcase,
      stack: [
        icons.html5,
        icons.css3,
        icons.tailwind,
        icons.react,
      ],
      fullDescription:
      `GPT-3 was one of the first few frontend projects I worked on, and it was a great way to learn how to use React and Tailwind together. It was the project that really
      cemented my love for Tailwind and how easy it is to use, making it a staple in my workflow. Playing around with a modern and sleek looking UI design was a lot of fun
      and using the AOS (Animate On Scroll) library was a great way to add a bit of flair to the project. I'm excited to see how I can improve this project in the future, possibly
      with more complex animations using either Framer motion or GSAP.`,
      id: "gpt3",
      stackDescription:
      `The stack explanation is fairly self-explanatory, React was the first javascript framework I worked with and is what stuck for future projects. If I haven't
      made it clear enough already, I love tailwind so it was a no-brainer for me. I used AOS for the animations, and it was a great way to learn how to use
      smaller, compact animation libraries.`,
      learned:
      `Being one of my earlier works, this project taught me a lot about using React and Tailwind toegether. I learned of smaller libraries like AOS that can carry out its job
      without the large overhead of something like Framer Motion or GSAP. I also learned how to use a design from Figma and implement it into a project, which is a skill I use
      to this day and will continue to use in the future.`,
      link: "https://app1-jsm-tailwind.vercel.app/"
    },
    {
      title: "3D Portfolio",
      description:
        "A 3D personal portfolio created using React.js, Vite, TailwindCSS and Three.js",
      image: showcase.portfoliolaptop,
      showcase: showcase.portfolioshowcase,
      stack: [
        icons.react,
        icons.tailwind,
        icons.framer,
        icons.three,
      ],
      fullDescription:
      `This 3D portfolio was a project I took on to learn more about how 3D models can be a part of UX interactivity, in turn learning more about how Three.js works and its intricacies. 
      It was a very satisfying project to work through as my game development background in university was able to think through texture mapping, model optimization, lighting and canvases. 
      Using the 3D matrix to place the model in the canvas and rotate it was a fun challenge to work through, and I'm excited to see how I can use this knowledge in the future.`,
      id: "3dportfolio",
      stackDescription:
      `With 3D models and interactivity being the main focus of this project, I chose React, Tailwind for styling and the main stars of the show, Three.js and Framer Motion.
       React was an obvious choice for me, It is a single page application so implementation with React was a breeze. Nothing too fancy so Next.js wasn't necessary.
       Tailwind is my bread and butter for styling, I use it with pretty much every project I do now.
       Framer motion was a new library for me, as GSAP was what I was used to before this, but now I'm torn between the two, I guess it's better to be spoiled for choice than not. `,
       learned:
       `Creating this project was a lot of fun, it truly made my inner game developer happy to be able to work with 3D models again. Especially this time, being able to
       understand the math behind Three.js works because of my university background. Setting up the email form was a tough cookie to crack but I'm glad I got the chance to learn how to do it.`,
       link: "https://bryanmagistrado3d.vercel.app/"
    },
    {
      title: "Insightify",
      description:
        "A responsive, minimalistic website built with React.js, Vite and styled with TailwindCSS.",
      image: showcase.insightifylaptop,
      showcase: showcase.insightifyshowcase,
      stack: [
        icons.html5,
        icons.css3,
        icons.tailwind,
        icons.react,
      ],
      fullDescription: 
      "Insightify is a responsive, minimalistic website built with React.js, Vite and styled with TailwindCSS. It was a front-end project to test my UI/UX design skills as I designed the layout from scratch using Figma. This project is special to me as it was one of the first that I designed myself, and I could really hone in on what I enjoyed doing.",
      id: "insightify",
      stackDescription:
      `For Insightify, I chose Tailwind CSS, React, and Vite as the dream team for bringing my vision to life. Tailwind CSS's utility-first approach made it incredibly easy to design and style my project, saving time while maintaining a unique look. React's component-based structure allowed me to build a dynamic user interface with ease, while Vite's blazing-fast build times and hot module replacement accelerated my development workflow. The combination of these technologies provided the perfect toolkit for creating a sleek and efficient web app that I'm proud of. With this stack, I have a solid foundation to continue growing and expanding my project in the future.`,
      learned:
      `With this project, I learned how to design a website from scratch using Figma, and how to implement said design. I am particularly proud of the use of framer motion to add a slight animation to the stylized clouds. With my aesthetic evolving continiously, I know I can revisit this in the future and potentially implement payment using stripe.`,
      link: "https://insightify-react.vercel.app/"
    },
  ];

  export default projects;