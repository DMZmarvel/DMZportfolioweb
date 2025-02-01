import React from 'react'
import './project.css';
import { FaGlobe, FaGithub} from "react-icons/fa6";


function Project() {
  return (
    <div className='Project' id='project'>

<div className="pkot0"></div>
  <div className="pkot1"></div>
  <div className="pkot11"></div>
  <div className="pkot111"></div>

        <div className="proContainer">
              <h1 className='proh1'>My Projects</h1>

              <div className="theprojects">
                <div className="project1">
                    <div className="imagedescribe"></div>
                    <div className="projectlink">
                        <p>SOCIAL MEDIA CLONE</p>
                        <div className="linkaa">
                                   <a href="https://github.com/DMZmarvel"><FaGithub  className="icons"/></a>
                                   <a href="#"> <FaGlobe className="icons" /> </a>
                        </div>
                    </div>
                    <div className="projecttext">
                        <p>A social media clone replicates the functionality of popular platforms, allowing users to create 
                            profiles, share posts, and connect with others, showcasing expertise in backend, frontend, and 
                            database integration.
                        </p>
                    </div>
                </div>

                <div className="project2">
                <div className="imagedescribe2"></div>
                    <div className="projectlink2">
                        <p>E-COMMERCE WEBSITE</p>
                        <div className="linkaa2">
                                   <a href="https://github.com/DMZmarvel"><FaGithub  className="icons"/></a>
                                   <a href="#"> <FaGlobe className="icons" /> </a>
                        </div>
                    </div>
                    <div className="projecttext2">
                        <p>An e-commerce website facilitates online shopping, featuring product listings, a secure 
                            payment gateway, and user-friendly design, emphasizing expertise in UI/UX, secure transactions, 
                            and inventory management.
                        </p>
                    </div>
                </div>

                <div className="project3">
                <div className="imagedescribe3"></div>
                    <div className="projectlink3">
                        <p>CHATTING APP</p>
                        <div className="linkaa3">
                                   <a href="https://github.com/DMZmarvel"><FaGithub  className="icons"/></a>
                                   <a href="#"> <FaGlobe className="icons" /> </a>
                        </div>
                    </div>
                    <div className="projecttext3">
                        <p>A chatting app enables real-time communication through text, voice, or video. It focuses 
                            on secure messaging, seamless user experience, and scalability for handling multiple users.

                        </p>
                    </div>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Project