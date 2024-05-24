import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useTheme } from "../../context/theme";
import "./ContactPage.css";

function ContactPage() {

  const {theme} = useTheme();

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
        <p className={theme === "dark" ? "scrolling-text" : "scrolling-text-light"}>
            
          Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact // Contact
        </p>
      </div>
      <div className="contact">
        <motion.h2 
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }} 
        className={theme === "dark" ? "contact-h2" : "contact-h2-light"} 
        onClick={() => navigateToURL("https://github.com/maximmft")}>Github</motion.h2>
        <motion.h2 
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }} 
        className={theme === "dark" ? "contact-h2" : "contact-h2-light"}
        onClick={sendEmail}>Mail</motion.h2>
        <motion.h2 
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }} 
        className={theme === "dark" ? "contact-h2" : "contact-h2-light"}
        onClick={() => navigateToURL("https://www.linkedin.com/in/maxime-maufront-2b8850194/")}>Linkedin</motion.h2>
      </div>
    </>
  );
}

export default ContactPage;