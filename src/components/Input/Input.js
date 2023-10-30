import "./Input.css";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import "./Input.css";

const Input = ({
  type,
  id,
  name,
  value,
  onChange,
  className,
  placeholder,
  showPasswordIcon,
  passwordVisible,
  onTogglePasswordVisibility,
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
        <div className="logo-password" onClick={onTogglePasswordVisibility}>
          {passwordVisible ? (
            <AiFillEyeInvisible className="logo" />
          ) : (
            <AiFillEye className="logo" />
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
