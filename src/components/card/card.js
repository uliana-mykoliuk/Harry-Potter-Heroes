import "./card.styles.css";

const Card = ({ hero }) => {
	const { name, image, house } = hero;
	return (
		<div className="card-container">
			{image && <img alt={name} src={image} />}
			<h2>{name}</h2>
			{house && <p>House: {house}</p>}
		</div>
	);
};

export default Card;
