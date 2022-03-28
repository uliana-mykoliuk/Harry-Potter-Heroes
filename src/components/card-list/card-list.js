import Card from "../card/card";

import "./card-list.styles.css";

const CardList = ({ heroes }) => {
	return (
		<div className="card-list">
			{heroes.map((hero, index) => {
				return <Card key={index} hero={hero} />;
			})}
		</div>
	);
};

export default CardList;
