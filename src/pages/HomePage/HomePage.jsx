import "./Home.css";
import Maxime from "../../assets/photos/moi.jpg";
import Vietnam from "../../assets/photos/vietnam.jpg";
import Surreal from "../../assets/photos/magritte.jpg";
import Whale from "../../assets/photos/whale.png";
import Elephant from "../../assets/photos/Elephant.jpg";

function HomePage() {
  return (
    <>
      <section className="presentation">
        <div className="presentation-title-paragraph">
          <h1 className="presentation-title">My universe </h1>
          <p className="presentation-paragraph">
            Welcome to my portfolio! <br></br> <br></br>I'm Maxime, a web
            developer with a rather unconventional journey. After three
            fulfilling years in the luxury hospitality industry, I made a
            pivotal career transition. I dived headfirst into the realm of
            coding by enrolling in the Wild Code School, where I completed an
            intensive five-month bootcamp. <br></br> <br></br>Since then, every
            line of code I write is infused with my passion for creation and my
            commitment to delivering innovative and user-friendly web solutions.
            <br />
            <br />I love minimal and graphic design. I enjoy exploring the
            world, whales, Vietnamese food, and surreal art.
            <br></br> <br></br> Explore my journey and projects here.
          </p>
        </div>
        <img className="maxime" src={Maxime}></img>
        <img className="vietnam" src={Vietnam}></img>
      </section>
      <p>Inspirations</p><br></br><br></br>
      <section className="inspirations">
        <div className="art">
          <article className="author-and-art">
            <figcaption>Golconde</figcaption>
            <h3>René Magritte</h3>
          </article>
          <div className="image">
            <img className="surreal" src={Surreal}></img>
          </div>
        </div>
        <div className="art">
          <div className="image">
            <img className="whale" src={Whale}></img>
          </div>
          <article className="author-and-art">
            <figcaption>Miyamoto Musashi <br></br>Attacking Giant Whale</figcaption>
            <h3>Utagawa Kuniyoshi</h3>
          </article>
        </div>
        <div className="art">
          <article className="author-and-art">
            <figcaption>Souvenir</figcaption>
            <h3>Myself</h3>
          </article>
          <div className="image">
            <img className="elephant" src={Elephant}></img>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
