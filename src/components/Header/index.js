import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import "./styles.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo little lemon" />
      </div>
      
      <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={menuOpen ? "open" : ""}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Menu</Link></li>
          <li><Link to="/booking">Reservations</Link></li>
          <li><Link to="/">Order Online</Link></li>
          <li><Link to="/">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;