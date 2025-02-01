import React, { useState } from 'react';
import './About.css'


export const About = () => {
  return (
    <div className="main-About" id='about'>
        
  <div className="dottt"></div>
  <div className="dot000"></div>
  <div className="dot0001"></div>
  <div className="dot00011"></div>
  <div className="dot111"></div>

    <div className="About">
     <div className="first-about">
        <div className="my-pics">
          
        </div>
        <div className="my-text1">
          <div className="FName">` Destiny Chukwuemeka</div>
          <div className="FName">  ` 00 Years</div>
          <div className='FName'>` Nigeria</div>
          <div className='FName'>` destinmarvel3@gmail.com</div>
          <div className="FName">` +234 703 182 8844</div>
      

        </div>
    </div>

    <div className="first-about1">
          <h1 className='bold'>About Me</h1>
      
      <div className="Mintro">
          <p className="intro">
               Hi, I'm <span>Destin marvel</span>, am a passionate and decicated software developer,
               Whith 3 Years of exprience as a professional developer, i have acquired the 
               skill necessary to build great and premium websites,mobile apps,accounts... 
               <br />
               I enjoy crafting intuitive and functional solution to complex problems
          </p>
          </div>
       

           <div className="experties">
          <h1 className="expt">Expertise</h1>

          <div className="exptins">
          <div className="tin">` Visual Studio</div>
           <div className="tin">` Postman</div>
           <div className="tin">` Debugging</div>
           <div className="tin">` GitHub</div>
           <div className="tin">` Database</div>
          </div>
          </div>

          <div className="hubbies">
            <h1 className='hub'>Hubbies</h1>

            
            <p>` <span>Music</span> tends to help me concentrate on tasks and projects.</p>
            <p>` <span>Adventure</span> going to places most times relifes my stress,burdings.</p>
            <p>` <span>Reading</span> improves my analytical skills, critical thinking, problem solving, communication.</p>
            <p>` <span>Board games</span> makes me push through my limits it improves my logical thinking.</p>
            <p>` <span>Writing</span> at times do help me express my opinion and share what am working on.</p>
          </div>
    </div>
    </div>
    </div>
  )
}

export default About