import "./styles.css";

const FeedbackCard = ({ img, customerName, text }) => {
    return (
        <div className="Feedback-wrapper">
            <div>
                <div className="img-wrapper">
                    <img src={img} alt="avatar" />
                </div>
                <h3>{customerName}</h3>
            </div>
            <p>{text}</p>
        </div>
    );
}

export default FeedbackCard;