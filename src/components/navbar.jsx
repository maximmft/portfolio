import { useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h2
        className="navbar-title"
        onClick={() => navigate("/home")}
        onKeyDown={() => navigate("/home")}
        role="presentation"
      >
        Home
      </h2>
      <h2
        className="navbar-title"
        onClick={() => navigate("/projects")}
        onKeyDown={() => navigate("/projects")}
        role="presentation"
      >
        Projects
      </h2>
      <h2
        className="navbar-title"
        onClick={() => navigate("/tools")}
        onKeyDown={() => navigate("/tools")}
        role="presentation"
      >
        Tools
      </h2>
      <h2
        className="navbar-title"
        onClick={() => navigate("/contact")}
        onKeyDown={() => navigate("/contact")}
        role="presentation"
      >
        Contact
      </h2>
    </div>
  );
}

export default Navbar;
