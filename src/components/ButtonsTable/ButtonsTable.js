import "./ButtonsTable.css";

const Button = ({ buttonText, buttonLogo, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {buttonLogo}
      <span className="descr">{buttonText}</span>
    </button>
  );
};

export default Button;
