import "./styles.css";
import Button from "../Button";
import restaurant from "../../assets/restaurant.jpg";
import { Link } from "react-router-dom";

const LandingSection = () => {
    return (
        <div className="landing-container">
            <div className="landing-wrapper">
                <div>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum doler sitamen, consescetur ad piscing.</p>
                </div>
                <div className="button-wrapper"><Link to="/booking"><Button>Reserve a Table</Button></Link></div>
            </div>
            <div className="landing-wrapper">
                <img src={restaurant} alt="restaurant" />
            </div>
        </div>
    );
}

export default LandingSection;