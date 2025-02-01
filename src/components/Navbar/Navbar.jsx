import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import './Navbar.css'
import {  FaXmark, FaBars } from "react-icons/fa6";







 


export const Navbar = ({ handleChange, isChecked, language, onLanguageChange, }) => {

 

  const showSidebar = () => {



     const smallscr = document.querySelector ('.sidebar');
         smallscr.style.display = 'flex';
  };
         const hideSidebar = () => {
          const smallscr = document.querySelector ('.sidebar');
              smallscr.style.display = 'none';

};



  return (
  <div className='nava' id='portfolio'>

  <div className="dot"></div>
  <div className="dot0"></div>
  <div className="dot1"></div>




      <div className="navchange">

      <div className="logo">
        <h1>DMZ</h1>
      </div>

   




      <div className="links">
      <Link to="portfolio" spy={true} smooth={true} offset={20} duration={500} className="active">Portfolio</Link>
        <Link to="about" spy={true} smooth={true} offset={-38} duration={500}>About me</Link>
        <Link to="skills" spy={true} smooth={true} offset={-68} duration={500}>Skills</Link>
        <Link to="project" spy={true} smooth={true} offset={-54} duration={500}>Projects</Link>
        <Link to="services" spy={true} smooth={true} offset={-48} duration={500}>Service</Link>
        <Link to="textimonials" spy={true} smooth={true} offset={-67} duration={500}>Testimonials</Link>
       
      </div>

        <div className="inputs">
        <Link to="contactlink" spy={true} smooth={true} offset={-67} duration={500}><button className='tact'>Contact Me</button></Link> 

      <div className='guage'>
        <label htmlFor="language"></label>

        <select 
        id="language"
        value={language}
        onChange={(e) => onLanguageChange(e. target.value)}>

          <option value="en">Eng </option>
          <option value="fr">Fran</option>
          <option value="es">Espa</option>
          <option value="de">Deut</option>
        </select>
      </div>


    



       <div className="inputcheck">
        <input type="checkbox" id='darkmode-toggle'  onChange={handleChange} checked={isChecked}/>
        <label htmlFor="darkmode-toggle"></label>
       </div>

       <button className="smallscr" onClick={showSidebar}><FaBars /></button>
    
         </div>
      
   
      <div className="sidebar">

      <div className="dott"></div>
      <div className="dot11"></div>


        <div className="inside">
          <div className="xx" onClick={hideSidebar}><FaXmark /></div>
        



       <Link to="contactlink" spy={true} smooth={true} offset={-67} duration={500}><button className='insbtn'>Contact Me</button></Link> 


        <div className="linkss">
        <Link to="portfolio" spy={true} smooth={true} offset={20} duration={500} className="active">Portfolio</Link>
        <Link to="about" spy={true} smooth={true} offset={-38} duration={500}>About me</Link>
        <Link to="skills" spy={true} smooth={true} offset={-68} duration={500}>Skills</Link>
        <Link to="project" spy={true} smooth={true} offset={-54} duration={500}>Projects</Link>
        <Link to="services" spy={true} smooth={true} offset={-48} duration={500}>Service</Link>
        <Link to="textimonials" spy={true} smooth={true} offset={-67} duration={500}>Testimonials</Link> 
        </div>

      </div>




      </div>





    </div>



























    </div>
  )
}

export default Navbar
