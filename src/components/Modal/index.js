import Button from "../Button";
import "./styles.css";

const Modal = ({ message, buttonText, onClick }) => {
    return (
        <div className="overlay">
            <div className="modal-card">
                <h2>{message}</h2>
                <Button onClick={onClick} type="button">{buttonText}</Button>
            </div>
        </div>
    );
}

export default Modal;