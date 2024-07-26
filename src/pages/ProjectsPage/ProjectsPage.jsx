import { appear, fadeIn } from "../../variants";
import { useTheme } from "../../context/theme";
import { motion } from "framer-motion";
import "./ProjectsPage.css";

function ProjectsPage() {
  const navigateToURL = (url) => {
    window.open(url, "_blank");
  };

  const {theme} = useTheme();

  return (
    <>
      <motion.p
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className={theme === "dark" ? "inspiration-paragraph" : "inspiration-paragraph-light"}
      >
        Projects
      </motion.p>
      <div className="projects">
        <div className="project1">
          <motion.h2
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className={theme === "dark" ? "project-title" : "project-title-light"}

            onClick={() =>
              navigateToURL(
                "https://maximmft.github.io/Les-recettes-Wild/index.html"
              )
            }
          >
            Les Recettes Wilds
          </motion.h2>
          <motion.p
            variants={appear(0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className={theme === "dark" ? "inspiration-paragraph" : "inspiration-paragraph-light"}

          >
            1st project // March 2024 // HTML CSS
          </motion.p>
        </div>
        <div className="project2">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className={theme === "dark" ? "project-title" : "project-title-light"}
            onClick={() => navigateToURL("https://brainbox-five.vercel.app/")}
          >
            Brain Box
          </motion.h2>
          <motion.p
            variants={appear(0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className={theme === "dark" ? "inspiration-paragraph" : "inspiration-paragraph-light"}

          >
            2nd project // April 2024 // React.js
          </motion.p>
        </div>
        <div className="project3">
        <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className={theme === "dark" ? "project-title" : "project-title-light"}
            onClick={() => navigateToURL("https://rick-and-morty-orcin-two.vercel.app/")}
          >
            Rick and Morty
          </motion.h2>
          <motion.p
            variants={appear(0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className={theme === "dark" ? "inspiration-paragraph" : "inspiration-paragraph-light"}

          >
            Project // May 2024 // React.js
          </motion.p>
          </div>
          <div className="project4">
          <motion.h2
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className={theme === "dark" ? "project-title" : "project-title-light"}
            onClick={() => navigateToURL("https://rigol-app-maximmfts-projects.vercel.app/")}
          >
            Rigol'App
          </motion.h2>
          <motion.p
            variants={appear(0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className={theme === "dark" ? "inspiration-paragraph" : "inspiration-paragraph-light"}

          >
            1 day Hackathon // May 2024
          </motion.p>
        </div>
        <div className="project5">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className={theme === "dark" ? "project-title" : "project-title-light"}
          >
            Gems
          </motion.h2>
          <motion.p
            variants={appear(0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className={theme === "dark" ? "inspiration-paragraph" : "inspiration-paragraph-light"}
            onClick={() => navigateToURL("https://gems-gems.fr/")}


          >
          Project // June 2024 // React.js & Node.js
          </motion.p>
          <motion.p
            variants={appear(0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className={theme === "dark" ? "inspiration-paragraph-tools" : "inspiration-paragraph-light-tools"}

          >
          First full stack project in React.js & Express
          </motion.p>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
