import React from 'react';

const Tavern = ({ characters }) => {
    return (
        <div>
            <h2>Tavern</h2>
            <div>
                <h3>All Characters</h3>
                <ul>
                    {characters.map((character) => (
                        <li key={character.name}>
                            <strong>Name:</strong> {character.name} |
                            <strong> Attack Power:</strong> {character.attackPower} |
                            <strong> Defense Power:</strong> {character.defensePower} |
                            <strong> Dexterity:</strong> {character.dexterity}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Tavern;