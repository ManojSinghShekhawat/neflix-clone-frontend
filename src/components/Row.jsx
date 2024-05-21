import { Card } from "./Card";
import "./Row.scss";

export const Row = ({ upcommingMovie, title }) => {
	return (
		<div className='row'>
			<h1>{title}</h1>
			<div>
				{upcommingMovie.map((item, index) => {
					return (
						<Card
							key={index}
							imgUrl={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
							index={index}
						/>
					);
				})}
			</div>
		</div>
	);
};
