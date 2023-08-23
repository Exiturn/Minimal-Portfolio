import * as icons from "../../../public/assets/icons";
import * as showcase from "../../../public/assets/showcase";

const projects = [
  {
    title: "Prompto",
    index: 0,
    description:
      "A fullstack application built using the MERN stack which includes Next.js 13 that uses next-auth with Google OAuth, full CRUD functionality, a dedicated database using MongoDB with Mongoose ODM and styled with TailwindCSS. ",
    image: showcase.promptolaptop,
    showcase: showcase.promptoshowcase,
    stack: [icons.nextjs, icons.react, icons.tailwind, icons.mongodb],
    fullDescription: `This project was my introduction to Next.js 13 along using Authentication with Google OAuth and a dedicated, non-SQL database with MongoDB. It was a very fulfilling and enjoyable project to be able to work on
      and is definitely the first of many full-stack applications. Working with a no-SQL database like MongoDB was quite straightforward and being able to understand the use-case of a no-SQL database in comparison 
      to what seems to be the industry standard for large scale application in SQL, is eye-opening. The development process was overall very challenging but being comfortable and understanding the concepts behind them
      was very helpful to me and gave me insight on how a full-stack application is built.`,
    id: "prompto",
    stackDescription: `The stack I decided to go for was the MERN stack, I had been seeing a lot of interesting videos online about this particular stack and wanted to give it a go. For the main
    framework the stack uses Next.js/React, MongoDB for document based database and Node.js as its javascript webserver. I added TailwindCSS for styling too. While I haven't tried this stack
    prior to this project, I did watch a variety of videos to get myself the fundamental understanding of how the different technologies work hand in hand and the purpose of each.`,
    learned: `This project taught me a lot. How Next.js 13 applications are structured, the dynamic routing it provides out of the box and other cool optimization features that give an advantage over
    plain old react. Setting up authentication and authorization for the app was the most difficult aspect, yet also the most rewarding. Next-auth was my choice of authentication while Google was my authorization
    provider. While the MERN stack was fun to learn, I'm not sure about its value to real-world applications with SQL being the staple over no-SQL and other rising Javascript frameworks like Vue becoming
    more popular.`,
    link: "https://inprompto.vercel.app",
  },
  {
    title: "3D Portfolio",
    index: 1,
    description:
      "A 3D personal portfolio created using React.js, Vite, TailwindCSS and Three.js",
    image: showcase.portfoliolaptop,
    showcase: showcase.portfolioshowcase,
    stack: [icons.react, icons.tailwind, icons.framer, icons.three],
    fullDescription: `This 3D portfolio was a project I took on to learn more about how 3D models can be a part of UX interactivity, in turn learning more about how Three.js works and its intricacies. 
      It was a very satisfying project to work through as my game development background in university was able to think through texture mapping, model optimization, lighting and canvases. 
      Using the 3D matrix to place the model in the canvas and rotate it was a fun challenge to work through, and I'm excited to see how I can use this knowledge in the future.`,
    id: "3dportfolio",
    stackDescription: `With 3D models and interactivity being the main focus of this project, I chose React, Tailwind for styling and the main stars of the show, Three.js and Framer Motion.
       React was an obvious choice for me, It is a single page application so implementation with React was a breeze. Nothing too fancy so Next.js wasn't necessary.
       Tailwind is my bread and butter for styling, I use it with pretty much every project I do now.
       Framer motion was a new library for me, as GSAP was what I was used to before this, but now I'm torn between the two, I guess it's better to be spoiled for choice than not. `,
    learned: `Creating this project was a lot of fun, it truly made my inner game developer happy to be able to work with 3D models again. Especially this time, being able to
       understand the math behind Three.js works because of my university background. Setting up the email form was a tough cookie to crack but I'm glad I got the chance to learn how to do it.`,
    link: "https://bryanmagistrado3d.vercel.app/",
  },
  {
    title: "Insightify",
    index: 2,
    description:
      "A responsive, minimalistic website built with React.js, Vite and styled with TailwindCSS.",
    image: showcase.insightifylaptop,
    showcase: showcase.insightifyshowcase,
    stack: [icons.html5, icons.css3, icons.tailwind, icons.react],
    fullDescription:
      "Insightify is a responsive, minimalistic website built with React.js, Vite and styled with TailwindCSS. It was a front-end project to test my UI/UX design skills as I designed the layout from scratch using Figma. This project is special to me as it was one of the first that I designed myself, and I could really hone in on what I enjoyed doing.",
    id: "insightify",
    stackDescription: `For Insightify, I chose Tailwind CSS, React, and Vite as the dream team for bringing my vision to life. Tailwind CSS's utility-first approach made it incredibly easy to design and style my project, saving time while maintaining a unique look. React's component-based structure allowed me to build a dynamic user interface with ease, while Vite's blazing-fast build times and hot module replacement accelerated my development workflow. The combination of these technologies provided the perfect toolkit for creating a sleek and efficient web app that I'm proud of. With this stack, I have a solid foundation to continue growing and expanding my project in the future.`,
    learned: `With this project, I learned how to design a website from scratch using Figma, and how to implement said design. I am particularly proud of the use of framer motion to add a slight animation to the stylized clouds. With my aesthetic evolving continiously, I know I can revisit this in the future and potentially implement payment using stripe.`,
    link: "https://insightify-react.vercel.app/",
  },
];

export default projects;
