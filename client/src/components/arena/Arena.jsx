import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import AuthContext from '../../contexts/authContext';
import * as characterService from '../../services/characterService';

import './Arena.css'

export default function Arena({
  _id,
  name,
  Level,
  attackPower,
  defensePower,
  dexterity,
}) {
  useEffect(() => { document.body.style.backgroundImage = `url(${'https://i.pinimg.com/originals/5e/44/81/5e44819d85fc181389136371684f02d3.jpg'})` })

  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const { email, userId } = useContext(AuthContext);
  const [selectedUserCharacter, setSelectedUserCharacter] = useState(null);
  const [selectedOpponentCharacter, setSelectedOpponentCharacter] = useState(null);
  const [style, setStyle] = useState('li-user-selected-char');
  const [opponentStyle, setOpponentStyle] = useState('')

  useEffect(() => {
    characterService.getAll()
      .then(result => setCharacters(result))
      .catch(err => {

      });
  }, []);

  const filtered = characters.filter((char) => char._ownerId === userId)
  const filtered2 = characters.filter((char) => char._ownerId !== userId)

  const handleUserCharacterSelect = (character) => {
    setSelectedUserCharacter(character);


    if (style !== 'li-user-selected-char') setStyle('li-user-selected-char');
    else setStyle('li-user-selected-char-is-selected');
    alert(`You have chosen to fight with ${character.name}`)
  };
  const handleOpponentCharacterSelect = (character) => {
    setSelectedOpponentCharacter(character);

    // if (opponentStyle !== 'li-opponent-selected-char') setOpponentStyle('li-opponent-selected-char');
    // else setOpponentStyle('li-opponent-selected-char-is-selected');
    alert(`Your opponent ${character.name} is ready to fight!`)
  };

  const handleBattle = () => {

    if (selectedUserCharacter && selectedOpponentCharacter) {

      const userTotalAttributes =
        (selectedUserCharacter.attackPower +
          selectedUserCharacter.defensePower) *
        selectedUserCharacter.dexterity;

      const opponentTotalAttributes =
        (selectedOpponentCharacter.attackPower +
          selectedOpponentCharacter.defensePower) *
        selectedOpponentCharacter.dexterity;

      if (userTotalAttributes > opponentTotalAttributes) {
        // User character wins
        alert(`${selectedUserCharacter.name} is victorious!`);

        // characterService.remove(selectedOpponentCharacter._id);
        // TODO: Allow the user to allocate one attribute point to the winning character

      } else if (userTotalAttributes < opponentTotalAttributes) {
        alert(`${selectedOpponentCharacter.name} is victorious!`);
        characterService.remove(selectedUserCharacter._id);
        alert(`Sadly, ${selectedUserCharacter.name} has passed away...`)

        navigate('/character-roster');

      } else {
        alert('It\'s a draw!');
      }
    } else {
      alert('Please select both user and opponent characters before battling.');
    }
  };

  return (
    <div className="background-arena-container">
      <div className="arena-container">
        <div className='your-character-container'>
          <h3 className='your-character-title'>Your Characters</h3>
          <ul className='your-character-unordered-list'>
            {filtered.map((character) => (
              <li key={character.name} className={style} onClick={() => handleUserCharacterSelect(character)}>
                {character.name}
                
              </li>
            ))}
          </ul>
        </div>
        <div className='opponent-character-container'>
          <h3 className='opponent-character-title'>Opponent Characters</h3>
          <ul className='your-character-unordered-list'>
            {filtered2.map((character) => (
              <li key={character.name} className='li-opponent-selected-char' onClick={() => handleOpponentCharacterSelect(character)}>
                {character.name}
              </li>
            ))}
          </ul>
        </div>
        <button onClick={handleBattle}>Battle</button>
      </div>
    </div >
  );
};
