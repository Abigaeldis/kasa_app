import "../styles/card.css";

function Card(props) {
  return (
    <a href={props.link} className="card">
      <img src={props.image} alt={props.title} />
      <div className="card-content">
        <p>{props.title}</p>
        {/* <p>{props.description}</p> */}
        {/* <a href={props.link}>Learn More</a> */}
      </div>
    </a>
  );
}

export default Card;
