import React, { useState } from 'react'
import Movie from './components/Movie'

const App = ({ movies }) => {
  const [movieName, setName] = useState("")
  const [movieList, setList] = useState(movies)
  const [filterStatus, updateFilter] = useState(true)

  // Decide what movies to show
  const moviesToShow = filterStatus
    ? movieList.filter((movie) => movie.watchList)
    : movieList

  const handleSubmit = (e) => {
    e.preventDefault()

    // Prevent empty movie names
    if (movieName.trim() === "") return

    setList([
      ...movieList,
      {
        id: Math.floor(Math.random() * 10000),
        title: movieName,
        watchList: true
      }
    ])

    setName("")
  }

  const changeFilter = () => {
    updateFilter(!filterStatus)
  }

  return (
    <div>
      <h2>Movies</h2>

      <button onClick={changeFilter}>
        {filterStatus
          ? "Show All Movies"
          : "Show only Watchlist"}
      </button>

      <ul>
        {moviesToShow.map((movie) => (
          <Movie key={movie.id} movie={movie} movieList={movieList} setList={setList} />
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          value={movieName}
          placeholder="Enter movie name"
        />

        <button type="submit">
          Add Movie
        </button>
      </form>
    </div>
  )
}

export default App