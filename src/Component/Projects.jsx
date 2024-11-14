import React, { useEffect, useRef, useState } from "react";
import vemoda from "../image/vemoda.png";
import weatherApp from "../image/weather.jpg";
import template from "../image/template.jpg";
import crud from "../image/crud.jpg";
import Qrcode from "../image/qrcode.jpg";
import quiz from "../image/quiz.jpg";
import { Link, useLocation } from "react-router-dom";
import Footer from "./Footer";
import "../CSS/home.css";

const projectsData = [
  {
    id: 1,
    link: "https://vemoda-dist.vercel.app/",
    image: vemoda,
    title: "Vemoda Store",
    description:
      "Vemoda is built using React. Techniques used: Context Api, API Products",
  },
  {
    id: 2,
    link: "https://ahmed3mer118.github.io/Crud",
    image: crud,
    title: "Product management system",
    description:
      " Data can be stored in LocalStorage , and export data to sheet excal",
  },
  {
    id: 3,
    link: "https://quiz-app-zeta-gules.vercel.app/",
    image: "/image/quiz4.png",
    title: "Quiz App",
    description:
      "A simple project for Quiz App: HTML, CSS, JS, Bootstrap, and React.",
  },
  {
    id: 4,
    link: "https://wheaterapp118.netlify.app/",
    image: "/image/weatherapp.png",
    title: "Weather App",
    description:
      "A project to know the weather condition through the use of an API that can be searched by city name.",
  },
  {
    id: 5,
    link: "https://ahmed3mer118.github.io/Simple-Template",
    image: template,
    title: "Restaurant-Template",
    description:
      "This is a simple model for a restaurant, and the site is responsive on all screens.",
  },
  {
    id: 6,
    link: "https://ahmed3mer118.github.io/QR-code",
    image: Qrcode,
    title: "QR code",
    description: "A simple project for QR CODE. You can create any QR and scan it.",
  },
];

function ProjectBox({ project }) {
  const [isVisible, setIsVisible] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (boxRef.current) observer.observe(boxRef.current);

    return () => {
      if (boxRef.current) observer.unobserve(boxRef.current);
    };
  }, []);

  return (
    <div ref={boxRef} className={`box ${isVisible ? "visible" : ""}`}>
      <Link to={project.link} target="_blank">
        <img src={project.image} alt={project.title} />
        <div className="details">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <button className="btn btn-success ">Live Dimo</button>
        </div>
      </Link>
    </div>
  );
}

function Projects() {
  const location = useLocation();
  const showFooter = location.pathname === "/projects";

  return (
    <>
      <section className="projects">
        <h1 className="title">My Projects</h1>
        <div className="project-box container">
          {projectsData.map((project) => (
            <ProjectBox key={project.id} project={project} />
          ))}
      
        </div>
      </section>
      {showFooter && <Footer />}
    </>
  );
}

export default Projects;
