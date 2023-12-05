import { useContext, useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as characterService from '../../services/characterService';
import AuthContext from "../../contexts/authContext";
import { pathToUrl } from "../../utils/pathUtils";

export default function CharacterDetails() {
    const navigate = useNavigate();
    const { email, userId } = useContext(AuthContext);
    const [character, setCharacter] = useState({});
    const { characterId } = useParams();

    useEffect(() => {
        characterService.getOne(characterId)
            .then(setCharacter);
        console.log(characterId);
    }, [characterId]);


    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${character.name}`);

        if (hasConfirmed) {
            await characterService.remove(characterId);
            console.log(characterId);
            navigate('/tavern');
        }
    }

    return (
        <section id="character-details">
            <h1>Character Details</h1>
            <div className="info-section">
                <div className="character-header">
                    <h1>Name: {character.name}</h1>
                    <h1>Attack Power: {character.attackPower}</h1>
                    <h1>Defense Power: {character.defensePower}</h1>
                    <h1>Dexterity: {character.dexterity}</h1>
                </div>

                {userId === character._ownerId && (
                    <div className="buttons">
                        <Link to={pathToUrl('/characters/:characterId/edit', { characterId })} className="button">Edit</Link>
                        <button className="button" onClick={deleteButtonClickHandler}>Delete</button>
                    </div>
                )}
            </div>
        </section>
    );
}
