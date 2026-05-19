import axios from "axios"
import { useState, useEffect } from "react"

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3001/movies").then((response)=>{
      setMovies(response.data)
      console.log("Movies: ", response.data)
    })
  },[])
  
  console.log("hello to console")
  
  return (
    <div>
      <h2>Promises and Async Operations</h2>
      <h4>Movies</h4>
      <ul>
        {movies.map((movie)=>
        <li key={movie.id}>{movie.title}</li>
      )}
      </ul>
    </div>
  )
}

export default App