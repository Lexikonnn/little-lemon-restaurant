import "./styles.css";

const SpecialsCard = ({ img, title, price, description }) => {
    return (
        <div className="specials-card-wrapper">
            <div className="img-wrapper">
                <img src={img} alt="Dish" />
            </div>
            <div className="card-header">
                <h3>{title}</h3>
                <p>{price}</p>
            </div>
            <p>{description}</p>
        </div>
    );
}

export default SpecialsCard;