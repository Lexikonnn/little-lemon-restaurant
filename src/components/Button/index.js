import "./styles.css";

const Button = ({ children, type = "button", ...props }) => {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;