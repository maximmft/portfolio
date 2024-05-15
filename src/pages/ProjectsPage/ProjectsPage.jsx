import { appear, fadeIn } from "../../variants";
import { motion } from "framer-motion";
import "./ProjectsPage.css";

function ProjectsPage() {
  const navigateToURL = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <motion.p
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="project-section-start"
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
            className="project-title"
            onClick={() =>
              navigateToURL(
                "https://maximmft.github.io/Les-recettes-Wild/recipe_wrap.html"
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
          >
            1st project // March 2024
          </motion.p>
        </div>
        <div className="project2">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="project-title"
            onClick={() => navigateToURL("https://brainbox-five.vercel.app/")}
          >
            Brain Box
          </motion.h2>
          <motion.p
            variants={appear(0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            2nd project // April 2024
          </motion.p>
        </div>
        <div className="project3">
        <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="project-title"
            onClick={() => navigateToURL("https://brainbox-five.vercel.app/")}
          >
            Rick and Morty
          </motion.h2>
          <motion.p
            variants={appear(0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            Project // May 2024
          </motion.p>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
