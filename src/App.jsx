import './App.css'
import useLocalStorage from "use-local-storage";
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Form1 from './components/Form1.jsx';
import Loader from './components/Loader.jsx';

  


const AboutRut = lazy(() => import("./page/aboutRut.jsx"));
const ContactRut = lazy(() => import("./page/ContactruT/contactRut.jsx"));
const ProjectRut = lazy(() => import("./page/projectRut.jsx"));
const ServiceRut = lazy(() => import("./page/serviceRut.jsx"));
const SkillRut = lazy(() => import("./page/skillRut.jsx"));
const HeaderRut = lazy(() => import("./page/headerRut.jsx"));
const TestimonialRut = lazy(() => import("./page/testimonialsRut.jsx"));







export const App = () => {

  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDark, setIsDark] = useLocalStorage("isDark", preference);

    const [language, setLanguage] = useLocalStorage("language", "en" );

    const handleLanguageChange = (lang) => {
         setLanguage(lang);


         useEffect(() => {
          const userKey = "userId"; 
          let userId = localStorage.getItem(userKey);
  
          // Generate a unique user ID if user is new
          if (!userId) {
              userId = "user_" + Math.random().toString(36).substr(2, 8); 
              localStorage.setItem(userKey, userId);
          }
  
          // Send visit data to your backend
          fetch("http://localhost:7000/log-visit", {  // Replace with your backend URL
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                  userId: userId,
                  timestamp: new Date().toISOString()
              })
          }).catch(error => console.error("Error logging visit:", error));
  
      }, []); // Runs only once when the app loads
  
    };

  return (
   
  <Router >
     <div className='App' data-theme={isDark ? "dark" : "light"}> 


         <Form1 isChecked={isDark}
                    handleChange = {() => setIsDark(!isDark)}
                    language ={language}
                    onLanguageChange = {handleLanguageChange}/>

    <Suspense fallback={ <Loader />}>

    <Routes>

       <Route path="/" element={<HeaderRut />} />
       <Route path="/AboutRut" element={<AboutRut />} />
       <Route path="/ContactRut" element={<ContactRut language ={language}/>} />
       <Route path="/ProjectRut" element={<ProjectRut />} />
       <Route path="/ServicesRut" element={<ServiceRut />} />
       <Route path="/SkillRut" element={<SkillRut />} />
       <Route path="/TestimonialRut" element={<TestimonialRut />} />
       
     </Routes>
      </Suspense> 
        <Footer language={language}/>
       
    
        </div>
     </Router>
 
  );
};

export default App;
    
     
{/*  
  <Navbar
     isChecked={isDark}
     handleChange = {() => setIsDark(!isDark)}
     language ={language}
     onLanguageChange = {handleLanguageChange}
     />
      <Headerv language={language}/>
    <About language={language}/>import About from './components/About/About';
    <Skills language={language}/>
    <Project language={language}/>
    <Services1 language={language}/>
  
    <Contacts language={language}/>
    <Footer language={language}/>
  <Textimonial language={language}/>
   
    */}
    
/*
const About = lazy(() => import("./components/About/About.jsx"));
const Contacts = lazy(() => import("./components/Contacts/Contacts.jsx"));
const Projects = lazy(() => import("./components/My-Projects/Project.jsx"));
const Services = lazy(() => import("./page/serviceRut.jsx"));
const Skills = lazy(() => import("./components/Skills/Skills.jsx"));
const Header = lazy(() => import("./components/Header/header.jsx"));
const Testimonials = lazy(() => import("./components/Testimonials/Textimonials.jsx"));


<Route path="/About" element={<About />} />
       <Route path="/Contacts" element={<Contacts />} />
       <Route path="/projects" element={<Projects />} />
       <Route path="/Services" element={<Services />} />
       <Route path="/Skills" element={<Skills />} />
       <Route path="/header" element={<Header />} />
       <Route path="/Testimonials" element={<Testimonials />} />
      
       

*/
/*
import Skills from './components/Skills/Skills';
import Services1 from './components/Services!/Services1';
import Textimonial from './components/Testimonials/Textimonials.jsx';
import Project from './components/My-Projects/Project';
import Headerv from './components/Header/header.jsx';
import Contacts from './components/Contacts/Contacts';*/