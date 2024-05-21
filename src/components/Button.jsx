import React from "react";

export const Button = ({ icon: Icon, title: title, className: className }) => {
	// console.log(title);
	return (
		<button className={className}>
			{<Icon />}
			{title}
		</button>
	);
};
