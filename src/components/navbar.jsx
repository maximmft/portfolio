import { useTheme } from '../context/theme';
import "./navbar.css";

function Navbar() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={theme === "dark" ? "navbar" : "navbar-light"}>
      <label className="switch">
        <input 
          type="checkbox"
          onChange={toggleTheme} 
        />
        <span className="checkmark"></span>
      </label>
      {theme === "dark" ? (
        <p className="theme-mode">Light</p>
      ) : (
        <p className="theme-mode-light">Dark</p>
      )}
    </div>
  );
}

export default Navbar;
