import { LogoLogin } from "../Logo/Logo";
import { InputName, InputPassword } from "../Input/Input";
import Button from "../Button/Button";
import "./Card.css";

const Card = () => {
  return (
    <div className="container-card">
      <LogoLogin />
      <InputName />
      <InputPassword />
      <Button />
    </div>
  );
};

export default Card;
