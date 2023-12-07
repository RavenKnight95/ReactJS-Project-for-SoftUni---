import { useEffect, useState } from "react";
import * as characterService from '../../../services/characterService';
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";



export default function CharacterRosterFiltered({
    _id,
    name,
}) {
    
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        characterService.getAll()
            .then(result => setCharacters(result))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="allCharacters">
            <div className="allCharacters-info">
                <h1>{name}</h1>
                <div className="buttons-container">
                    <Link to={`/characters/${_id}`} className="details-button">Check Stats</Link>
                </div>
            </div>
        </div>
    )
}