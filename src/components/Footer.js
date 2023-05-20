import logoWhite from "../assets/kasa_wlogo.png";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <img src={logoWhite} alt="Logo Kasa Blanc" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
