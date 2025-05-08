import "./styles.css";

const InputField = ({ label, ...props }) => {
    return (
        <div className="input-wrapper">
            <label>{label}</label>
            <input {...props} />
        </div>
    );
}

export default InputField;