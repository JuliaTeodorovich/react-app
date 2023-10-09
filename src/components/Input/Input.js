import "./Input.css";
import { AiFillEye } from "react-icons/ai";

const Input = ({
  type,
  id,
  name,
  value,
  onChange,
  className,
  placeholder,
  showPasswordIcon,
}) => {
  return (
    <div className="input-container">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
      />
      {showPasswordIcon && (
        <div className="logo-password">
          <AiFillEye className="logo" />
        </div>
      )}
    </div>
  );
};

export default Input;
