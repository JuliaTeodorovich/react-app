import Logo from "../Logo/Logo";
import logoImageLogin from "../../assets/Logo_login.svg";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Card.css";

const Card = () => {
  return (
    <div className="container-card">
      <Logo src={logoImageLogin} className="logo-login" />
      <Input type="text" className="name" placeholder="User Name" />
      <Input
        type="password"
        className="password"
        placeholder="Password"
        showPasswordIcon={true}
      />
      <Button />
    </div>
  );
};

export default Card;
