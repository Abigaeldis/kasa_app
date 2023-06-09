import "../styles/home.css";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import paysage01 from "../assets/paysage01.png";

function Home() {
  return (
    <div>
      <Header showBanner={true} bannerImageSrc={paysage01} bannerText="Chez vous, partout et ailleurs" />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Home;
