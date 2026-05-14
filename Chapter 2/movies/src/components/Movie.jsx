const Movie = ({ movie, movieList, setList }) => {
    const toggleWatchList = (id) => {
        setList(movieList.map((movie) => movie.id === id 
        ? {...movie, watchlist: !movie.watchlist}
        : movie
        ))
    }
    return (
        <li>
            {movie.title} Watchlist: {movie.watchlist ? "(Yes)" : "(No)"}
            <span
                style={{ fontSize: "0.7rem", color: "blue", cursor: "pointer" }}
                onClick={() => toggleWatchList(movie.id)}
            >
                {movie.watchlist ? " Remove" : " Add"}
            </span>
        </li>
    )
}

export default Movie