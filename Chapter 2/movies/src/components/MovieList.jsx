import Movie from "./Movie"

const MovieList = ({ changeFilter, filterStatus, filteredList, movieList, setList }) => {
    return (
        <div>
            <button onClick={changeFilter}>
                {filterStatus
                    ? "Show All Movies"
                    : "Show only Watchlist"}
            </button>
            <ul>
                {filteredList.map((movie) => (
                    <Movie key={movie.id} movie={movie} movieList={movieList} setList={setList} />
                ))}
            </ul>
        </div>
    )
}

export default MovieList