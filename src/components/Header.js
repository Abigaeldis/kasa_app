import { NavLink } from "react-router-dom";
import logo from "../assets/vectorhouse.png";
import logoK from "../assets/vectorK.png";
import logoS from "../assets/vectorS.png";
import logoA from "../assets/vectorA.png";
import "../styles/header.css";

function Header({ showBanner, bannerImageSrc, bannerText, bannerClassName }) {
  return (
    <div className="header">
      <div className="navbar">
        <div className="logokasa">
          <img src={logoK} alt="LogoK" />
          <img src={logo} alt="Logo" />
          <img src={logoS} alt="LogoS" />
          <img src={logoA} alt="LogoA" />
        </div>
        <div className="navlinks">
          <NavLink to="/" className="link" activeClassName="active-link">
            Accueil
          </NavLink>
          <NavLink to="/a-propos" className="link" activeClassName="active-link">
            A propos
          </NavLink>
        </div>
      </div>
      {showBanner && (
        <div className={`banner ${bannerClassName}`}>
          <img src={bannerImageSrc} alt="paysage banière" />
          <p>{bannerText}</p>
        </div>
      )}
    </div>
  );
}

export default Header;
