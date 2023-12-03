import { createContext, useState } from "react";

export const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
    const [character, setCharacters] = useState([]);


    const addCharactersState = (characterData) => {
        setCharacters(characterData);
    };


    return <CharacterContext.Provider value={{ character, addCharactersState }}>{children}</CharacterContext.Provider>
}