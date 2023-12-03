import React, { useState } from 'react';

const Arena = () => {
  // Assume you have a list of user-created characters and opponent characters
  const userCharacters = [
    { name: 'UserCharacter1', attackPower: 5, defensePower: 3, dexterity: 7 },
    // Add more user-created characters as needed
  ];

  const opponentCharacters = [
    { name: 'OpponentCharacter1', attackPower: 4, defensePower: 2, dexterity: 6 },
    // Add more opponent characters as needed
  ];

  const [selectedUserCharacter, setSelectedUserCharacter] = useState(null);
  const [selectedOpponentCharacter, setSelectedOpponentCharacter] = useState(null);

  const handleUserCharacterSelect = (character) => {
    setSelectedUserCharacter(character);
  };

  const handleOpponentCharacterSelect = (character) => {
    setSelectedOpponentCharacter(character);
  };

  const handleBattle = () => {
    if (selectedUserCharacter && selectedOpponentCharacter) {
      // Compare attributes and decide the winner
      const userTotalAttributes =
        selectedUserCharacter.attackPower +
        selectedUserCharacter.defensePower +
        selectedUserCharacter.dexterity;

      const opponentTotalAttributes =
        selectedOpponentCharacter.attackPower +
        selectedOpponentCharacter.defensePower +
        selectedOpponentCharacter.dexterity;

      if (userTotalAttributes > opponentTotalAttributes) {
        // User character wins
        alert(`${selectedUserCharacter.name} is victorious!`);
        // TODO: Allow the user to allocate one attribute point to the winning character
      } else if (userTotalAttributes < opponentTotalAttributes) {
        // Opponent character wins
        alert(`${selectedOpponentCharacter.name} is victorious!`);
        // TODO: Remove the defeated character (delete or mark as defeated)
      } else {
        alert('It\'s a draw!');
      }
    } else {
      alert('Please select both user and opponent characters before battling.');
    }
  };

  return (
    <div>
      <h2>Arena</h2>
      <div>
        <h3>Your Character</h3>
        <ul>
          {userCharacters.map((character) => (
            <li key={character.name} onClick={() => handleUserCharacterSelect(character)}>
              {character.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Opponent Character</h3>
        <ul>
          {opponentCharacters.map((character) => (
            <li key={character.name} onClick={() => handleOpponentCharacterSelect(character)}>
              {character.name}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleBattle}>Battle</button>
    </div>
  );
};

export default Arena;