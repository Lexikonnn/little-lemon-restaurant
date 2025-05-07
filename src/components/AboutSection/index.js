import "./styles.css";
import restaurantFood from "../../assets/restauranfood.jpg";

const AboutSection = () => {
    return (
        <div className="about-container">
            <div className="about-wrapper">
                <div>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum doler sitamen, consescetur ad piscing.</p>
                </div>
            </div>
            <div className="about-wrapper">
                <div className="img-wrapper">
                    <img src={restaurantFood} alt="restaurant food" />
                </div>
            </div>
        </div>
    );
}

export default AboutSection;