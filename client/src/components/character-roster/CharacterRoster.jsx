import { useContext, useEffect, useState } from "react";
import * as characterService from '../../services/characterService';
import { useNavigate, useParams } from "react-router";
import AuthContext from "../../contexts/authContext";
import TavernCharacter from "../tavern/tavern-character/TavernCharacter";
import CharacterRosterFiltered from "./character-roster-filtered/CharacterRosterFiltered";

import './CharacterRoster.css'

export default function CharacterRoster() {

    const navigate = useNavigate();
    const [characters, setCharacters] = useState([]);
    const { email, userId } = useContext(AuthContext);

    useEffect(() => {
        characterService.getAll()
            .then(result => setCharacters(result))
            .catch(err => {
                console.log(err);
            });
    }, []);

    const filtered = characters.filter((char) => char._ownerId === userId)

    return (
        <div className="character-roster">
            <h1 className="character-roster-h1">Character Roster</h1>
            <section id="tavern-page">
                {filtered.map(f => (
                    <CharacterRosterFiltered key={f._id} {...f} />
                ))}
            </section>
        </div>
    );
}

