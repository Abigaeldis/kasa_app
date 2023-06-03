import "../styles/card.css";

function Card(props) {
  return (
    <a href={props.link} className="card">
      <img src={props.image} alt={props.title} />
      <div className="card-content">
        <p>{props.title}</p>
      </div>
    </a>
  );
}

export default Card;
