import { appear, fadeIn } from "../../variants";
import { motion } from "framer-motion";
import "./Home.css";
import Maxime from "../../assets/photos/moi.jpg";
import Vietnam from "../../assets/photos/vietnam.jpg";
import Surreal from "../../assets/photos/magritte.png";
import Whale from "../../assets/photos/whale.png";
import Elephant from "../../assets/photos/Elephant.jpg";

function HomePage() {
  

  return (
    <>
      <section className="presentation">
        <div className="presentation-title-paragraph">
          <h1 className="presentation-title">My universe </h1>
          <motion.p className="presentation-paragraph">
            Welcome to my portfolio! <br />
            <br />
            I'm Maxime, a web developer with a rather unconventional journey.
            After three fulfilling years in the luxury hospitality industry, I
            made a pivotal career transition. I dived headfirst into the realm
            of coding by enrolling in the Wild Code School, where I completed an
            intensive five-month bootcamp. <br />
            <br />
            Since then, every line of code I write is infused with my passion
            for creation and my commitment to delivering innovative and
            user-friendly web solutions.
            <br />
            <br />
            I love minimal and graphic design. I enjoy exploring the world,
            whales, Vietnamese food, and surreal art.
            <br />
            <br />
            Explore my journey and projects here.
          </motion.p>
        </div>
        <img className="maxime" src={Maxime} alt="Maxime" />
        <img className="vietnam" src={Vietnam} alt="Vietnam" />
      </section>
      <motion.p
        variants={appear(0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        Inspirations I like{" "}
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
            >
              Golconde
            </motion.figcaption>
            <motion.h3
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
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
        <div className="art">
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
            >
              Miyamoto Musashi <br />
              Attacking Giant Whale
            </motion.figcaption>
            <motion.h3
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
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
            >
              Souvenir
            </motion.figcaption>
            <motion.h3
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
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
