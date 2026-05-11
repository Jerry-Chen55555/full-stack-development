import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const movies = [
  { id: 1, title: "Inception", watchlist: true },
  { id: 2, title: "The Dark Knight", watchlist: false },
  { id: 3, title: "Interstellar", watchlist: true },
  { id: 4, title: "Parasite", watchlist: false },
  { id: 5, title: "The Matrix", watchlist: true },
  { id: 6, title: "Avengers: Endgame", watchlist: false },
  { id: 7, title: "Whiplash", watchlist: true },
  { id: 8, title: "The Social Network", watchlist: false }
];

createRoot(document.getElementById('root')).render(<App initialMovies={movies}/>)
