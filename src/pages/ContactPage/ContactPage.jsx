import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import "./ContactPage.css";

function ContactPage() {

    const navigateToURL = (url) => {
        window.open(url, '_blank');
    }

    const sendEmail = () => {
        const emailAddress = 'mmaufront@gmail.com';
        const subject = 'Demande de contact'; 
        const body = 'Bonjour, je souhaite vous contacter...'; 
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        navigateToURL(mailtoLink);
    };

  return (
    <>
      <div className="scrolling-text-container">
        <p className="scrolling-text">
          Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact
        </p>
      </div>
      <div className="contact">
        <motion.h2 
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }} onClick={() => navigateToURL("https://github.com/maximmft")}>Github</motion.h2>
        <motion.h2 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }} onClick={sendEmail}>Mail</motion.h2>
        <motion.h2 
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }} onClick={() => navigateToURL("https://www.linkedin.com/in/maxime-maufront-2b8850194/")}>Linkedin</motion.h2>
      </div>
    </>
  );
}

export default ContactPage;