import logoImage from "../../assets/Logo/Logo_login.svg";
import "./Logo.css"

function Logo() {
  return (
    <div className="logo-login">
      <img src={logoImage} alt="Logo" />
    </div>
  );
}

export default Logo;