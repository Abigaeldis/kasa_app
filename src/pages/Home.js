import "../styles/home.css";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import paysage01 from "../assets/paysage01.png";
// import lodgingList from "../datas/lodgingList.json";

function Home() {
  return (
    <div>
      <Header showBanner={true} bannerImageSrc={paysage01} />
      <Gallery />
    </div>
  );
}

export default Home;
