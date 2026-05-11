import { useState } from "react"
import Movie from "./components/Movie"

const App = ({initialMovies}) => {
  const [movies, setMovies] = useState(initialMovies)
  const [movieName, setName] = useState("")

  const addMovie = (e) => {
    e.preventDefault()
    console.log("Movie: ", movieName)
    setName("")
    setMovies([...movies, {id: movies.length + 1, title: movieName, watchList: true}])
  }

  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movies.map((movie)=>(<Movie key={movie.id} movie={movie}/>))}
      </ul>
      <form onSubmit={addMovie}>
        {/* uncontrolled needs a name */}
        {/* you can use a state for controlled input */}
        <input onChange={(e)=>setName(e.target.value)} value={movieName} />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  )
}

export default App

// uncontrolled input field
// const addMovie = (e) => {
//   e.preventDefault()
//   console.log("Movie: ", e.target.movieName.value)
//   e.target.movieName.value = ""
// }

{/* {movies.map((m)=>{
  return <li>{m.title}</li>
})} */}

{/* <li>{movies[0].title}</li>
<li>{movies[1].title}</li>
<li>{movies[2].title}</li>
<li>{movies[3].title}</li>
<li>{movies[4].title}</li>
<li>{movies[5].title}</li>
<li>{movies[6].title}</li>
<li>{movies[7].title}</li> */}