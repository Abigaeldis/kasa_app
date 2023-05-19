import { NavLink } from "react-router-dom";
import logo from "../assets/vectorhouse.png";
import logoK from "../assets/vectorK.png";
import logoS from "../assets/vectorS.png";
import logoA from "../assets/vectorA.png";
// import paysage01 from "../assets/paysage01.png";
// import paysage02 from "../assets/paysage02.png";
import "../styles/header.css";

function Header({ showBanner, bannerImageSrc }) {
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
        <div className="navlinks">
          <NavLink to="/" className="link" activeclassname="active-link">
            Accueil
          </NavLink>
          <NavLink to="/a-propos" className="link" activeclassname="active-link">
            A propos
          </NavLink>
        </div>
      </div>
      {showBanner && (
        <div className="banner">
          <img src={bannerImageSrc} alt="paysage banière" />
          <p>Chez vous, partout et ailleurs</p>
        </div>
      )}
    </div>
  );
}

export default Header;
