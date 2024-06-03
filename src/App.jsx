import { useTheme } from './context/theme';
import "./App.css";
import "./components/welcome.css";
import HomePage from "./pages/HomePage/HomePage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Navbar from "./components/navbar";
import ToolsPage from "./pages/ToolsPage/ToolsPage";
import {motion, useScroll, useSpring} from "framer-motion"

function App() {

  const {theme} = useTheme()

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    });
  

  return (
    <>
    <motion.div className={theme === "dark" ? 'progess-scrollbar' : 'progess-scrollbar-light'  } style ={{scaleX}}/>
        <Navbar/>
      <div className={theme}>
        <WelcomePage />
        <HomePage/>
        <ToolsPage/>
        <ProjectsPage/>
        <ContactPage/>
      </div>
    </>
  );
}

export default App;
