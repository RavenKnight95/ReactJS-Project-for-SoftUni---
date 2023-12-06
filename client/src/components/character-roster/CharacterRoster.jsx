import { useContext, useEffect, useState } from "react";
import * as characterService from '../../services/characterService';
import { useNavigate, useParams } from "react-router";
import AuthContext from "../../contexts/authContext";
import TavernCharacter from "../tavern/tavern-character/TavernCharacter";
import CharacterRosterFiltered from "./character-roster-filtered/CharacterRosterFiltered";

export default function CharacterRoster() {

    const navigate = useNavigate();
    const [characters, setCharacters] = useState([]);
    const [character, setCharacter] = useState({});
    const { email, userId } = useContext(AuthContext);
    const { characterId } = useParams();
    const [filteredCharacters, setFilteredCharacters] = useState('');

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
            <h1>Character Roster</h1>
            <section id="tavern-page">
                {filtered.map(f => (
                    <CharacterRosterFiltered key={f._id} {...f} />
                ))}
            </section>
        </div>
    );
}

