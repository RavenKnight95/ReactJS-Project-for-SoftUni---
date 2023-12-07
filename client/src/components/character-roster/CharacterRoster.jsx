import { useContext, useEffect, useState } from "react";
import * as characterService from '../../services/characterService';
import { useNavigate } from "react-router";
import AuthContext from "../../contexts/authContext";
import CharacterRosterFiltered from "./character-roster-filtered/CharacterRosterFiltered";

import './CharacterRoster.css'
import { Link } from "react-router-dom";

export default function CharacterRoster() {

    useEffect(() => { document.body.style.backgroundImage = `url(${'https://i.etsystatic.com/45437265/r/il/71de21/5160683751/il_fullxfull.5160683751_eumm.jpg'})` })

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
                {characters.length === 0 && (
                    <div className="no-characters-section">
                        <div className="no-characters">
                            <p className="no-characters">You still need to create your own Character</p>
                        </div>
                        <div className="create-button-container">
                            <Link to={`/character-create`} className="create-button">Create one now</Link>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}

