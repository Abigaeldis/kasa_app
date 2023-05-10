import "../styles/card.css";

function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <div className="card-content">
        <h3>{props.title}</h3>
        {/* <p>{props.description}</p> */}
        {/* <a href={props.link}>Learn More</a> */}
      </div>
    </div>
  );
}

export default Card;
