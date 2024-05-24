import { useTheme } from './context/theme';
import "./App.css";
import "./components/welcome.css";
import HomePage from "./pages/HomePage/HomePage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Navbar from "./components/navbar";
import ToolsPage from "./pages/ToolsPage/ToolsPage";

function App() {

  const {theme} = useTheme()

  return (
    <>
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
