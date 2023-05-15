import "../styles/home.css";
import Header from "../components/Header";
import Gallery from "../components/Gallery";

function Home() {
  return (
    <div>
      <Header showBanner={true} />
      <Gallery />
    </div>
  );
}

export default Home;
