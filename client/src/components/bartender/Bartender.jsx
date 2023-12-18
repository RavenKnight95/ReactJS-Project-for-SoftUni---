import React, { useState } from 'react';

const CharacterSearch = ({ characters }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(characters);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(filteredCharacters);
  };

  return (
    <div>
      <h2>Character Search</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {searchResults.map((character) => (
          <li key={character.name}>
            {character.name} - Level {character.level}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterSearch;