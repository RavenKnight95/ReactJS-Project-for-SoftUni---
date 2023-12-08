import { useContext, useEffect, useState } from "react";
import * as characterService from '../../services/characterService';
import { useNavigate } from "react-router";
import AuthContext from "../../contexts/authContext";
import CharacterRosterFiltered from "./character-roster-filtered/CharacterRosterFiltered";

import './CharacterRoster.css'
import { Link } from "react-router-dom";

export default function CharacterRoster() {

    useEffect(() => { document.body.style.backgroundImage = `url(${'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e81ef992-f87d-4f74-b70a-b4c015545b00/df5h2mw-7c2bdb65-3c07-4756-afd0-a9f0b6512e39.jpg/v1/fill/w_1920,h_1311,q_75,strp/medieval_interior_by_canadianmark_df5h2mw-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMxMSIsInBhdGgiOiJcL2ZcL2U4MWVmOTkyLWY4N2QtNGY3NC1iNzBhLWI0YzAxNTU0NWIwMFwvZGY1aDJtdy03YzJiZGI2NS0zYzA3LTQ3NTYtYWZkMC1hOWYwYjY1MTJlMzkuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.kdj_ak6pNf5wZq3GaFTLlV-ScrCdNC2oHz0Y0pubMT4'})` })

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
                {filtered.length === 0 && (
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

