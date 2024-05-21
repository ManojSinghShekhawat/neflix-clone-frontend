import React from "react";

export const Card = ({ imgUrl, index }) => {
	return (
		<div className='card'>
			<img key={index} src={imgUrl} alt='cover' />
		</div>
	);
};
