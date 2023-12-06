import "./Tavern.css"
import { useEffect, useState } from 'react';

import * as characterService from '../../services/characterService';
import TavernCharacter from './tavern-character/TavernCharacter';


export default function Tavern() {
    const [characters, setCharacters] = useState([]);


    useEffect(() => { document.body.style.backgroundImage = `url(${'https://i.etsystatic.com/45437265/r/il/71de21/5160683751/il_fullxfull.5160683751_eumm.jpg'})` })
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
                <h1 className="tavern-message-h1">Welcome to the Tavern! </h1>
                <h2 className="tavern-message-h2">Below are the characters having a drink </h2>
            </div>

            <section id="tavern-page">

                {characters.map(character => (
                    <TavernCharacter key={character._id} {...character} />
                ))}

                {characters.length === 0 && (
                    <h1 className="no-characters">No characters have come for a drink in the Tavern yet...</h1>
                )}
            </section>
        </div>
    );
}