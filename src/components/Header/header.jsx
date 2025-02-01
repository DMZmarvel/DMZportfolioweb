import React, { useState, useEffect } from 'react';
import { FaXTwitter, FaInstagram, FaGithub, FaFacebookF, FaTelegram, FaLinkedinIn,FaYoutube } from "react-icons/fa6";
import { IoLanguageSharp } from "react-icons/io5";
import { FaWhatsapp, FaFacebookMessenger  } from "react-icons/fa";
import {  FaXmark} from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const header = () => {

    
document.addEventListener("DOMContentLoaded", () => {

    const text = document.querySelector(".snd-text");
    
    if (!text) {
      console.error("Text element not found");
      return
    }
    {/*
    const text = document.querySelector(".snd-text");*/}
    

    const textLoad = () => {
 
        setTimeout(() => {
          text.textContent = "Programmer";
        }, 0);
  
        setTimeout(() => {
          text.textContent = "Cyber-Sec";
        }, 4000);
  
        setTimeout(() => {
          text.textContent = "Developer"; 
        }, 8000); //1s = 1000 milliseconds
  
  };
  textLoad();
  setInterval(textLoad, 12000);
  });

  
  const navigate = useNavigate();

  const goToContacts = () => {
     navigate("/ContactRut")
  }


  

   
  const showSid = () => {
    const smallsc = document.querySelector ('.chat-me');
        smallsc.style.left = '26.5%';
 };
        const hideSid = () => {
         const smallsc = document.querySelector ('.chat-me');
             smallsc.style.left = '-300px';
 
 };


 const Counter = ({ value }) => {
const [count, setCount] = useState(0);

useEffect(() => {
  let start = 0;
  const duration = 2000;
  const stepTime = Math.max(10, duration / value);

  const counter = setInterval(() => {
    start++;
    setCount(start);

    if (start >= value){
      clearInterval(counter);
    }
  }, stepTime);

  return () => clearInterval(counter);
}, [value]);

 return <div className="counter">{count}</div>
 }

 /*function animateNumber(id, target){
  let element = document.getElementById(id);
  let start = 0;
  let end = parseInt(target);
  let duration = 2000; // Animation duration in milliseconds
  let interval = Math.max(10, duration / end); // Adjust interval based on value

  let counter = setInterval(() => {
    start++;
    element.textContent = start;
     if (start >= end){
      clearInterval(counter);
     }
  }, interval);
 }

window.onload = () => {
  animateNumber("experience", document.getElementById("experience").dataset.value);
  animateNumber("Projects", document.getElementById("Projects").dataset.value);
  animateNumber("Satisfaction", document.getElementById("Satisfaction").dataset.value);
};

*/
  return (
     <div className='nav' id='portfolio'>
    
      <div className="dot"></div>
      <div className="dot0"></div>
      <div className="dot1"></div>
    
   
        <div className="toone">
    
        <div className="header">
               <div className="hi">
    
                <div className="appir">
               <span className="text first-text">Hello, i'm <span>Destin marvel</span><br /> Am a </span>
               <span className="text snd-text" id='gramm'>Programmer</span>
               </div>
    
            
                    <div className="satisfactory">
                      <div className="tory0">
                        <h1  id="experience" data-value="3"><Counter value={10}/></h1>
                        <p>Years of exprience</p>
                      </div>
                      <hr />
                      <div className="tory0">
                        <h1 id="Projects" data-value="10"><Counter value={10}/></h1>
                        <p >Project Success</p>
                      </div>
                      <hr />
                      <div className="tory0">
                        <h1> <Counter value={91}/></h1>
                        <p>Satisfied Rate</p>
                      </div>
                    </div>
    
                    <div className="btn-box" >
                      
                      <div className="chat-me" id='chatbox'  >
                     
                        <a  href="https://telegram.org/dl"className='wath'><FaTelegram className='wht' /></a>
                        <a className='wath'  href="https://m.me/cm/AbbiIbIGeqNXwdET/?send_source=cm%3Acopy_invite_link"><FaFacebookMessenger className='wht' /></a>
                        <a className='wath' href="https://whatsapp.com/dl/"><FaWhatsapp className='wht'/></a>
                        <a  className='xcanscle' onClick={hideSid}><FaXmark /></a>
                      </div>
                        <button className='smallsc' onClick={showSid} > Let's Talk </button>
                        <button className='smallsc' onClick={goToContacts}> Hire Me</button>
                    </div>
    
    
          </div>
    
               <div className="imageside">
                <div className="imgcontainer">
                  <div className="social">
                  <a href="https://x.com/Lucasaustin07?t=3h69RvXOq4URAfd_ymtMnw&s=09"><FaXTwitter className="icons twiter"/></a>
                  <a href="https://github.com/DMZmarvel"><FaGithub  className="icons bear"/></a>
                  <a href="https://www.instagram.com/marvel0490?igsh=YzljYTk1ODg3Zg=="><FaInstagram className="icons bear"/></a>
                  <a href="https://www.facebook.com/profile.php?id=100073069950448"><FaFacebookF className="icons bear"/></a>
                  <a href="https://youtube.com/@destinmarvel?si=vl8utXuOWziaaW3h"><FaYoutube className="icons bear"/></a>
                  <a href="https://www.linkedin.com/in/destin-marvel-29721427a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn className="icons bear"/></a>
    
                  </div>
                </div>
               </div>
    
        </div>
         
        
         
       </div>
        </div>
  )
}

export default header