import React, { createContext, useEffect, useState } from 'react';

// helpers
import { getGamesList } from '../helper/games/getGamesList';

// creacion del context
export const GamesContext = createContext();

const GamesProvider = ({ children }) => {

    // estado para lista de juegos
    const [listGames, setListGames ] = useState(null);

    // estado para el formulario 
    const [gameSelect, setGameSelect] = useState(null);

    useEffect( () => {
        const getListGames = async () => {
            const data = await getGamesList();
            setListGames( data );
        }
        getListGames();
    }, []);
    return (
        <GamesContext.Provider
            value={{
                listGames,
                gameSelect,
                setGameSelect
            }}
        >
            { children }
        </GamesContext.Provider>
    );
}
 
export default GamesProvider;