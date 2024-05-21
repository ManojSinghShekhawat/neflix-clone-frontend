import "../../cover.jpg";
import "./Home.scss";
import { IoIosPlay } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { Row } from "./Row";
import React, { useEffect, useState } from "react";
import axios from "axios";

const URL =
	"https://api.themoviedb.org/3/movie/upcoming?api_key=b7672e5e25179ee10601998856314018";
export const Home = () => {
	const [upcommingMovie, setUpcommingMovie] = useState([]);
	useEffect(() => {
		const getdata = async () => {
			const {
				data: { results },
			} = await axios.get(URL);
			setUpcommingMovie(results);
		};
		getdata();
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
					<button className='btn-play'>
						<IoIosPlay />
						Play
					</button>
					<button className='btn-list'>
						<FaPlus />
						My List
					</button>
				</div>
			</div>
			<Row upcommingMovie={upcommingMovie} title={"Upcomming Movies"} />
		</div>
	);
};
