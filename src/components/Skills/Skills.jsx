import React from 'react'

import { FaReact, FaPython, FaHtml5, FaCss3Alt  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import './skills.css'


function Skills() {
  return (
    <div className='skillhold' id='skills'>
             
  <div className="skot0"></div>
  <div className="skot1"></div>
  <div className="skot11"></div>
  <div className="skot111"></div>
  <div className="skot1111"></div>

        <div className="holdskillevery">
        <h1 className='softskill'>My Soft Skills</h1>

        <div className="fourskill">
            <div className="four1">
                <div className="lang1">
               
          <IoLogoJavascript  className="money "/>
               
                  <p className='script'>Javascript</p>
                 
                </div>

                <div className="description">
                    <p>`With 3 Years of exprience i've been able to do amazing things 
                     With <span>Javascript</span></p>
                </div>

                <div className="rating">
                    <p className='Num'>80%</p>
                    <div className="shown">
                    <div className="current"></div>
                    </div>
                </div>
            
     </div>
            <div className="four14">
            <div className="lang14">
            <FaReact  className="money4 "/>
                  <p className='script4'>React Js</p>
                </div>

                <div className="description4">
                    <p>`<span>React Js</span> has helped in many ways to build interactive user interface for
                        mobile application
                    </p>
                </div>

                <div className="rating4">
                    <p className='Num4'>89%</p>
                    <div className="shown4">
                    <div className="current"></div>
                    </div>
                </div>
            
            </div>


            <div className="four13">
            <div className="lang13">
            <FaPython  className="money3 "/>
                  <p className='script'>Python</p>
                </div>

                <div className="description3">
                    <p>`<span>Python</span> enables me to be more productive and also maintaing rapidly
                        evolving database
                     </p>
                </div>

                <div className="rating3">
                    <p className='Num3'>70%</p>
                    <div className="shown3">
                    <div className="current"></div>
                    </div>
                </div>
            
            </div>
            
            <div className="four12">
            <div className="lang12">
            <FaHtml5   className="money2 "/>
            <FaCss3Alt    className="money2 "/>
                  <p className='script'>Html | Css</p>
                </div>

                <div className="description2">
                    <p>`Progamming With <span>Html | css</span> it makes  
                    progreming fell more professional and appreciative
                     </p>
                </div>

                <div className="rating2">
                    <p className='Num2'>95%</p>
                    <div className="shown2">
                    <div className="current2"></div>
                    </div>
                </div>
            
            </div>



        </div>
    </div>
    </div>
  )
}

export default Skills