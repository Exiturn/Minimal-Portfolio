import * as icons from "../../assets/icons";
import * as showcase from "../../assets/showcase";

const projects = [
  {
    title: "ADV/MNSTRY",
    index: 0,
    description:
      "A level 3 frontend practice challenge based on the basicagency website. Built with Next.js 13, Typescript, TailwindCSS, Gsap and Framer Motion.",
    image: showcase.advdesktop,
    showcase: showcase.advshowcase,
    stack: [icons.react, icons.tailwind, icons.framer, icons.nextjs],
    fullDescription: `This level 3 frontend challenge was a fun one. Not only was it of a website I already know from scouting pretty but minimal web designs but because it also matches the exact design aesthtic I want to be known for. I happened to come across this challenge on Frontend Mentor one day and it has been a great way to dissect and reverse engineer how one of my inspirational websites is developed. Design wise, I have learned a lot from deep diving into how they integrated some of their frontend features like their colour transition which I am still trying to figure out. All in all, it has been a whole lot of fun.`,
    id: "advmnstry",
    stackDescription: `The tech stack I chose was based on learning Next.js along with my other go-to's in development like TailwindCSS and React (of course). This isn't my first time using Next.js nor will it be my last, as it provides a lot of general quality of life improvements over vanilla react including project structure and SEO optimizations. I was mainly after the project structure. Framer-motion and GSAP were both used for some of the animations included although minimal, i'm definitely getting used to those libraries, both are quite intuitive.`,
    learned: `Creating this project was a lot of fun, it truly made my web designer happy to be able to work with such a beautifully made website. Especially this time, being able to
       understand the methods of implementation of some of the features. It still proves to be a challenge which I appreciate as I am still trying to figure out the last transition animation.`,
    link: "https://adv-mnstry.vercel.app/",
  },
  {
    title: "Prompto",
    index: 1,
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
    title: "Churchside Antiques",
    index: 2,
    description:
      "A freelance project for Churchside Antiques built with Next.js 14 and styled with TailwindCSS.",
    image: showcase.cadesktop,
    showcase: showcase.cashowcase,
    stack: [icons.react, icons.nextjs, icons.tailwind],
    fullDescription:
      "Churchside Antiques is a freelance project I carried out for a client. This site was built using Next.js 14 (for SEO reasons), React and TailwindCSS. As this project was client-facing, I worked alongside them from the ground up. The design I built with his requirements and customer demographic in mind",
    id: "insightify",
    stackDescription: `I went with my usual tech stack with this project as my client wanted his website to rank well for search engines. Therefore Next.js was my first thought due to having SEO optimizations off the bat with their server components. React and Tailwind are my used and most comfortable technologies so I went with what I knew.`,
    learned: `Churchside Antiques was my first freelance project for a client, which means I am responsible for pretty much everything that comes with. This meant I was designer by day, developer by night and occasional SEO optimizer. This project taught me a lot about what a freelance web developer deals with on a day to day and very important lessons were learned because of it. Web developers are multi-faceted, we bring so many different skills and specializations, so much that there are teams based on said specializations. This makes me respect freelancers, a whole lot more.`,
    link: "https://www.churchsideantiques.org.uk/",
  },
];

export default projects;
