import React from 'react'
import './services.css';
import { FaCode, FaGlobe, FaFunnelDollar } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { SiWebmoney } from "react-icons/si";
import userImage0 from "../../assets/webdesign3.jpeg";
import userImage1 from "../../assets/webdevelopment2.jpeg";
import userImage2 from "../../assets/degitalmarket2.jpeg";
import userImage3 from "../../assets/webhost2.jpeg";
import userImage4 from "../../assets/Appdev1.jpeg";
import userImage5 from "../../assets/iot2.jpeg";

function Services1() {
  return (
    <div className="service" id='services'>

<div className="pkot0"></div>
  <div className="pskot1"></div>
  <div className="pskot11"></div>
  <div className="pskot111"></div>
  <div className="pskot1111"></div>



    <div className='what-we-do'>
        <h1 className="serviceh1"> Services </h1>
        <p className="servicep">I offer the full spectrum of Services
            to help org's work better.
        </p>

        <div className="seriveshold2">
            <div className="services-1">

                <div className="ido1">
                   <img src={userImage0}/>
                      <a href="#"> <FaCode className="icon code" /> </a>

                       <h3 className='codeh3'>Web Design</h3>
                       <p className='codep'> Web Design refers to the design of websites
                        that are displayed in the internet. It usually refers to the 
                        use of exprience...
                       </p>
                </div>
                <div className="ido1">
                   <img src={userImage1}/>
                     <a href="#"> <FaGlobe className="icon code" /> </a>

                       <h3 className='codeh3'>Web Development</h3>
                       <p className='codep'> Web development is the building and
                        maintenance of websites; It's the work that happens behind
                        the scenes to...
                       </p>
                </div>
                <div className="ido1">
                <img src={userImage2}/>
                     <a href="#"> <FaFunnelDollar className="icon code" /> </a>

                       <h3 className='codeh3'>Digital Marketing</h3>
                       <p className='codep'> At a high level, digital Marketing refers to
                        advertising delivered through digital channels 
                       </p>
                </div>
            </div>

            <div className="services-2">
            <div className="ido1">
            <img src={userImage3}/>
                 <a href="#"> <SiWebmoney className="icon code" /> </a>

                       <h3 className='codeh3'>Web Hosting</h3>
                       <p className='codep'> Every wesite that you visit consists of a domain
                        name and a web host.
                       </p>
                </div>
                <div className="ido1">
                <img src={userImage4}/>
                     <a href="#"> <MdOutlineDeveloperMode className="icon code" /> </a>

                       <h3 className='codeh3'>App Development</h3>
                       <p className='codep'> Mobile app development is the act or process
                        by which a mobile app is developed for mobile devices
                       </p>
                </div>
                <div className="ido1">
                <img src={userImage5}/>
                     <a href="#"> <GrTechnology className="icon code" /> </a>

                       <h3 className='codeh3'>IOT Projects</h3>
                       <p className='codep'>The internet of Things (IoT) describes the network
                        of physical objects---"things"--that are embedded With sensors...
                       </p>
                </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Services1