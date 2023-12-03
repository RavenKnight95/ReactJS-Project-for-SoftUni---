import React, { useState } from 'react';
import "./CharacterCreate.css"
const CharacterCreate = ({ onSubmit }) => {
  const [attackPower, setAttackPower] = useState(0);
  const [defensePower, setDefensePower] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [remainingPoints, setRemainingPoints] = useState(10);

  const handleIncrement = (attribute) => {
    if (remainingPoints > 0) {
      switch (attribute) {
        case 'attackPower':
          setAttackPower(attackPower + 1);
          break;
        case 'defensePower':
          setDefensePower(defensePower + 1);
          break;
        case 'dexterity':
          setDexterity(dexterity + 1);
          break;
        default:
          break;
      }
      setRemainingPoints(remainingPoints - 1);
    }
  };

  const handleDecrement = (attribute) => {
    switch (attribute) {
      case 'attackPower':
        if (attackPower > 0) {
          setAttackPower(attackPower - 1);
          setRemainingPoints(remainingPoints + 1);
        }
        break;
      case 'defensePower':
        if (defensePower > 0) {
          setDefensePower(defensePower - 1);
          setRemainingPoints(remainingPoints + 1);
        }
        break;
      case 'dexterity':
        if (dexterity > 0) {
          setDexterity(dexterity - 1);
          setRemainingPoints(remainingPoints + 1);
        }
        break;
      default:
        break;
    }
  };

  const finalizeCharacter = () => {
    // Check if all points are allocated before finalizing
    if (remainingPoints === 0) {
      const character = {
        attackPower,
        defensePower,
        dexterity,
      };

      // Submit the character to the parent component
      onSubmit(character);
    } else {
      alert('Please allocate all 10 points before finalizing.');
    }
  };

  return (
    <div>
      <h2>Character Attributes</h2>
      <p>Remaining Points: {remainingPoints}</p>
      <div>
        <label>Attack Power: {attackPower}</label>
        <button onClick={() => handleIncrement('attackPower')}>+</button>
        <button onClick={() => handleDecrement('attackPower')}>-</button>
      </div>
      <div>
        <label>Defense Power: {defensePower}</label>
        <button onClick={() => handleIncrement('defensePower')}>+</button>
        <button onClick={() => handleDecrement('defensePower')}>-</button>
      </div>
      <div>
        <label>Dexterity: {dexterity}</label>
        <button onClick={() => handleIncrement('dexterity')}>+</button>
        <button onClick={() => handleDecrement('dexterity')}>-</button>
      </div>
      <button onClick={finalizeCharacter}>Finalize Character</button>
    </div>
  );
};

export default CharacterCreate;