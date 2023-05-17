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
        <div className="navbar">
          <a href="http://localhost:3000/" className="link acceuil">
            Accueil
          </a>
          <a href="http://localhost:3000/a-propos" className="link a propos">
            A propos
          </a>
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
