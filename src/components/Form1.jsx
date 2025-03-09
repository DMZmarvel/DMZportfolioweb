import React, { useState, useEffect, useRef } from 'react';

import {  FaXmark, FaBars, FaWifi } from "react-icons/fa6";
import { Link , useLocation} from "react-router-dom"
import '../page/forall.css'




const Form1 = ({ handleChange, isChecked }) => {


  /*
const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  useEffect (() => {
    //Save to local storage
    localStorage.setItem('language', language);

    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
             pageLanguage: 'en', // Defult page language
             includedLanguages: 'en,fr,de,es',
             layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
             autoDisplay: false,
          },
          'google_translate_element'
        );
      };
    };

    if (!document.querySelector('script[src*="translate.google.com"]')) {
      addGoogleTranslateScript();
    }
  


   const setInitiallLanguage = () => {
     const selectDropdown = document.querySelector('.goog-te-combo');     
    if (selectDropdown && language) {
      selectDropdown.value = language; //set language from local storage
      selectDropdown.dispatchEvent(new Event('change')); //triger change event
    }
  };

  //wait for the widget to initialize


    const observer = new MutationObserver(() => {
      const dropdown = document.querySelector('.goog-te-combo');
      if (dropdown) {
        setInitiallLanguage();
        observer.disconnect(); //Stop observing once initialized
      }
    });

    observer.observe(document.body, { childList: true, subtree: true});
  }, [language]);

  //Handle manual language change
  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);


    const dropdown = document.querySelector('.goog-te-combo');
    if (dropdown) {
      dropdown.value = selectedLanguage;
      dropdown.dispatchEvent(new Event('change'));
    }
  };


*/


const [isOnline, setIsOnline] = useState(navigator .onLine);
  
  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator .onLine);
    };

   /* if (!navigator .onLine){
      alert("❌ You are Offline! Please check Your Internet Connection");
    }
    else{
      alert("✅ You are back online");
    }*/
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);


    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    }
  }, []);











const [isOpen, setIsOpen] = useState(false);
   const sidebarRef = useRef(null);


   
  const showSidebar1 = () => {
   setIsOpen(true)
};
       const hideSidebar1 = () => {
        setIsOpen(false);
};


useEffect(() => {
  const handleClickOutside = (event) => {
  if (sidebarRef.current && !sidebarRef.current.contains(event.target)){
    hideSidebar1();
  }
};
   if (isOpen) {
    document.addEventListener("mousedown", handleClickOutside);
   } else {
    document.removeEventListener("mousedown", handleClickOutside);
   }

   return () => document.removeEventListener("mousedown", handleClickOutside);
}, [isOpen]);


const [activeLink, setActiveLink] = useState("/");
const location = useLocation();

useEffect(() => {
    setActiveLink(location.pathname);
}, [location]);




  
const [time, setTime] = useState({ hours: "00", minutes: "00"});
const [showDot, setShowDot] = useState(true);

const days = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"]

 useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setShowDot((prev) => !prev);
        setTime({
          hours: String(now.getHours()).padStart(2, "0"),
          minutes: String(now.getMinutes()).padStart(2, "0"),
          day: now.getDay(),
        })
    }, 1000);
    return () => clearInterval(interval);
 }, []);


 const [position, setPosition] = useState({ x: 0, y: 0 });

 const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientReact();
   setPosition({
     x: e.clientX - rect.left,
     y: e.clientY - rect.top,
   });
 };

    return(

       <div className='nava2'>
      
        <div className="dot"></div>
        <div className="dot0"></div>
        <div className="dot1"></div>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
            <div className="navchange2">

              
            <div className="logo2">
              <h1>DMZ</h1>
            </div>
  
           <div className="onlinset">
            {!isOnline && <FaWifi className='wifi-icon'/>}
           </div>

    {/*  <div>
        <label htmlFor="language-select">Language:</label>
        <select id="language-select" value={language} onChange={handleLanguageChange}>
             <option value="en">English</option>
             <option value="fr">French</option>
             <option value="de">German</option>
             <option value="es">Spanish</option>
             </select>
      </div>

       Placeholder for Google Translate widget */}
      <div id='google_translate_element' style={{ display: 'none'}}></div>


            <div className="links2">
            {/*<Link to="/" className='active'><p>Header</p></Link> 
              <Link to="/AboutRut"><p>About</p></Link> 
             
              <Link to="/SkillRut"><p>Skills</p></Link> 
              <Link to="/ServicesRut"><p>Service</p></Link> 
              <Link to="/ProjectRut"><p>Project</p></Link> 
              <Link to="/TestimonialRut"><p>Testimonials</p></Link> */}


                
            <Link to="/" className={activeLink === "/" ? "active" : ""} >
                <p>Header</p>
            </Link>
            <Link to="/AboutRut" className={activeLink === "/AboutRut" ? "active" : ""} >
                <p>About</p>
            </Link>
            <Link to="/SkillRut" className={activeLink === "/SkillRut" ? "active" : ""} >
                <p>Skills</p>
            </Link>
            <Link to="/ServicesRut" className={activeLink === "/ServicesRut" ? "active" : ""}>
                <p>Service</p>
            </Link>
            <Link to="/ProjectRut" className={activeLink === "/ProjectRut" ? "active" : ""}>
                <p>Project</p>
            </Link>
            <Link to="/TestimonialRut" className={activeLink === "/TestimonialRut" ? "active" : ""} >
                <p>Testimonials</p>
            </Link>
       

            </div>
      

           


              <div className="inputs2">
              <Link to="/ContactRut"><button className='tactrec'>Contact</button></Link> 
      
              <div className="ttime">
    <div className="digital-clock">
    <div className="weak">
        {days.map((day, index) =>(
          <div key={index} className={index === time.day ? "active9" : ""}>
            {day}
          </div>
        ))}
      </div>
    <div className="time">
        <div className="timehour">{time.hours}</div>
        <div className={`timedot ${showDot ? "" : "invisible"}`}>:</div>
        <div className="timemin">{time.minutes}</div>
       </div>

    </div>
</div> 

<div className="inputcheck33">
              <input type="checkbox" id='darkmode-toggle33'  onChange={handleChange} checked={isChecked}/>
              <label className='label33' htmlFor="darkmode-toggle33"></label>
             </div>
      
<button className="smallscr2" onClick={showSidebar1}><FaBars /></button>

  
      
      
            
{/*
             <input type="checkbox" id='checking' />
   <label className='FaBar' htmlFor="checking"><FaBars /></label>

   <div className="checkingCon">
  

   </div>*/}


             
          
               </div>
            
         

         <div ref={sidebarRef} className={`sidebar2 ${isOpen ? "open" : ""}`} >
          
      
            <div className="dott"></div>
            <div className="dot11"></div>
      
      
              <div className="inside2">
             <div className="xx2" onClick={hideSidebar1}><FaXmark /></div>
               
             <div className="inputcheck2">
              <input type="checkbox" id='darkmode-toggle2'  onChange={handleChange} checked={isChecked}/>
              <label className='label7' htmlFor="darkmode-toggle2"></label>
             </div>
 
      
      
      
             <Link to="/ContactRut" onClick={hideSidebar1}> <button className='insbtn2'>Contact Me</button></Link> 
      
      
              <div className="linkss2">
            {/* <Link to="/" className='active' onClick={hideSidebar1}><p>Header</p></Link> 
              <Link to="/AboutRut" onClick={hideSidebar1}><p>About</p></Link> 
              <Link to="/SkillRut" onClick={hideSidebar1}><p>Skills</p></Link> 
              <Link to="/ServicesRut" onClick={hideSidebar1}><p>Service</p></Link> 
              <Link to="/ProjectRut" onClick={hideSidebar1}><p>Project</p></Link> 
              <Link to="/TestimonialRut" onClick={hideSidebar1}><p>Testimonials</p></Link>
             */}

            
<Link to="/" className={activeLink === "/" ? "active" : ""} onClick={() => { setActiveLink("/"); hideSidebar1(); }}>
                <p>Header</p>
            </Link>
            <Link to="/AboutRut" className={activeLink === "/AboutRut" ? "active" : ""} onClick={() => { setActiveLink("/AboutRut"); hideSidebar1(); }}>
                <p>About</p>
            </Link>
            <Link to="/SkillRut" className={activeLink === "/SkillRut" ? "active" : ""} onClick={() => { setActiveLink("/SkillRut"); hideSidebar1(); }}>
                <p>Skills</p>
            </Link>
            <Link to="/ServicesRut" className={activeLink === "/ServicesRut" ? "active" : ""} onClick={() => { setActiveLink("/ServicesRut"); hideSidebar1(); }}>
                <p>Service</p>
            </Link>
            <Link to="/ProjectRut" className={activeLink === "/ProjectRut" ? "active" : ""} onClick={() => { setActiveLink("/ProjectRut"); hideSidebar1(); }}>
                <p>Project</p>
            </Link>
            <Link to="/TestimonialRut" className={activeLink === "/TestimonialRut" ? "active" : ""} onClick={() => { setActiveLink("/TestimonialRut"); hideSidebar1(); }}>
                <p>Testimonials</p>
            </Link>
       





            </div>
              </div>
            </div>
          </div>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
          </div>















    );
}

export default Form1