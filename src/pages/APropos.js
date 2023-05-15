import "../styles/home.css";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import paysage02 from "../assets/paysage02.png";

function APropos() {
  return (
    <div>
      <Header showBanner={false} />
      <Gallery />
    </div>
  );
}

export default APropos;
