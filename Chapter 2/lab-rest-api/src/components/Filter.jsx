import React from 'react'

const POKEMON_TYPES = [
  'normal', 'fire', 'water', 'grass', 'electric', 'ice',
  'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug',
  'rock', 'ghost', 'dark', 'dragon', 'steel', 'fairy'
]

const SearchAndFilter = ({ searchTerm, onSearchChange, selectedType, onTypeChange }) => {
  return (
    <div className="search-filter">
      <input
        type="text"
        className="search-input"
        placeholder="Enter name"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select 
        className="type-select"
        value={selectedType} 
        onChange={(e) => onTypeChange(e.target.value)}
      >
        <option value="">All Types</option>
        {POKEMON_TYPES.map(type => (
          <option key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SearchAndFilter