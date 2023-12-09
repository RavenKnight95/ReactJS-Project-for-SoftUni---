import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import * as characterService from '../../services/characterService'

export default function CharacterPointsAllocator({
    initialPoints, onAllocatePoints
}) {
    const navigate = useNavigate();
    const { characterId } = useParams();
    const [remainingPoints, setRemainingPoints] = useState(1);
    const [attackPower, setAttackPower] = useState(0);
    const [defensePower, setDefensePower] = useState(0);
    const [dexterity, setDexterity] = useState(0);
    const [character, setCharacter] = useState({
        name: '',
        Level: 1,
        HealthPoints: 100,
        attackPower: '',
        defensePower: '',
        dexterity: '',
    });

    useEffect(() => {
        characterService.getOne(characterId)

            .then(result => {
                setCharacter(result);

            });

    }, [characterId]);

    const handleIncrement = (attribute) => {
        if (remainingPoints > 0) {
            switch (attribute) {
                case 'attackPower':
                    setAttackPower(character.attackPower++);
                    break;
                case 'defensePower':
                    setDefensePower(character.defensePower++);
                    break;
                case 'dexterity':
                    setDexterity(character.dexterity++);
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
                if (character.attackPower > 0) {
                    setAttackPower(character.attackPower--);
                    setRemainingPoints(remainingPoints + 1);
                }
                break;
            case 'defensePower':
                if (character.defensePower > 0) {
                    setDefensePower(character.defensePower--);
                    setRemainingPoints(remainingPoints + 1);
                }
                break;
            case 'dexterity':
                if (character.dexterity > 0) {
                    setDexterity(character.dexterity--);
                    setRemainingPoints(remainingPoints + 1);
                }
                break;
            default:
                break;
        }
        console.log(character.defensePower);
    };
    const finalizeCharacter = async (e) => {
        e.preventDefault();
        // Check if all points are allocated and a name is provided before finalizing
        const values = {
            name: character.name,
            Level: 1,
            HealthPoints: 100,
            attackPower: character.attackPower,
            defensePower: character.defensePower,
            dexterity: character.dexterity,
        };

        try {
            await characterService.edit(characterId, values);
            navigate('/character-roster');

        } catch (err) {
            console.log(err);
        }

    };


    return (
        <div className="character-create-container">
            <div className='character-create'>
                <h2 className='h2-title'>Points Allocator</h2>
                <div>
                    <h2>{character.name}</h2>
                </div>
                {remainingPoints === 0 ? <p className='remaining-points-red'>Remaining Points: {remainingPoints}</p> :
                    <p className='remaining-points-green'>Remaining Points: {remainingPoints}</p>}

                <div>
                    <label className='attribute-name'>Attack Power: {character.attackPower} </label>
                    <button className='create-buttons' onClick={() => handleIncrement('attackPower')}>+</button>
                    <button className='create-buttons' onClick={() => handleDecrement('attackPower')}>-</button>
                </div>
                <div>
                    <label className='attribute-name'>Defense Power: {character.defensePower}</label>
                    <button className='create-buttons' onClick={() => handleIncrement('defensePower')}>+</button>
                    <button className='create-buttons' onClick={() => handleDecrement('defensePower')}>-</button>
                </div>
                <div>
                    <label className='attribute-name'>Dexterity: {character.dexterity}</label>
                    <button className='create-buttons' onClick={() => handleIncrement('dexterity')}>+</button>
                    <button className='create-buttons' onClick={() => handleDecrement('dexterity')}>-</button>
                </div>
                <button className='finalize-button' onClick={finalizeCharacter}>Allocate Points</button>
            </div>
        </div>
    )
}