import React from 'react'
import Movie from "./components/Movie"
import MovieList from "./components/MovieList"
import { useState } from 'react'


// const Movie = ({movie}) => <li>{movie.title}</li>

const App = ({ movies }) => {

	// const handleSubmit = (e) => {
	//   e.preventDefault();
	//   console.log("Movie: ", e.target.movieName.value)
	//   e.target.movieName.value = "";
	// }
	const [filterStatus, filterUpdate] = useState(true);

	const [movieArray, setArray] = useState(movies);

	const [movieName, setName] = useState("");

	const changeFilter = () => {
		filterUpdate(!filterStatus)
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(movieName);
		setArray([...movieArray, { id: Math.floor(Math.random() * (10000)), title: movieName, watchlist: false }]);
		setName("");
	}

	const filteredList = filterStatus ? movieArray.filter(movie => movie.watchlist) : movieArray;

	// use filter method. it is similar syntax to map method

	return (
		<div>
			<h2>
				Movies App
			</h2>
			<MovieList
				changeFilter={changeFilter}
				filterStatus={filterStatus}
				filteredList={filteredList}
				movieList={movieArray}
				setList={setArray}
			/>
			<form onSubmit={handleSubmit}>
				{/* uncontrolled needs a name */}
				{/* you can use a state for controlled input */}
				<input onChange={(e) => setName(e.target.value)} value={movieName} />
				<button type="submit">Add Movie</button>
			</form>
		</div>
	)
}

export default App