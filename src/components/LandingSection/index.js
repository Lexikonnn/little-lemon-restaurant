import "./styles.css";
import Button from "../Button";
import restaurant from "../../assets/restaurant.jpg";

const LandingSection = () => {
    return (
        <div className="landing-container">
            <div className="landing-wrapper">
                <div>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum doler sitamen, consescetur ad piscing.</p>
                </div>
                <div className="button-wrapper"><Button>Reserve a Table</Button></div>
            </div>
            <div className="landing-wrapper">
                <img src={restaurant} alt="restaurant" />
            </div>
        </div>
    );
}

export default LandingSection;