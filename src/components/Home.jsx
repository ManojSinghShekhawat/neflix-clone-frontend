import "../../cover.jpg";
import "./Home.scss";
import { IoIosPlay } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { Row } from "./Row";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "./Button";

const URL =
	"https://api.themoviedb.org/3/movie/upcoming?api_key=b7672e5e25179ee10601998856314018";
export const Home = () => {
	const [upcommingMovie, setUpcommingMovie] = useState([]);
	const [popularMovie, setPopularMovie] = useState([]);
	const [topRatedMovie, setTopRatedMovie] = useState([]);

	const getdata = async (type, fun) => {
		const {
			data: { results },
		} = await axios.get(
			`https://api.themoviedb.org/3/movie/${type}?api_key=b7672e5e25179ee10601998856314018`
		);
		fun(results);
	};

	useEffect(() => {
		getdata("upcoming", setUpcommingMovie);
		getdata("popular", setPopularMovie);
		getdata("top_rated", setTopRatedMovie);
	}, []);

	return (
		<div className='container'>
			<div className='side'>
				<h1>WONDER</h1>
				<h1 className='lowerHeading'>WOMAN</h1>
				<h3># Best movie to watch</h3>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
					consequatur, assumenda sequi molestiae iure aliquam quasi dolor voluptate,
					quia consequuntur nam at, vitae ratione numquam laudantium sint ea
					consectetur distinctio!
				</p>
				<div className='btn'>
					<Button title={"Play"} icon={IoIosPlay} className={"btn-play"} />
					<Button title={"My List"} icon={FaPlus} className={"btn-list"} />
				</div>
			</div>
			<Row upcommingMovie={upcommingMovie} title={"Upcomming"} />
			<Row upcommingMovie={popularMovie} title={"Popular"} />
			<Row upcommingMovie={topRatedMovie} title={"Top rated"} />
		</div>
	);
};
