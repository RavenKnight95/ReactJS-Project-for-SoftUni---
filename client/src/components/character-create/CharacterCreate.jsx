import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import "./CharacterCreate.css"

import * as characterService from '../../services/characterService'

const CharacterCreate = ({ onSubmit }) => {
  const navigate = useNavigate();

  useEffect(() => { document.body.style.backgroundImage = `url(${'https://cdn1.epicgames.com/ue/product/Screenshot/bOti6pArJYU-1920x1080-fb6d0dfd6bc071c3e3f3bb5f6dae7b91.jpg?resize=1&w=1920'})` });

  const [characterName, setCharacterName] = useState('');
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

  const finalizeCharacter = async (e) => {
    e.preventDefault();
    // Check if all points are allocated and a name is provided before finalizing

    if (remainingPoints === 0 && characterName.trim() !== '') {
      const character = {
        name: characterName,
        Level: 1,
        HealthPoints: 100,
        attackPower,
        defensePower,
        dexterity,
        remainingPoints,
      };

      try {
        await characterService.create(character);
        navigate('/tavern');
        //TODO switch navigate from home to future component - tavern
      } catch (err) {
        console.log(err);
      }
      // Submit the character to the parent component

    } else {
      alert('Please provide a character name and allocate all 10 points before finalizing.');
    }
  };
  
  return (
    <div className="character-create-container">
      <div className='character-create'>
        <h2 className='h2-title'>Create Your Character</h2>
        <div>
          <label className='attribute-name'>Name:</label>
          <input
            type="text"
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)} />
        </div>
        {remainingPoints === 0 ? <p className='remaining-points-red'>Remaining Points: {remainingPoints}</p> :
          <p className='remaining-points-green'>Remaining Points: {remainingPoints}</p>}

        <div>
          <label className='attribute-name'>Attack Power: {attackPower}</label>
          <button className='create-buttons' onClick={() => handleIncrement('attackPower')}>+</button>
          <button className='create-buttons' onClick={() => handleDecrement('attackPower')}>-</button>
        </div>
        <div>
          <label className='attribute-name'>Defense Power: {defensePower}</label>
          <button className='create-buttons' onClick={() => handleIncrement('defensePower')}>+</button>
          <button className='create-buttons' onClick={() => handleDecrement('defensePower')}>-</button>
        </div>
        <div>
          <label className='attribute-name'>Dexterity: {dexterity}</label>
          <button className='create-buttons' onClick={() => handleIncrement('dexterity')}>+</button>
          <button className='create-buttons' onClick={() => handleDecrement('dexterity')}>-</button>
        </div>
        <button className='finalize-button' onClick={finalizeCharacter}>Finalize Character</button>
      </div>
    </div>
  );
};

export default CharacterCreate;