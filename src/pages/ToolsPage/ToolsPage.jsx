import "./ToolsPage.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { appear } from "../../variants";

function ToolsPage() {
  return (
    <>
      <motion.p
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        Tools
      </motion.p>
      <motion.h1
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.8 }}
      >
        What do I use?
      </motion.h1>
      <div className="tools">
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }}
          className="backend"
        >
          <h2 className="tool-title" >Software Development</h2>
          <p className="tool-paragraph">
            Proficient in SQL databases.
            <br></br>
            <br></br> API development using Express and React.js. <br></br>
            <br></br>Skilled in Node.js, Git, and Git Bash for version control.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="frontend"
        >
          <h2 className="tool-title">Frontend Dev React</h2>
          <p className="tool-paragraph">
            Expertise in HTML, CSS, and JavaScript enables me to craft intuitive
            user interfaces. <br></br>
            <br></br>With React.js, I create dynamic components for enhanced
            engagement. <br></br>
            <br></br>Skilled in developing hybrid mobile apps and cross-platform
            solutions
          </p>
        </motion.div>
      </div>
    </>
  );
}
export default ToolsPage;
