import React from 'react'
import "../App.css"
import portfolioImage from "../image/portfolio.png"
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import Servies from './Servies'
import Projects from './Projects'
import About from './About'
import Footer from './Footer'

function Home() {
  return (
    <>
    <section className='home' id='home'>
  <div className='container'>
      <div className="info">
        <h2>Hello, My name's</h2>
        <h1 className='name'>Ahmed Amer</h1>
        <h3>I'm a Front End React</h3>
        <ul>
            <li>
                <a href="https://www.facebook.com/profile.php?id=100010224039198&mibextid=ZbWKwL" target='_blank'><FaFacebook /></a>
            </li>
            <li>
                <a href="https://api.whatsapp.com/send?phone=201033705805" target='_blank'><FaWhatsapp /></a>
            </li>
            <li>
                <a href="https://instagram.com/ahmed_3amer118?igshid=MzNlNGNkZWQ4Mg==" target='_blank'><FaInstagram /></a>
            </li>
            
        </ul>
      </div>
      <img src={portfolioImage} alt="Image" />
    </div>
    </section>
    {/* <Servies /> */}
   <Projects />
    <About />
    <Footer />
    </>
  
  )
}

export default Home;
