import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PokemonCard from './components/PokemonCard'
import PokemonDetail from './components/PokemonDetail'
import './App.css'

function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=10000').then((response) => {
      const results = response.data.results
      const total = response.data.count
      const pokemonDetailsArray = [];
      let loadedPokemon = 0;
      const pokemonDetails = results.map((pokemon, index) => {
        axios.get(pokemon.url).then((pokemonResponse) => {
          const data = pokemonResponse.data
          const pokemonData = {
            id: data.id,
            name: data.name,
            types: data.types.map(t => t.type.name),
            image: data.sprites.other['official-artwork'].front_default || data.sprites.front_default || data.sprites.other.home.front_default,
            abilities: data.abilities.map(a => a.ability.name),
            moves: data.moves.map(m => m.move.name),
            height: data.height,
            weight: data.weight,
          }
          pokemonDetailsArray[index] = pokemonData
          loadedPokemon++

          if (loadedPokemon == total) {
            setPokemonList(pokemonDetailsArray)
            setLoading(false)
          }
        })
      })
    })
  }, [])

  const filteredPokemon = pokemonList.filter((pokemon) => {
    const matchesSearch = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === '' ? true : pokemon.types.includes(selectedType.toLowerCase())
    return matchesSearch && matchesType
  })

  const handleSearchChange = (value) => {
    setSearchTerm(value)
  }

  const handleTypeChange = (value) => {
    setSelectedType(value)
  }

  return (
    <div className="app-container">
      <h1>Pokémon Explorer</h1>
      {selectedPokemon ? (
        <PokemonDetail pokemon={selectedPokemon} onBack={() => setSelectedPokemon(null)} />
      ) : (
        <>
          <Filter
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            selectedType={selectedType}
            onTypeChange={handleTypeChange}
          />
          {filteredPokemon.length > 0 ? (
            <div className="pokemon-grid">
              {filteredPokemon.map((pokemon) => (
                <PokemonCard
                  key={pokemon.id}
                  pokemon={pokemon}
                  onClick={() => setSelectedPokemon(pokemon)}
                />
              ))}
            </div>
          ) : (
            loading ?
              (
                <div className="no-results-message">
                  Loading...
                </div>
              )
              :
              (
                <div className="no-results-message">
                  No Pokémon found. Try adjusting your search or filter.
                </div>
              )
          )}
        </>
      )}
    </div>
  )
}

export default App