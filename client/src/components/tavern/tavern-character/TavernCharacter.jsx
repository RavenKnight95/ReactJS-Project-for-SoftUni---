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
                <h2 className="char-name">{name}</h2>
                <h3 className="char-attribute-attack">Attack: Unknown</h3>
                <h3 className="char-attribute-defense">Defense: Unknown</h3>
                <h3 className="char-attribute-dexterity">Dexterity: Unknown</h3>
                <div className="buttons-container">
                    <Link to={`/characters/${_id}`} className="details-button">Check Stats</Link>
                </div>
            </div>
        </div>
    )
}