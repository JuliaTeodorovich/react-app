import logoImageLogin from "../../assets/Logo_login.svg";
import logoImageTable from "../../assets/Logo_table.svg";
import "./Logo.css";

function LogoLogin() {
  return (
    <div className="logo-login">
      <img src={logoImageLogin} alt="Logo" />
    </div>
  );
}
function LogoTable() {
  return (
    <div className="logo-table">
      <img src={logoImageTable} alt="Logo" />
    </div>
  );
}

export { LogoLogin, LogoTable };
