import React from 'react'

const PokemonCard = ({ pokemon, onClick }) => {
  return (
    <div className="pokemon-card" onClick={onClick}>
      <img 
        src={pokemon.image} 
        alt={pokemon.name} 
        className="pokemon-image"
      />
      <div className="pokemon-name">
        {pokemon.name}
      </div>
    </div>
  )
}

export default PokemonCard