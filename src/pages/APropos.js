import "../styles/home.css";
import Header from "../components/Header";
import Gallery from "../components/Gallery";

function APropos() {
  return (
    <div>
      <Header showBanner={false} />
      <Gallery />
    </div>
  );
}

export default APropos;
