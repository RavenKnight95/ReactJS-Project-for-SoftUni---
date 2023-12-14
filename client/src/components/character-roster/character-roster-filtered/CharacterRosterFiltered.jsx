import { useEffect, useState } from "react";
import * as characterService from '../../../services/characterService';
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { pathToUrl } from "../../../utils/pathUtils";
import AuthContext from "../../../contexts/authContext";

import './CharacterRosterFiltered.css'

export default function CharacterRosterFiltered({
    _id,
    name,
    remainingPoints,
}) {

    const [characters, setCharacters] = useState([]);
    const { characterId } = useParams();
    const [character, setCharacter] = useState({});



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
                <h1 className="roster-character">{name}</h1>
                {remainingPoints == 0 && (
                    <h1>You have {remainingPoints} points to allocate</h1>
                )}
                {remainingPoints == 1 && (
                    <h1>You have {remainingPoints} point to allocate</h1>
                )}
                {remainingPoints > 1 && (
                    <h1>You have {remainingPoints} points to allocate</h1>
                )}
                <div className="details-buttons-container">
                    <Link to={`/characters/${_id}`} className="details-button">Check Stats</Link>
                </div>
            </div>
        </div>
    )
}