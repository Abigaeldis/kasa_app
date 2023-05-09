import logo from "../assets/vectorhouse.png";
import logoK from "../assets/vectorK.png";
import logoS from "../assets/vectorS.png";
import logoA from "../assets/vectorA.png";
import paysage01 from "../assets/paysage01.png";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <div className="logokasa">
          {" "}
          <img src={logoK} alt="LogoK" />
          <img src={logo} alt="Logo" />
          <img src={logoS} alt="LogoS" />
          <img src={logoA} alt="LogoA" />
        </div>
        <div className="navbar">
          <a href="http://localhost:3000/" className="link-1">
            Acceuil
          </a>
          <a href="http://localhost:3000/" className="link-2">
            A propos
          </a>
        </div>
      </div>
      <div className="banner">
        <img src={paysage01} alt="paysage côtier" />
        <p>Chez vous, partout et ailleurs</p>
      </div>
    </div>
  );
}

export default Header;
