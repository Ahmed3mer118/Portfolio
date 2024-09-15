import React from "react";
import portfolioImage from "../image/portfolio.png";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
function About() {
  const location = useLocation()
  const showFooter = location.pathname ==="/about"
  return (
    <>
    <section className="about ">
      <div className="about container">
        <img src={portfolioImage} alt="portfolio image" />
        <div className="details">
          <h1 className="title">About Me </h1>
          <p>
           
            I'm Ahmed amer , I'm studying department of Business information
            system , now i working part time Front-end
          </p>

          <h1 className="text-center text-primary mt-2">Skills</h1>
          <div className="skills">
            <div className="skills-details">
              <h3>HTML</h3>
              <h3>CSS</h3>
              <h3>JS</h3>
              <h3>Bootstrap</h3>
              <h3>Tailwind</h3>
              <h3>React</h3>
            </div>
            <div className="skills-details">
              <h3>Git & GitHub</h3>
              <h3>Responsive Website</h3>
              <h3>Figma</h3>
              <h3>Headless CMS</h3>
              <h3>State Management</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    {showFooter &&   <Footer />}

    </>
  );
}

export default About;
