import React, { useState } from "react";

import vemoda from "../image/vemoda.png";
import weatherApp from "../image/weather.jpg";
import template from "../image/template.jpg";
import crud from "../image/crud.jpg";
import Qrcode from "../image/qrcode.jpg";
import quiz from "../image/quiz.jpg";
import { Link,  useLocation } from "react-router-dom";
import Footer from "./Footer";

function Projects() {
  // const [showFooter, setShowFooter] = useState(false);
  const location= useLocation()
   const  showFooter = location.pathname === "/projects"

  return (
    <> 
    <section className="projects ">
      <h1 className="title">My Project</h1>
      <div className="project-box container">
        <div className="box">
          <Link to="https://vemoda.netlify.app/" target="_blank">
            <img src={vemoda} alt="project1" />
            <div className="details">
              <h2>Vemoda Store</h2>
              <p>
                Vemoda is built using React
                <br />
                use Techniques :<span>Context Api </span>
                <span>API Products</span>
              </p>
            </div>
          </Link>
        </div>
        {/* <div className="box">
          <Link to="https://ahmed3mer118.github.io/Crud" target="_blank">
            <img src={crud} alt="project3" />
            <div className="details">
              <h2>Product management system</h2>
              <p>
                Product management system using JavaScript. Data can be stored
                in LocalStorage. Products can be modified or deleted.
              </p>
            </div>
          </Link>
        </div> */}
             <div className="box">
          <Link to="/quiz">
            <img src={"/image/quiz4.png"} alt="project5" />
            <div className="details">
              <h2>Quiz App </h2>
              <p>A simple project for Quiz App: HTML , CSS , JS , Bootstrap and React</p>
            </div>
          </Link>
        </div>
        <div className="box">
          <Link to="https://wheaterapp118.netlify.app/" target="_blank">
            <img src={"/image/weatherapp.png"} alt="project3" />
            <div className="details">
              <h2>Weather App</h2>
              <p>
                A project to know the weather condition through the use of an
                API that can be searched by city name
              </p>
            </div>
          </Link>
        </div>
        <div className="box">
          <Link
            to="https://ahmed3mer118.github.io/Simple-Template"
            target="_blank"
          >
            <img src={template} alt="project2" />
            <div className="details">
              <h2>Restaurant-Templat</h2>
              <p>
                This is a simple model for a restaurant, and the site is
                responsive on all screens
              </p>
            </div>
          </Link>
        </div>
        <div className="box">
          <Link to="https://ahmed3mer118.github.io/QR-code" target="_blank">
            <img src={Qrcode} alt="project5" />
            <div className="details">
              <h2>QR code </h2>
              <p>A simple project for QR CODE can you create any QR and scan</p>
            </div>
          </Link>
        </div>
   
      </div>
    </section>
    { showFooter && <Footer /> }
    </>
  );
}

export default Projects;
