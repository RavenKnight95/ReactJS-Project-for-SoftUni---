import "./Tavern.css"
import { useEffect, useState } from 'react';

import * as characterService from '../../services/characterService';
import TavernCharacter from './tavern-character/TavernCharacter';


export default function Tavern() {
    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(characters);
    const [showDiv, setShowDiv] = useState(true);

    useEffect(() => { document.body.style.backgroundImage = `url(${'https://i.etsystatic.com/45437265/r/il/71de21/5160683751/il_fullxfull.5160683751_eumm.jpg'})` })
    useEffect(() => {
        characterService.getAll()
            .then(result => setCharacters(result))
            .catch(err => {
            });
    }, []);

    const handleSearch = () => {

        const filteredCharacters = characters.filter((character) =>

            character.name.toLowerCase() === searchTerm.toLowerCase()
        );


        setSearchResults(filteredCharacters);
        if (filteredCharacters.length >= 1) {
            setShowDiv(true);
        } else {
            setShowDiv(false);
        }


    };
    return (
        <div className="tavern-welcome">
            <div className="tavern-message">
                <h1 className="tavern-message-h1">Welcome to the Tavern! </h1>
                <div className="bartender-container">
                    <h2 className="bartender-h2">Ask the bartender</h2>
                    <input
                        type="text"
                        placeholder="Search for a character"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} />

                    <button className="bartender-search-button" onClick={handleSearch}>Search</button>
                    <ul>

                        {searchResults.map((character) => (
                            <li className="found-characters" key={character.name}>
                                Yep, {character.name} is here {character.attackPower >= 4 && (
                                    <p>Be careful, {character.name} is very strong</p>
                                )}
                                {character.Level >= 3 && (<p>I heard {character.name} has reached level {character.Level} already</p>)}
                            </li>

                        ))}
                        {!showDiv && (<h1 className="character-not-present">Sorry, haven't heard of this character</h1>)}

                    </ul>
                </div>
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