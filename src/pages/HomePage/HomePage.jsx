import { appear, fadeIn, fadeInImage } from "../../variants";
import { motion } from "framer-motion";
import { useTheme} from "../../context/theme"
import AnimatedTextWord from "../../components/AnimatedTextWord";
import "./Home.css";
import Maxime from "../../assets/photos/moi.jpg";
import Vietnam from "../../assets/photos/vietnam.jpg";
import Surreal from "../../assets/photos/magritte.png";
import Whale from "../../assets/photos/whale.png";
import Elephant from "../../assets/photos/Elephant.jpg";

function HomePage() {

  const {theme} = useTheme();
  
  return (
    <>
      <section className="presentation">
        <div className="presentation-title-paragraph">
          <h1  className={theme === "dark" ? "presentation-title" : "presentation-title-light"}>Welcome to my portfolio !</h1>
          <AnimatedTextWord
            text="I'm Maxime, a web developer with a rather unconventional journey. After three fulfilling years in the luxury hospitality industry, I made a pivotal career transition. I dived headfirst into the realm of coding by enrolling in the Wild Code School, where I completed an intensive five-month bootcamp. I love minimal and graphic design. I enjoy exploring the world, whales, Vietnamese food, and surreal art. Explore my journey and projects here."
          />
        </div>
        <motion.img
              className={theme === "dark" ? "maxime" : "maxime-light"}
              src={Maxime}
          alt="Maxime"
          variants={fadeInImage("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
        />
        <motion.img
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className={theme === "dark" ? "vietnam" : "vietnam-light"}
          src={Vietnam}
          alt="Vietnam"
        />
      </section>
      <motion.p
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className={theme === "dark" ? "inspiration-paragraph" : "inspiration-paragraph-light"}
      >
        Inspirations{" "}
      </motion.p>
      <br />
      <br />
      <section className="inspirations">
        <div className="art">
          <article className="author-and-art">
            <motion.figcaption
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className={theme === "dark" ? "figcaption" : "figcaption-light"}

            >
              Golconde
            </motion.figcaption>
            <motion.h3
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className={theme === "dark" ? "" : "h3-light"}

            >
              René Magritte
            </motion.h3>
          </article>
          <div className="image">
            <motion.img
              variants={appear(0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="surreal"
              src={Surreal}
              alt="Surreal"
            />
          </div>
        </div>
        <div className={`art ${"art-mobile"}`}>
          <div className="image">
            <motion.img
              variants={appear(0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="whale"
              src={Whale}
              alt="Whale"
            />
          </div>
          <article className="author-and-art">
            <motion.figcaption
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className={theme === "dark" ? "figcaption" : "figcaption-light"}

            >
              Miyamoto Musashi <br />
              Attacking Giant Whale
            </motion.figcaption>
            <motion.h3
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className={theme === "dark" ? "" : "h3-light"}

            >
              Utagawa Kuniyoshi
            </motion.h3>
          </article>
        </div>
        <div className="art">
          <article className="author-and-art">
            <motion.figcaption
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className={theme === "dark" ? "figcaption" : "figcaption-light"}

            >
              Photography
            </motion.figcaption>
            <motion.h3
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className={theme === "dark" ? "" : "h3-light"}

            >
              Myself
            </motion.h3>
          </article>
          <div className="image">
            <motion.img
              variants={appear(0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="elephant"
              src={Elephant}
              alt="Elephant"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
