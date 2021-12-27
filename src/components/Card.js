const Card = ({title,body}) => {
	return (
		<div className="card">
			<h2 className="heading__secondary">{title}</h2>
			<p className="card__text">
				{body}
			</p>
		</div>
	);
};
export default Card;