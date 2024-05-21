import React from "react";
import "./Header.scss";
import "../../logo.png";

export const Header = () => {
	return (
		<nav>
			<div className='logo'>
				<img src='./logo.png' alt='' />
			</div>
			<div className='menu'>
				<ul>
					<li>New</li>
					<li>Popular</li>
					<li>Upcomming</li>
					<li>Your Feverate</li>
				</ul>
			</div>
			<div className='search'>Icon</div>
		</nav>
	);
};
