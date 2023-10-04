import "./Input.css";
import { AiFillEye } from "react-icons/ai";

const Input = ({ type, className, placeholder, showPasswordIcon }) => {
  return (
    <div className={className}>
      <input type={type} className="input" placeholder={placeholder}></input>
      {showPasswordIcon && (
        <div className="logo-password">
          <AiFillEye className="logo" />
        </div>
      )}
    </div>
  );
};

export default Input;
