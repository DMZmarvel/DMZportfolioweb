import React, { useState, useEffect } from "react";
import {
  FaXTwitter,
  FaInstagram,
  FaGithub,
  FaFacebookF,
  FaTelegram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { IoLanguageSharp } from "react-icons/io5";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const header = () => {
  const [open, setOpen] = useState(false);
  document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector(".snd-text");

    if (!text) {
      console.error("Text element not found");
      return;
    }
    {
      /*
    const text = document.querySelector(".snd-text");*/
    }

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
    navigate("/ContactRut");
  };

  const showSid = () => {
    const smallsc = document.querySelector(".chat-me");
    smallsc.style.left = "26.5%";
  };
  const hideSid = () => {
    const smallsc = document.querySelector(".chat-me");
    smallsc.style.left = "-300px";
  };

  const toggleMenu = () => {
    setOpen(!open);
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

        if (start >= value) {
          clearInterval(counter);
        }
      }, stepTime);

      return () => clearInterval(counter);
    }, [value]);

    return <div className="counter">{count}</div>;
  };

  return (
    <div className="nav" id="portfolio">
      <div className="dot"></div>
      <div className="dot0"></div>
      <div className="dot1"></div>

      <div className="toone">
        <div className="header">
          <div className="hi">
            <div className="appir">
              {/* <span className="text first-text">
                Hello, i'm <span>Destin marvel</span>
                <br /> Am a{" "}
              </span>
              <span className="text snd-text" id="gramm">
                Programmer
              </span> */}

              <div className="h1apr">
                Hey, i'm
                <span> Destin Marvel</span>
              </div>
              <p>Am a</p>
              <svg viewBox="0 0 2000 300">
                <text x="50%" y="50%" fill="transparent" textAnchor="middle">
                  Software-Developer
                </text>
              </svg>
            </div>

            <div className="satisfactory">
              <div className="tory0">
                <span className="borderline"></span>
                <div className="tor1">
                  <h1 id="experience" data-value="3">
                    <Counter value={5} />+
                  </h1>
                  <p>Years of exprience</p>
                </div>
              </div>

              <div className="tory0">
                <span className="borderline"></span>
                <div className="tor1">
                  <h1 id="Projects" data-value="10">
                    <Counter value={10} />+
                  </h1>
                  <p>Project Success</p>
                </div>
              </div>

              <div className="tory0">
                <span className="borderline"></span>
                <div className="tor1">
                  <h1>
                    <Counter value={91} />%
                  </h1>
                  <p>Satisfied Rate</p>
                </div>
              </div>
            </div>

            <div className="btn-box">
              <button className="smallsc" onClick={toggleMenu}>
                Let's Talk
              </button>
              <div className={`radial-menu ${open ? "show" : ""}`}>
                <a href="https://telegram.org/dl">
                  <FaTelegram />
                </a>
                <a href="https://m.me/cm/AbbiIbIGeqNXwdET/?send_source=cm%3Acopy_invite_link">
                  <FaFacebookMessenger />
                </a>
                <a href="https://whatsapp.com/dl/">
                  <FaWhatsapp />
                </a>
              </div>
              <button className="smallsc" onClick={goToContacts}>
                {" "}
                Hire Me
              </button>
            </div>
          </div>

          <div className="imageside">
            <div className="imgcontainer">
              <div className="social">
                <a href="https://x.com/Lucasaustin07?t=3h69RvXOq4URAfd_ymtMnw&s=09">
                  <FaXTwitter className="icons twiter" />
                </a>
                <a href="https://github.com/DMZmarvel">
                  <FaGithub className="icons bear" />
                </a>
                <a href="https://www.instagram.com/marvel0490?igsh=YzljYTk1ODg3Zg==">
                  <FaInstagram className="icons bear" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100073069950448">
                  <FaFacebookF className="icons bear" />
                </a>
                <a href="https://youtube.com/@destinmarvel?si=vl8utXuOWziaaW3h">
                  <FaYoutube className="icons bear" />
                </a>
                <a href="https://www.linkedin.com/in/destin-marvel-29721427a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <FaLinkedinIn className="icons bear" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
