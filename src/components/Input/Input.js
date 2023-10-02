import "./Input.css";
import logoImage from "../../assets/Logo_password.svg";

const InputName = () => {
  return <input type="text" className="input name" placeholder="Ures Name"></input>;
};

const InputPassword = () => {
  return (
    <div>
      <input type="password" className="input password" placeholder="Password"></input>
      <div className="logo-password">
        <img src={logoImage} alt="Logo" />
      </div>
    </div>
  );
};

export { InputName, InputPassword };
