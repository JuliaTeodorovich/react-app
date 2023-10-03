import "./Input.css";
import { AiFillEye } from "react-icons/ai";

const InputName = () => {
  return (
    <input type="text" className="input name" placeholder="Ures Name"></input>
  );
};

const InputPassword = () => {
  return (
    <div>
      <input
        type="password"
        className="input password"
        placeholder="Password"></input>
      <div className="logo-password">
        <AiFillEye className="logo" />
      </div>
    </div>
  );
};

export { InputName, InputPassword };
