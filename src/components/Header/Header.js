import "./Header.css";
import Logo from "../../components/Logo/Logo";
import logoImageTable from "../../assets/Logo_table.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container-header">
      <Link to={"/login"} style={{ textDecoration: "none" }}>
        <Logo src={logoImageTable} className="logo-table" />
      </Link>
    </div>
  );
}

export default Header;
