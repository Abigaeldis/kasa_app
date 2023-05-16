import "../styles/home.css";
import Header from "../components/Header";
import paysage02 from "../assets/paysage02.png";

function APropos() {
  return (
    <div>
      <Header showBanner={true} bannerImageSrc={paysage02} />
    </div>
  );
}

export default APropos;
