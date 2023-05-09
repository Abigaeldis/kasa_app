import logo from "../assets/vectorhouse.png";
import logoK from "../assets/vectorK.png";
import logoS from "../assets/vectorS.png";
import logoA from "../assets/vectorA.png";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logokasa">
        {" "}
        <img src={logoK} alt="LogoK" />
        <img src={logo} alt="Logo" />
        <img src={logoS} alt="LogoS" />
        <img src={logoA} alt="LogoA" />
      </div>
      <div className="navbar">
        <a href="http://localhost:3000/" className="link-1">
          Lien 1
        </a>
        <a href="http://localhost:3000/" className="link-2">
          Lien 2
        </a>
      </div>
    </div>
  );
}

export default Header;
