import "./ButtonsTable.css";

const Button = ({ buttonText, buttonLogo }) => {
  return (
    <button className="btn">
      {buttonLogo}
      <span className="descr">{buttonText}</span>
    </button>
  );
};

export default Button;
