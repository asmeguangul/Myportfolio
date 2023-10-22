 
import RestCountries from "./../assets/portfolioImages/agriculture.jpeg";
import SpaceTourism from "./../assets/portfolioImages/property.jpeg";
import Advice from "./../assets/portfolioImages/payment.jpeg";
import Page from "./../assets/portfolioImages/intropage.jpg";
// import AWS from "./../assets/portfolioImages/s3.PNG";
import Todo from "./../assets/portfolioImages/todo.jpg"

// in progress projects

import Servista from './../assets/portfolioImages/housing.jpeg'
import landingPage from './../assets/portfolioImages/url.jpg'
 
const ProjectsData = [
  {
    id: "fyp",
    img: Servista,
    name: "HOUSING CORPORATION MANAGEMENT SYSTEM:",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "#",
    source: "#",
    description:  
        "  Utilizing Spring Boot and other technologies, optimizes highvolume construction projects, streamlines stakeholder coordination, and enhances resource management. Ensures timely delivery of quality housing units and boosts overall productivity. leveraging Java, Spring Boot, Spring Cloud, React, Docker, Maven, Kafka, Git, Github, AWS, Netbeans,IntelliJ Idea, Spring Security, and JWT"  }, 
  {
    id: "rest-countries",
    img: RestCountries,
    name: "AGRICULTRE DISEASE CONTROL SYSTEM",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "#",
    source: "#",
    description:  
        "Software solution that monitors and manages crop and livestock diseases. It enables early detection and preventive measures to minimize losses. By leveraging advanced technologies and data analytics, it promotes sustainable agriculture practices. This system supports farmers in optimizing yields while ensuring the health and well-being of their crops and livestock. levereged Java, Spring Boot, React, Docker, Hibernate, Spring JPA, Eclipse, Maven, Kafka, Git, Github, and IntelliJ IDEA",
  },

  {
    id: "space-tourism",
    img: SpaceTourism,
    name: "PROPERTY MANAGEMENT SYSTEM",
    stack: ["< React.js />", "< CSS3 />"],
    live: "#",
    source: "#",
    description:  
        "Developed and collaborated on a Java-based solution using Spring Boot and React to streamline registration, rent, sale processes, and authentication. Played an integral role in the team to create an efficient property management system.leveraging Java, Spring Boot, Spring Cloud, React, Docker, Maven, Kafka, Git, Github, AWS, Netbeans, IntelliJ Idea, Spring Security, and JWT.",
  
  },
  // {
  //   id: "cloud-storage",
  //   img: AWS,
  //   name: "Cloud Storage with AWS Simple Storage Service",
  //   stack: ["< AWS S3 /> " , "< JavaScript /> " , "< Express.js />"],
  //   live: "",
  //   source: "https://github.com/rimshub/cloud-storage-s3",
  //   description:  
  //       "This challenge from frontendmentor tested my skills to create dropdown navigation menus, a common pattern on larger sites. It also has some nice basic layout challenge",
  // },

  {
    id: "advice-generator",
    img: Advice,
    name: "SELDI PAYMENT",
    stack: ["< HTML5 />", "< CSS3 />", "< JavaScript />"],
    live: "#",
    source: "#",
    description:  
        " Developed An online payment web and mobile application designed to collect school fees, service fees, cinema, and football ticket sales. Leveraging Spring boot, PostgreSQL, Angular, Angular materials, events, maven, GitHub, AWS, Jira, IntelliJ IDEA, etc."
       },


  // {
  //   id: "todo",
  //   img: Todo,
  //   name: "JavaScript Todo App",
  //   stack: ["< JavaScript />  ", "< Sass />"],
  //   live: "https://rimshub.github.io/JavaScript-Todo-App/",
  //   source: "https://github.com/rimshub/JavaScript-Todo-App",
  //   description:  
  //       "Responsive JS todo app with color theme switcher. Enables users to add, delete, filter, and clear day-to-day tasks. It has user-friendly interface and navigation. I was able to practice my JavaScript and Sass skills in this project.",
  // },


   
];

const InprogressProjectsData = [
   
  {
    id: "url-short",
    img: landingPage,
    name: "URL shortening API landing page",
    stack: ["< JavaScript />", "< NodeJS />"],
    live: "",
    source: "https://github.com/rimshub/URL-shortening-API-landing-page",
    description:  
        "Integrate with the shrtcode URL shortening API and play with browser storage in this landing page challenge",
  },

];

export default {ProjectsData, InprogressProjectsData}