import React, { useState } from 'react'
import './Textimonials.css';
import { FaQuoteLeft } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft  } from "react-icons/md";



const TextTranslations = {
  en: {
    lunnin:"Testimonials",
    lunno:"Transformative Client Experience",
   johnp:"The service was exceptional! I couldn't have asked for a better experience.",
   johnname:"John Smith",


   emilyname:"Emily Johnson",
   emilyp:"Professional, reliable, and creative—highly recommended!",
  

   brownname:"Michael Brown",
   brownp:"They truly understood my needs and delivered beyond my expectations.",
 

   sophianame:"Sophia Williams",
   sophip:"An absolute pleasure to work with. Fantastic results!",
  

   jamesname:"James Wilson",
   jamesp:"The project was completed on time and with great attention to detail.",
   

   danelname:"Daniel Martinez",
   danelp:"The quality of work was outstanding. I'll definitely return for future projects.",
  
  },

  fr: {
    lunnin:"Témoignages",
    lunno:"Expérience client transformative",
    johnp:"Le service était exceptionnel ! Je n'aurais pas pu demander mieux.",
    johnname:"John Smith",
    
 
    emilyname:"Emily Johnson",
    emilyp:"Professional, reliable, and creative—highly recommended!",
    
 
    brownname:"Michael Brown",
    brownp:"Ils ont vraiment compris mes besoins et ont dépassé mes attentes.",
    
 
    sophianame:"Sophia Williams",
    sophip:"Un véritable plaisir de travailler avec eux. Résultats fantastiques !",
    
 
    jamesname:"James Wilson",
    jamesp:"Le projet a été terminé à temps avec une grande attention aux détails",
    
 
    danelname:"Daniel Martinez",
    danelp:"La qualité du travail était exceptionnelle. Je reviendrai certainement pour de futurs projets.",
   
  },

  es: {
    lunnin:"Testimonios",
    lunno:"Experiencia transformadora del cliente",
    johnp:"¡El servicio fue excepcional! No podría haber pedido una mejor experiencia",
   johnname:"John Smith",
   

   emilyname:"Emily Johnson",
   emilyp:"Profesional, confiable y creativo—¡muy recomendado",
   

   brownname:"Michael Brown",
   brownp:"Realmente entendieron mis necesidades y superaron mis expectativas.",
   

   sophianame:"Sophia Williams",
   sophip:"Un verdadero placer trabajar con ellos. ¡Resultados fantásticos",
   

   jamesname:"James Wilson",
   jamesp:"El proyecto se completó a tiempo y con gran atención al detalle.",
   jamesemail:"",

   danelname:"Daniel Martinez",
   danelp:"La calidad del trabajo fue sobresaliente. Definitivamente volveré para futuros proyectos.",
   
  },

  de: {
    lunnin:"Erfahrungsberichte",
    lunno:"Transformative Client Experience",
    johnp:"Der Service war außergewöhnlich! Besser hätte ich es mir nicht wünschen können.",
   johnname:"Erfahrungsberichte",
   

   emilyname:"Emily Johnson",
   emilyp:"Professionell, zuverlässig und kreativ—sehr empfehlenswert!",
   

   brownname:"Michael Brown",
   brownp:"Sie haben meine Bedürfnisse wirklich verstanden und meine Erwartungen übertroffen.",
   

   sophianame:"Sophia Williams",
   sophip:"Es war eine absolute Freude, mit ihnen zu arbeiten. Fantastische Ergebnisse!",
   

   jamesname:"James Wilson",
   jamesp:"Das Projekt wurde pünktlich und mit großer Liebe zum Detail abgeschlossen.",
   

   danelname:"Daniel Martinez",
   danelp:"Die Qualität der Arbeit war herausragend. Ich werde definitiv für zukünftige Projekte zurückkommen.",
   
  },


}



const Textimonial = ({ language }) => {

  const tr = TextTranslations[language] || TextTranslations["en"];

function scrolll(){
    var left = document.querySelector(".scrolling");
    left.scrollBy(289, 0)
}

function scrollr(){
  var right = document.querySelector(".scrolling");
  right.scrollBy(-289, 0)
}




  return (


    
    <div className='Textimonials' id='textimonials'>
      <div className="pskot1t"></div>
  <div className="pskot11t"></div>
  <div className="pskot111t"></div>
  <div className="pskot1111t"></div>
      <div className="textimonialsins">

    <h1 className='listh1'>{tr.lunnin}</h1>
    <h3 className='listp'>{tr.lunno}</h3>



       <div className="con2">

        <div className="main-scroll-div">
          <div><button className='iconbtn' onClick={scrollr}> <MdKeyboardDoubleArrowLeft className="icon"/> </button></div>
           
              <div className="scrolling">


                <div className="contain">
                <FaQuoteLeft className="quote"/> 
              
              <div className="rating">
              <p>{tr.johnp}</p>
              <label className="star5">★★★★★<span></span></label>
           </div>

              <div className="per">
                <div className="perimg"></div>
                <div className="tex">
                  <p className="tax2">john.smith@example.com
                  <p className="tax1">{tr.johnname}</p>
                  </p>
                </div>
              
                </div>
          </div>

                <div className="contain">
                <FaQuoteLeft className="quote"/> 
              
              <div className="rating">
              <p> {tr.emilyp}</p>
              <label className="star5">★★★★<span>★</span></label>
           </div>

              <div className="per">
                <div className="perimg"></div>
                <div className="tex">
                  <p className="tax1">{tr.emilyname}</p>
                  <p className="tax2">emily.johnson@example.com
                  </p>
                </div>
              
                </div>
                </div>
                <div className="contain">
                <FaQuoteLeft className="quote"/> 
              
              <div className="rating">
              <p>{tr.brownp}</p>

              <label className="star5">★★★★★<span></span></label>
           </div>

              <div className="per">
                <div className="perimg"></div>
                <div className="tex">
                  <p className="tax1">{tr.brownname}</p>
                  <p className="tax2"> michael.brown@example.com</p>
                </div>
              
                </div>
                </div>
                <div className="contain">
                <FaQuoteLeft className="quote"/> 
              
              <div className="rating">
              <p>{tr.sophip}</p>

              <label className="star5">★★★<span>★★</span></label>
           </div>

              <div className="per">
                <div className="perimg"></div>
                <div className="tex">
                  <p className="tax1">{tr.sophianame}</p>
                  <p className="tax2">sophia.williams@example.com
                  </p>
                </div>
              
                </div>
                </div>
                <div className="contain">
                <FaQuoteLeft className="quote"/> 
              
              <div className="rating">
              <p>{tr.jamesp}</p>

              <label className="star5">★★★★<span>★</span></label>
           </div>

              <div className="per">
                <div className="perimg"></div>
                <div className="tex">
                  <p className="tax1">{tr.jamesname}</p>
                  <p className="tax2"> james.wilson@example.com
                  </p>
                </div>
              
                </div>
                </div>
                <div className="contain">
                <FaQuoteLeft className="quote"/> 
              
              <div className="rating">
              <p>{tr.danelp}</p>

              <label className="star5">★★★<span>★★</span></label>
           </div>

              <div className="per">
                <div className="perimg"></div>
                <div className="tex">
                  <p className="tax1">{tr.danelname}</p>
                  <p className="tax2">daniel.martinez@example.com
                  </p>
                </div>
              
                </div>
                </div>
              </div>
           
          <div><button className='iconbtn' onClick={scrolll}><MdKeyboardDoubleArrowRight className="icon"/> </button></div>

        </div>
       </div>

  
        </div>
   

  

    
      </div>
  


  );
};

export default Textimonial



  