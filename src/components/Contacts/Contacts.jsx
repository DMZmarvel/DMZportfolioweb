import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./contacts.css";
import {
  FaXTwitter,
  FaLocationDot,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";

const contactTranslations = {
  en: {
    ptext: "Get in touch",
    ptext2:
      "We create high-quality linkable content and build at least 40 high-authority links to each assets, paving the way for you to  grow your rankings, improve brands.",
    pimo: "Abia State, Nigeria",
    pnum: "+234-915-135-2746",
    pmail: "destinmarvel3@gmail.com",
    pfollow: "Follow us on",
    label1: "Name",
    label2: "Email",
    label3: "Message",
    placeholder: "Your Name",
    placeholder0: "Your Email",
    placeholder1: "Type your message here...",
    value: "Hire Me",
  },
  fr: {
    ptext: "Contactez-Nous",
    ptext2:
      "Nous créerons du contenu de qualité et établirons au moins 40 liens de haute autorité vers chaque actif, vous aidant ainsi à améliorer votre classement et vos marques.",
    pimo: "Lieu : État d'Imo, Nigeria",
    pnum: "Téléphone : +234-242-631-21",
    pmail: "Email : DMZmarvel@enterprise.com",
    pfollow: "Suivez-nous sur",
    label1: "Nom",
    label2: "Email",
    label3: "Message",
    placeholder: "Votre Nom",
    placeholder0: "Votre Email",
    placeholder1: "Écrivez votre message ici...",
    value: "Envoyer",
  },

  es: {
    ptext: "Ponte En Contacto",
    ptext2:
      "W  Crearemos contenido de alta calidad y generaremos al menos 40 enlaces de alta autoridad para cada activo, ayudándote a mejorar tus clasificaciones y marcas.",
    pimo: "Ubicación: Estado de Imo, Nigeria",
    pnum: "Teléfono: +234-242-631-21",
    pmail: "Correo Electrónico: DMZmarvel@enterprise.com",
    pfollow: "Síguenos en",
    label1: "Nombre",
    label2: "Correo Electrónico",
    label3: "Mensaje",
    placeholder: "Tu Nombre",
    placeholder0: "Tu Correo Electrónico",
    placeholder1: "Escribe tu mensaje aquí...",
    value: "Enviar",
  },
  de: {
    ptext: "Kontaktieren Sie Uns",
    ptext2:
      " Wir erstellen hochwertigen verlinkbaren Inhalt und bauen mindestens 40 hochwertige Links zu jeder Ressource auf, um Ihr Ranking und Ihre Marken zu verbessern.",
    pimo: "Standort: Bundesstaat Imo, Nigeria",
    pnum: "Telefon: +234-242-631-21",
    pmail: "E-Mail: DMZmarvel@enterprise.com",
    pfollow: "Folgen Sie uns auf",
    label1: "Namel",
    label2: "Email",
    label3: "Nachricht",
    placeholder: "Ihre Name",
    placeholder0: "Ihre Email",
    placeholder1: "Schreiben Sie Ihre Nachricht hier...",
    value: "Senden",
  },
};

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.7749,
  lan: -122.4194,
};

export const Contacts = ({ language }) => {
  const c = contactTranslations[language] || contactTranslations["en"];

  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value.trim();

    const email = form.current.user_email.value.trim();

    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      setStatus("please fill in all fields.");
      return;
    }

    emailjs
      .sendForm("service_xe6ne6f", "template_dl25tww", form.current, {
        publicKey: "c9hATMXju3zFChhnb",
      })
      .then(
        (result) => {
          setStatus("SUCCESS! Message Sent").style.color = "green";
        },
        (error) => {
          setStatus("FAILED... No network check your connections").style.color =
            "red";
        }
      );

    document.getElementById("username").value = "";
    document.getElementById("useremail").value = "";
    document.getElementById("message").value = "";
  };

  return (
    <div className="Contacts" id="contactlink">
      <div className="cottt"></div>
      <div className="cot000"></div>
      <div className="cot0001"></div>
      <div className="cot00011"></div>
      <div className="cot111"></div>
      <div className="insidecontact">
        <div className="locate">
          <h1>{c.ptext}</h1>

          <div className="p1">{c.ptext2}</div>

          <div className="contact11">
            <a href="#">
              {" "}
              <FaLocationDot className="icons" />{" "}
            </a>
            <p>{c.pimo}</p>
          </div>
          <div className="contact11">
            <a href="#">
              {" "}
              <PiPhoneCallFill className="icons" />{" "}
            </a>

            <p>{c.pnum}</p>
          </div>
          <div className="contact11">
            <a href="#">
              {" "}
              <MdOutlineEmail className="icons" />{" "}
            </a>
            <p>{c.pmail}</p>
          </div>

          <div className="upfollow">
            <p>{c.pfollow}</p>

            <div className="contact22">
              <a href="https://x.com/Lucasaustin07?t=3h69RvXOq4URAfd_ymtMnw&s=09">
                <FaXTwitter className="icons " />
              </a>
              <a href="https://www.instagram.com/marvel0490?igsh=YzljYTk1ODg3Zg==">
                <FaInstagram className="icons " />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100073069950448">
                <FaFacebookF className="icons " />
              </a>
              <a href="https://www.linkedin.com/in/destin-marvel-29721427a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <FaLinkedinIn className="icons " />
              </a>
            </div>
          </div>
        </div>

        <div className="informs">
          <form ref={form} onSubmit={sendEmail}>
            <label>{c.label1}</label>
            <input
              className="name"
              type="text"
              id="username"
              name="user_name"
              placeholder={c.placeholder}
              required
            />

            <label>{c.label2}</label>
            <input
              className="email"
              type="email"
              id="useremail"
              name="user_email"
              placeholder={c.placeholder0}
              required
            />

            <label>{c.label3}</label>
            <textarea
              name="message"
              id="message"
              placeholder={c.placeholder1}
              required
            />

            <input className="message" type="submit" value={c.value} />

            {status && (
              <p
                className={`status ${
                  status.includes("successfully") ? "success" : "error"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="mymap">
        {/*    <LoadScript googleMapsApiKey={REACT_GOOGLE_MAPS_API_KEY}>
                    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
                              <Marker position={center} />
                    </GoogleMap>
               </LoadScript>
               
               
               <div style={{ width: "100%", height: "400px"}}>
                <iframe  
                     frameborder="0"
                     title="Google Maps"
                     width="100%"
                     height="400"
                     style={{ border: 0 }}
                     loading="lazy"
                     allowFullScreen


                     src="https://maps.app.goo.gl/zzqrscgs1fLYWpiq5"
                     >

 </div>
                </iframe>*/}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15895.385170900116!2d7.3866013!3d5.1284495!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10429939ea6214b5%3A0xa991cd2fbdbaef96!2sJenga%20Tech%20Institute!5e0!3m2!1sen!2sng!4v1738105527916!5m2!1sen!2sng"
          width="100%"
          height="400px"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacts;
