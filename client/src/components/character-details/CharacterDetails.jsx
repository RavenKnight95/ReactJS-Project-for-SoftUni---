import { useContext, useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import './CharacterDetails.css'

import * as characterService from '../../services/characterService';
import AuthContext from "../../contexts/authContext";

export default function CharacterDetails() {
    const navigate = useNavigate();
    const { email, userId } = useContext(AuthContext);
    const [character, setCharacter] = useState({});
    const { characterId } = useParams();

    useEffect(() => { document.body.style.backgroundImage = `url(${'https://i.etsystatic.com/45437265/r/il/71de21/5160683751/il_fullxfull.5160683751_eumm.jpg'})` })

    useEffect(() => {
        characterService.getOne(characterId)
            .then(setCharacter);

    }, [characterId]);

    const totalPower = (character.attackPower + character.defensePower) * character.dexterity

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to dismiss ${character.name}`);

        if (hasConfirmed) {
            await characterService.remove(characterId);

            navigate('/tavern');
        }
    }

    return (
        <div className="character-details-page">
            <section id="allCharacters">
                <h1>Character Details</h1>
                <div className="allCharacters-info">
                    {userId === character._ownerId && (
                        <div className="character-header">
                            <h1 className="char-name">{character.name} greets you with a smile</h1>
                            <h1 className="char-attribute-attack">Level: {character.Level}</h1>
                            <h1 className="char-attribute-attack">Health: {character.HealthPoints}</h1>
                            <h1 className="char-attribute-attack">Attack Power: {character.attackPower}</h1>
                            <h1 className="char-attribute-defense">Defense Power: {character.defensePower}</h1>
                            <h1 className="char-attribute-dexterity">Dexterity: {character.dexterity}</h1>
                            <h1 className="char-attribute-total-power">Total Power: {totalPower}</h1>
                            <div className="buttons">
                                {/* <Link to={pathToUrl('/characters/:characterId/edit', { characterId })} className="button">Edit</Link> */}
                                <button className="button" onClick={deleteButtonClickHandler}>Dismiss</button>
                            </div>
                        </div>
                    )}
                    {userId !== character._ownerId && (
                        <div className="character-header">
                            <p className="char-not-owned">

                                {character.name} politely asks you to walk away...
                            </p>
                            <Link to={('/tavern')} className="go-back-button">Go back to Tavern</Link>
                        </div>
                    )}
                </div>
            </section >
        </div >
    );
}
