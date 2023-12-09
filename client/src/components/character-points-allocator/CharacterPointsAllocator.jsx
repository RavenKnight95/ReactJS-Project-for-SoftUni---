import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import * as characterService from '../../services/characterService'

export default function CharacterPointsAllocator({
    initialPoints, onAllocatePoints
}) {
    const navigate = useNavigate();
    const { characterId } = useParams();
    const [attackPower, setAttackPower] = useState(0);
    const [defensePower, setDefensePower] = useState(0);
    const [dexterity, setDexterity] = useState(0);
    const [allocatedPoints, setAllocatedPoints] = useState(null);
    const [attributes, setAttributes] = useState({
        attackPower: 0,
        defensePower: 0,
        dexterity: 0,
    })
    const [remainingPoints, setRemainingPoints] = useState(initialPoints);
    // const [character, setCharacter] = useState({
    //     name: '',
    //     Level: 1,
    //     HealthPoints: 100,
    //     attackPower: '',
    //     defensePower: '',
    //     dexterity: '',
    // });

    // useEffect(() => {
    //     characterService.getOne(characterId)

    //         .then(result => {
    //             setCharacter(result);

    //         });

    // }, [characterId]);

    const handleIncrement = (attribute) => {
        if (remainingPoints > 0) {
            setAttributes((prevAttributes) => ({
                ...prevAttributes,
                [attribute]: prevAttributes[attribute] + 1,
            }));
            setRemainingPoints((prevPoints) => prevPoints - 1);
        }
    };

    const handleDecrement = (attribute) => {
        if (attributes[attribute] > 0) {
            setAttributes((prevAttributes) => ({
                ...prevAttributes,
                [attribute]: prevAttributes[attribute] - 1,
            }));
            setRemainingPoints((prevPoints) => prevPoints + 1);
        }
    };

    const handleAllocatePoints = () => {
        onAllocatePoints(attributes);
    };


    return (
        <div className="character-create-container">
            <div className='character-create'>
                <h2 className='h2-title'>Points Allocator</h2>
               
                {remainingPoints === 0 ? <p className='remaining-points-red'>Remaining Points: {remainingPoints}</p> :
                    <p className='remaining-points-green'>Remaining Points: {remainingPoints}</p>}

                <div>
                    <label className='attribute-name'>Attack Power: {attributes.attackPower} </label>
                    <button className='create-buttons' onClick={() => handleIncrement('attackPower')} >+</button>
                    <button className='create-buttons' onClick={() => handleDecrement('attackPower')}>-</button>
                </div>
                <div>
                    <label className='attribute-name'>Defense Power: {attributes.defensePower}</label>
                    <button className='create-buttons' onClick={() => handleIncrement('defensePower')}>+</button>
                    <button className='create-buttons' onClick={() => handleDecrement('defensePower')}>-</button>
                </div>
                <div>
                    <label className='attribute-name'>Dexterity: {attributes.dexterity}</label>
                    <button className='create-buttons' onClick={() => handleIncrement('dexterity')}>+</button>
                    <button className='create-buttons' onClick={() => handleDecrement('dexterity')}>-</button>
                </div>
                <button className='finalize-button' onClick={handleAllocatePoints}>Allocate Points</button>
            </div>
        </div>
    )
}