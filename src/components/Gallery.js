import "../styles/gallery.css";
import lodgingList from "../datas/lodgingList.json";
import Card from "./Card";

function Gallery() {
  return (
    <div className="gallery">
      {lodgingList.map((lodging) => (
        <Card
          key={lodging.id}
          title={lodging.title}
          image={lodging.pictures[0]}
          //   description={lodging.description}
          link={`/${lodging.id}`}
        />
      ))}
    </div>
  );
}

export default Gallery;
