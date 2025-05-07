import "./styles.css";
import Button from "../Button";
import SpecialsCard from "../SpecialsCard";
import lemonDesert from "../../assets/lemonDessert.jpg"

const SpecialsSection = () => {
    return (
        <div className="specials-container">
            <div className="specials-wrapper">
                <div className="specials-header">
                    <h2>Specials</h2>
                    <div className="button-wrapper">
                        <Button>Online Menu</Button>
                    </div>
                </div>

                <div className="specials-cards">
                    <SpecialsCard img={lemonDesert} title="Desert" price="$ 7.99" description="Lorem impsum dolor. ad dolir minum." />
                    <SpecialsCard img={lemonDesert} title="Desert" price="$ 7.99" description="Lorem impsum dolor. ad dolir minum." />
                    <SpecialsCard img={lemonDesert} title="Desert" price="$ 7.99" description="Lorem impsum dolor. ad dolir minum." />
                </div>
            </div>
        </div>
    );
}

export default SpecialsSection;