import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import "./styles.css";
const Header = () => {
    return (
        <header>
            <div>
                <img src={logo} alt="logo little lemon" />
            </div>
            <nav>
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
}

export default Header;