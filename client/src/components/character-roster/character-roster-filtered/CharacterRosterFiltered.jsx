import { useContext, useEffect, useState } from "react";
import * as characterService from '../../../services/characterService';
import { useNavigate, useParams } from "react-router";
import AuthContext from "../../../contexts/authContext";
import { Link } from "react-router-dom";



export default function CharacterRosterFiltered({
    _id,
    name,
    attackPower,
    defensePower,
    dexterity,
}) {

    const navigate = useNavigate();
    const [characters, setCharacters] = useState([]);
    const [character, setCharacter] = useState({});
    const { email, userId } = useContext(AuthContext);
    const { characterId } = useParams();

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