import React, { useState } from "react";
import "./Footer.css";
import {
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaRegCopyright,
} from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import userImage from "../../assets/ontimrrate.jpeg";

const footerTranslations = {
  en: {
    logo: "DMZ",
    subscribeTitle: "Subscribe Now",
    subscribePlaceholder: "Enter your email",
    subscribeButton: "Subscribe",
    information: "Information",
    aboutUs: "About Us",
    pricing: "Pricing",
    community: "Community",
    blog: "Blog",
    events: "Events",
    helpfulLinks: "Helpful Links",
    services: "Services",
    support: "Why choose us",
    terms: "Terms & Conditions",
    privacy: "Privacy Policy",
    faq: "FAQ",
    contactUs: "Contact Us",
    phone: "Phone",
    email: "Email",
    copyright: "Copyright 2025 © DMZ Portfolio All Rights Reserved",
  },
  fr: {
    logo: "DMZ",
    subscribeTitle: "Abonnez-vous Maintenant",
    subscribePlaceholder: "Entrez votre email",
    subscribeButton: "S'abonner",
    information: "Informations",
    aboutUs: "À Propos de Nous",
    pricing: "Tarifs",
    community: "Communauté",
    blog: "Blog",
    events: "Événements",
    helpfulLinks: "Liens Utiles",
    services: "Services",
    support: "Assistance",
    terms: "Conditions Générales",
    privacy: "Politique de Confidentialité",
    faq: "FAQ",
    contactUs: "Contactez-Nous",
    phone: "Téléphone",
    email: "Email",
    copyright: "Copyright 2025 © DMZ Portfolio Tous Droits Réservés",
  },

  es: {
    logo: "DMZ",
    subscribeTitle: "Suscríbete Ahora",
    subscribePlaceholder: "Ingresa tu correo electrónico",
    subscribeButton: "Suscribirse",
    information: "Información",
    aboutUs: "Sobre Nosotros",
    pricing: "Precios",
    community: "Comunidad",
    blog: "Blog",
    events: "Eventos",
    helpfulLinks: "Enlaces Útiles",
    services: "Servicios",
    support: "Soporte",
    terms: "Términos y Condiciones",
    privacy: "Política de Privacidad",
    faq: "Preguntas Frecuentes (FAQ)",
    contactUs: "Contáctenos",
    phone: "Teléfono",
    email: "Correo",
    copyright: "Copyright 2025 © DMZ Portafolio Todos los Derechos Reservados",
  },
  de: {
    logo: "DMZ",
    subscribeTitle: "Jetzt Abonnieren",
    subscribePlaceholder: "Geben Sie Ihre E-Mail ein",
    subscribeButton: "Abonnieren",
    information: "Informationen",
    aboutUs: "Über Uns",
    pricing: "Preise",
    community: "Gemeinschaft",
    blog: "Blog",
    events: "Veranstaltungen",
    helpfulLinks: "Nützliche Links",
    services: "Dienstleistungen",
    support: "Unterstützung",
    terms: "Allgemeine Geschäftsb edingungen",
    privacy: "Datenschutz richtlinie",
    faq: "Häufig Gestellte Fragen (FAQ)",
    contactUs: "Kontaktieren Sie Uns",
    phone: "Telefon",
    email: "E-Mail",
    copyright: "Copyright 2025 © DMZ Portfolio Alle Rechte Vorbehalten",
  },
};

export const Footer = ({ language }) => {
  const t = footerTranslations[language];

  const [activeContent, setActiveContent] = useState("");

  const handleOpenContent = (content) => {
    setActiveContent(content);
  };

  const handleCloseContent = () => {
    setActiveContent("");
  };

  const handleClick = () => {
    setActiveContent("");
  };

  const navigate = useNavigate();

  const goTocontact = () => {
    navigate("/ContactRut");
  };

  const [email, setEmail] = useState("");

  const handelSubmit = () => {
    if (email) {
      localStorage.setItem("SubscribedEmail", email);
      alert("Thank you for subscribing!");
      setEmail("");
    } else {
      alert("Please enter a valid email");
    }
  };
  return (
    <div className="fot">
      <div className="fkot0"></div>
      <div className="fkot1"></div>
      <div className="fkot11"></div>
      <div className="fkot111"></div>

      <div className="insidefoter">
        <div className="insidefot">
          <div className="insidefot1">
            <div className="logofot">
              <h1> {t.logo}</h1>
            </div>

            <div className="surcrib">
              <h2>{t.subscribeTitle}</h2>

              <input
                type="email"
                id="email"
                placeholder=" Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button onClick={handelSubmit}>
                <a href="https://www.youtube.com/@DestinMarvel">
                  {" "}
                  {t.subscribeButton}
                </a>
              </button>
            </div>
          </div>

          <div className="insidefot2">
            <h1>{t.information}</h1>
            <a onClick={() => handleOpenContent("About Us")}>{t.aboutUs}</a>
            {/*    <a onClick={() => handleOpenContent("Pricing")}>{t.pricing}</a>
            <a onClick={() => handleOpenContent("Community")}>{t.community}</a>
            <a onClick={() => handleOpenContent("Blog")}>{t.blog}</a> */}
            <a onClick={() => handleOpenContent("Support")}>{t.support}</a>
          </div>

          <div className="insidefot3">
            <h1>{t.helpfulLinks}</h1>

            <a onClick={() => handleOpenContent("Terms & Conditions")}>
              {t.terms}
            </a>
            <a onClick={() => handleOpenContent("Privecy policy")}>
              {t.privacy}
            </a>
            <a onClick={() => handleOpenContent("FAQ")}>{t.faq}</a>
            {/*<button onClick={goTocontact}>go to about</button>*/}
          </div>

          <div className="insidefot4">
            <h1>{t.contactUs}</h1>

            <div className="contact">
              <a href="#">
                <PiPhoneCallFill className="icons" />
              </a>
              <p>+234-915-135-2746</p>
            </div>

            <div className="contact1">
              <a href="#">
                {" "}
                <MdOutlineEmail className="icons" />{" "}
              </a>
              <a href="#">
                {" "}
                <p> destinmarvel3@gamil.com</p>
              </a>
            </div>

            <div className="contact2">
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

        <div className="insidefoter2">
          <p>{t.copyright}</p>
        </div>
      </div>

      {activeContent && (
        <div className="sliding-panal">
          <div className="pabel-header">
            <h2>{activeContent}</h2>
            <button className="close-btn" onClick={handleCloseContent}>
              &times;
            </button>
          </div>

          <div className="panel-body">
            {activeContent === "FAQ" && (
              <div className="faq1">
                <ul className="roll">
                  <li className="li1">
                    <input type="radio" name="roll" id="first0" />
                    <label className="label0" htmlFor="first0">
                      Can you customize a project based on my specific
                      requirements?
                    </label>
                    <div className="content0">
                      Absolutely! Each project I take on is customized to meet
                      the client's unique goals and requirements. Let’s discuss
                      your vision and create something exceptional together.
                    </div>
                  </li>

                  <li className="li2">
                    <input type="radio" name="roll" id="first1" />
                    <label className="label1" htmlFor="first1">
                      What services do you offer{" "}
                    </label>
                    <div className="content1">
                      I specialise in [Web-development, Programming,
                      Software-engineering, App-Development, content-Writing ].
                      Additional, I offer custom solution tailored to meet your
                      specfic needs
                    </div>
                  </li>

                  <li className="li3">
                    <input type="radio" name="roll" id="first3" />
                    <label className="label3" htmlFor="first3">
                      How much do yo charge for your services
                    </label>
                    <div className="content3">
                      {" "}
                      My pricing depends on the scope and complexity of the
                      project. For a detailed quote,please reach out to me
                      through the{" "}
                      <Link to="/ContactRut" onClick={handleClick}>
                        Contact-Page{" "}
                      </Link>{" "}
                      with your project requirements.
                    </div>
                  </li>

                  <li className="li4">
                    <input type="radio" name="roll" id="first4" />
                    <label className="label4" htmlFor="first4">
                      How do I start working with you?
                    </label>
                    <div className="content4">
                      To get started, simply contact me through the Contact page
                      or email me directly at [destinmarvel3@gmail.com]. Provide
                      a brief description of your project, and I’ll get back to
                      you promptly to discuss the next steps.
                    </div>
                  </li>

                  <li className="li5">
                    <input type="radio" name="roll" id="first5" />
                    <label className="label5" htmlFor="first5">
                      How long will it take to complete the project
                    </label>
                    <div className="content5">
                      The timeline varies based on the project size and
                      requirements. For smaller projects, it could take 1–2
                      weeks, while larger ones may take several weeks or months.
                      Let’s discuss your needs to provide a more accurate
                      estimate.
                    </div>
                  </li>

                  <li className="li6">
                    <input type="radio" name="roll" id="first6" />
                    <label className="label6" htmlFor="first6">
                      What tools or technologies do you use?
                    </label>
                    <div className="content6">
                      I work with tools and technologies like eg: Postman, Vs
                      Code, React, Python, Swift. My tech stack is constantly
                      evolving to stay up to date with the latest trends.
                    </div>
                  </li>
                </ul>
              </div>
            )}
            {activeContent === "Privecy policy" && (
              <div className="polic">
                <div className="space">
                  <h1>Privecy Policy</h1>
                  <p> Our PERSONAL SRATEMENT, COOKIES, THIRD-PARTY</p>
                </div>
                <div className="holdpo">
                  <div className="polic1">
                    <div className="inspo1">Personal Statement </div>
                    <div className="inspo2">
                      We are committed to creating a secure and user-friendly
                      experience for every customer. To achieve this, we aim to
                      be as clear as possible about all our policies, as is
                      evident by our transparent Terms and Conditions. When you
                      visit our site, Jenga Tech.com, some of your personal
                      information supplied during your order or by means of our
                      cookies policy may be gathered.
                    </div>
                  </div>

                  <div className="polic2">
                    <div className="inspo1">What are 'cookies'?</div>
                    <div className="inspo2">
                      Cookies are little text files that are stored within your
                      browser’s cache. First and third-party cookies are used on
                      this site for functionality, statistics, and advertising.
                    </div>
                  </div>

                  <div className="polic3">
                    <div className="inspo1">Disclosure of Your Information</div>
                    <div className="inspo2">
                      You have the right to request your data. If something is
                      incorrect, you can have it altered or removed. You can
                      also disable cookies on your device by changing your
                      browser’s settings. You have the option to use opt-out
                      programs like, "NAI’s Consumer opt-out" or "Google
                      Analytics opt-out browser add-on". These prevent cookies
                      from being used in your browser. Know that if you do this,
                      our site may not function properly.
                    </div>
                  </div>

                  <div className="polic4">
                    <div className="inspo1">
                      What third-parties do we share your information with?
                    </div>
                    <div className="inspo2">
                      Any information we gather is only shared with our
                      affiliate partners for analytical reasons. We will not
                      share your personal information past our brand and trusted
                      brand partners.
                    </div>
                  </div>

                  <div className="polic5">
                    <div className="inspo1">
                      What information do we gather specifically?
                    </div>
                    <div className="inspo2">
                      The information we gather is what you supply us with when
                      partner and work with us. This is usually demographic
                      information like name, address, or general contact
                      information. Cookies will also gather session information
                      like the pages viewed, the amount of time spent in the
                      session, transactions, and any other general demographic
                      information eg (origin, gender, age).
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeContent === "Terms & Conditions" && (
              <div className="privecy">
                <div className="trm">
                  <h1>TERMS & CONDITIONS </h1>

                  <p>Last updated: [30/01/2025]</p>
                </div>

                <div className="knownow">
                  <div className="now1">
                    <h2>Introduction </h2>
                    <p>
                      Welcome to DMZPortfolioWebsite! By using our website
                      and/or using the services that are provided, you
                      acknowledge that you have read, understood, and agree to
                      be bound by our Terms and Conditions. These Terms and
                      Conditions unconditionally extend and apply to all related
                      applications, internet services, or website extensions. If
                      you are not in agreement with all of these Terms and
                      Conditions, you are prohibited from using this Website,
                      and you may discontinue use immediately.
                      DMZPortfolioWebsite recommends that you save or print a
                      copy of these Terms and Conditions for future reference.
                    </p>
                  </div>

                  <div className="now2">
                    <h2>Agreement to Terms and Conditions</h2>
                    <p>
                      DMZPortfolioWebsite Terms And Conditions these "Terms" or
                      these "Terms and Conditions" contained in this Agreement
                      shall govern your use of this Website and all its content
                      collectively referred to herein as this "Website". These
                      Terms outline the rules and regulations guiding the use of
                      DMZPortfolioWebsite. All
                      materials/information/documents/services or all other
                      entities collectively referred to as content that appear
                      on the DMZPortfolioWebsite shall be administered subject
                      to these Terms and Conditions. These Terms and Conditions
                      apply in full force and effect to your use of this
                      Website, and the use of this Website constitutes an
                      express agreement with all the terms and conditions
                      contained herein in full. Do not continue to use this
                      Website if you have any objection to any of the Terms and
                      Conditions stated on this page.
                    </p>
                  </div>

                  <div className="now3">
                    <h2>Definitions/ Terminology</h2>
                    <p>
                      The following definitions apply to these Terms and
                      Conditions, Privacy Statement, Disclaimer Notice and all
                      Agreements: "User", "Visitor", "Client", "Customer", "You"
                      and "Your" refers to you, the person(s) that use this
                      Website. "[DMZPortfolioWebsite]", "We", "Our" and "Us",
                      refers to our Website/Company. "Party", "Parties," or "Us"
                      refers to both you and us. All terms refer to all
                      considerations of [DMZPortfolioWebsite] necessary to
                      undertake support to you for the express purpose of
                      meeting your User needs in respect of our services, under
                      and subject to, prevailing law of the state or country in
                      which DMZPortfolioWebsite operates in [NIGERIA]. Any use
                      of these definitions or other glossary in the singular.
                    </p>
                  </div>
                  <div className="now4">
                    <h2>Intellectual Property Rights</h2>
                    <p>
                      {" "}
                      Ohter than the content you own and opted to include on
                      this Website, Under these Terms, [DMZPortfolioWebsite]
                      and/or its license own and reserve all intellectual
                      property rights of this Website. You are granted a limited
                      license, subject to the restrictions entailed in these
                      Terms and Condition, for purpose of viewing this Website
                      content.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeContent === "About Us" && (
              <div className="Us-About">
                <div className="Us-right">
                  <h2>About Us</h2>
                </div>

                <div className="Us-container">
                  <div className="Us-con2">
                    <h1>Our Mission</h1>
                    <p>
                      Our mission is to Continously grow the Compaines skills
                      and abilities in software development and solving
                      real-world problems through code We strive to deliver Web
                      development, Cyber Security, Digital Marketing, Web
                      Hosting with a focus on customer satisfaction, innovation,
                      and sustainability.
                    </p>
                  </div>

                  <div className="Us-con1">
                    <h1>About Us </h1>
                    <p>
                      Welcome to DMZPortfolioWebsite, where we build innovative
                      and User-Friendly Software! At DMZ, we are passionate
                      about, providing innovative solutions, creating
                      exceptional projects, delivering top-notch services, etc..
                      Founded in 30 January 2025, our journey began with a
                      simple idea: to make a difference, Creating Impactful
                      Application, Solving Problems Through Code, etc..
                    </p>
                  </div>

                  <div className="Us-con3">
                    <h1>Our Vision</h1>
                    <p>
                      To become a skilled and innovative software engineer,
                      creating impactful, efficient, and user-friendly
                      applications that solve real-world problems. We aim to
                      continuously learn, grow, and contribute to the tech
                      community while building high-quality digital experiences.
                    </p>
                  </div>

                  <div className="Us-con4">
                    <h1>What We Offer</h1>
                    <p>
                      ` Front-End Development – Crafting intuitive and visually
                      appealing user interfaces using React.
                      <br />
                      ` Problem-Solving – Writing clean, efficient code to solve
                      challenges and improve user experience.
                      <br />
                      ` Continuous Learning – Adapting to new technologies and
                      best practices to stay ahead in the industry.
                      <br />
                      ` Portfolio Projects – Showcasing skills through
                      real-world applications, demonstrating both front-end and
                      future back-end capabilities.
                      <br />` User-Centered Design – Ensuring applications are
                      accessible, responsive, and enjoyable to use.
                    </p>
                  </div>

                  <div className="Us-con5">
                    <h1>Why Choose Us</h1>
                    <p>
                      Exceptional customer service, innovative solutions,
                      sustainable practices, etc.
                    </p>
                  </div>

                  <div className="Us-con6">
                    <h1>Meet the Team</h1>
                    <p>
                      Our success is driven by a team of passionate individuals
                      who share a common goal: to make a positive impact. Each
                      member brings a unique idea to ensure that we exceed your
                      expectations.
                    </p>
                  </div>

                  <div className="Us-con7">
                    <h1>Join Us on Our Journey</h1>
                    <p>
                      We believe in building lasting relationships with our
                      customers, partners, and community. Whether you’re here to
                      explore our offerings, learn about us, or collaborate, we
                      are excited to welcome you into the DMZ community.
                    </p>
                  </div>

                  <div className="Us-con8">
                    <h1>Contact Us </h1>
                    <p>
                      We’d love to hear from you! Reach out to us at{" "}
                      <strong>destinmarvel3@gmail.com</strong> or visit us at
                      JengaTech ltd. Stay connected by following us on Facebook,
                      Instagram, Twitter.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeContent === "Support" && (
              <div className="Choose-Us">
                <div className="explain-choose">
                  <p className="pcose">THE DIFFERENCE WE MAKE</p>
                  <h1>Why Choose Us</h1>

                  <p className="pcose0">
                    Explore the key reason Compaines choose us as their partner
                  </p>
                </div>

                <div className="why-choose-us">
                  <div className="choose1">
                    <div className="one-choose">
                      <p>
                        Achieving 99.8% success in my projects is not just a
                        number—it’s a reflection of my dedication, skills, and
                        commitment to delivering high-quality work. Every
                        project I undertake is approached with a clear strategy,
                        efficient problem-solving, and a strong focus on client
                        satisfaction.
                        {/*  I believe that success is not only about completing a project but also about ensuring that it
                                  meets the highest standards of functionality, performance, and user experience. By constantly 
                                  improving my coding practices, staying updated with the latest technologies, and carefully 
                                  understanding client needs, I have maintained an exceptional success rate. Whether it's web
                                   development, debugging, or performance optimization, my focus is always on achieving results
                                   that exceed expectations.*/}
                      </p>

                      <h1>99.8% Project Success</h1>
                    </div>

                    <div className="one0-choose"> </div>
                  </div>

                  <div className="choose2">
                    <img src={userImage} className="timconci" />
                    <h1>
                      98% <br /> On-Time Rate
                    </h1>

                    <p>
                      Meeting deadlines is a crucial part of my work ethic. With
                      a 98% on-time rate, I ensure that every project is
                      completed efficiently without compromising on quality.
                      Time management and organization are key factors that
                      contribute to my ability to deliver work punctually. From
                      the initial planning stages to the final deployment, I
                      follow a structured workflow that helps me stay on track
                      and anticipate potential challenges.
                      {/*} Effective communication
                                     with clients, setting realistic timelines, and using agile development methods allow me to minimize
                                      delays and maximize productivity. I believe that delivering on time is not just about meeting
                                       deadlines—it’s about building trust and reliability with clients and collaborators.*/}
                    </p>
                  </div>

                  <div className="choose3">
                    <div className="three-choose"></div>
                    <div className="three0-choose">
                      <h1>
                        300+ <br /> Deliveries
                      </h1>
                      <p>
                        With over 300 satisfied clients, my work speaks for
                        itself. Every project I work on is tailored to meet
                        specific client needs, ensuring that their vision is
                        brought to life in the best possible way. I focus not
                        just on writing code but on providing complete solutions
                        that help businesses .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* {activeContent === "Pricing" && (<p>Support us in any way...</p>)}
                {activeContent === "Community" && (<p>Support us in any way...</p>)}
                {activeContent === "Blog" && (<p>Support us in any way...</p>)}*/}
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
