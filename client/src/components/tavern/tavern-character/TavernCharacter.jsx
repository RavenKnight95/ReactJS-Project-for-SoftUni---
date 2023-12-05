import "./TavernCharacter.css"

import { Link } from "react-router-dom";

export default function TavernCharacter({
    _id,
    name,
    attackPower,
    defensePower,
    dexterity,
}) {
    return (
        <div className="allCharacters">
            <div className="allCharacters-info">

                <h2 className="char-name">Name:{name}</h2>
                <h3 className="char-attribute-attack">Attack: {attackPower}</h3>
                <h3 className="char-attribute-defense">Defense: {defensePower}</h3>
                <h3 className="char-attribute-dexterity">Dexterity: {dexterity}</h3>
                <div className="buttons-container">
                    <Link to={`/characters/${_id}`} className="details-button">Details</Link>
                </div>
            </div>
        </div>
    )
}