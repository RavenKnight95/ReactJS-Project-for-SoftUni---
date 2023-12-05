import "./Tavern.css"
import { useEffect, useState } from 'react';

import * as characterService from '../../services/characterService';
import TavernCharacter from './tavern-character/TavernCharacter';

export default function Tavern() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        characterService.getAll()
            .then(result => setCharacters(result))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="tavern-welcome">
            <div className="tavern-message">
                <h1>Welcome to the Tavern! </h1>
            </div>

            <section id="tavern-page">

                {characters.map(character => (
                    <TavernCharacter key={character._id} {...character} />
                ))}

                {characters.length === 0 && (
                    <h3 className="no-characters">No characters have come for a drink in the Tavern yet...</h3>
                )}
            </section>
        </div>
    );
}