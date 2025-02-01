import React from 'react'
import './services.css';
import { FaCode, FaGlobe, FaFunnelDollar } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { SiWebmoney } from "react-icons/si";


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
                  <img src="/public/image/webdesign3.jpeg" alt="" />
                      <a href="#"> <FaCode className="icon code" /> </a>

                       <h3 className='codeh3'>Web Design</h3>
                       <p className='codep'> Web Design refers to the design of websites
                        that are displayed in the internet. It usually refers to the 
                        use of exprience...
                       </p>
                </div>
                <div className="ido1">
                  <img src="/public/image/webdevelopment2.jpeg" alt="" />
                     <a href="#"> <FaGlobe className="icon code" /> </a>

                       <h3 className='codeh3'>Web Development</h3>
                       <p className='codep'> Web development is the building and
                        maintenance of websites; It's the work that happens behind
                        the scenes to...
                       </p>
                </div>
                <div className="ido1">
                  <img src="/public/image/degitalmarket2.jpeg" alt="" />
                     <a href="#"> <FaFunnelDollar className="icon code" /> </a>

                       <h3 className='codeh3'>Digital Marketing</h3>
                       <p className='codep'> At a high level, digital Marketing refers to
                        advertising delivered through digital channels such as...
                       </p>
                </div>
            </div>

            <div className="services-2">
            <div className="ido1">
              <img src="./public/image/webhost2.jpeg" alt="" />
                 <a href="#"> <SiWebmoney className="icon code" /> </a>

                       <h3 className='codeh3'>Web Hosting</h3>
                       <p className='codep'> Every wesite that you visit consists of a domain
                        name and a web host. The easiest way to picture it is to think of..
                       </p>
                </div>
                <div className="ido1">
                  <img src="/public/image/Appdev1.jpeg" alt="" />
                     <a href="#"> <MdOutlineDeveloperMode className="icon code" /> </a>

                       <h3 className='codeh3'>App Development</h3>
                       <p className='codep'> Mobile app development is the act or process
                        by which a mobile app is developed for mobile devices, such as...
                       </p>
                </div>
                <div className="ido1">
                  <img src="/public/image/iot2.jpeg" alt="" />
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