import React from 'react'

const PokemonDetail = ({ pokemon, onBack }) => {
  return (
    <div className="detail-container">
      <button className="back-button" onClick={onBack}>
        ← Back to List
      </button>
      
      <div className="detail-image">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      
      <h2 className="detail-name">{pokemon.name}</h2>
      
      <div className="info-section">
        <h3>Types</h3>
        <div>
          {pokemon.types.map(type => (
            <span key={type} className="type-badge">
              {type}
            </span>
          ))}
        </div>
      </div>
      
      <div className="info-section">
        <h3>Abilities</h3>
        <ul className="ability-list">
          {pokemon.abilities.map(ability => (
            <li key={ability}>{ability}</li>
          ))}
        </ul>
      </div>
      
      <div className="info-section">
        <h3>All Moves</h3>
        <ul className="move-list">
          {pokemon.moves.map(move => (
            <li key={move}>{move}</li>
          ))}
        </ul>
      </div>
      
      <div className="info-section">
        <h3>Additional Info</h3>
        <p>Height: {pokemon.height / 10} m</p>
        <p>Weight: {pokemon.weight / 10} kg</p>
      </div>
    </div>
  )
}

export default PokemonDetail