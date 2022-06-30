import React, { createContext, useContext, useEffect, useState } from 'react';

// context
import { GamesContext } from './GamesContext';

// helpers
import { getPuzzles } from '../helper/puzzles/puzzles';
import { UIContext } from './UIContext';

// creacion del context
export const PuzzlesContext = createContext();

const PuzzlesProvider = ({ children }) => {

    // accediendo al context de GamesContext
    const { gameSelect } = useContext( GamesContext );

    // accediendo al context de UIContext
    const { loading } = useContext( UIContext );

    // estado para consultar la DB
    const [puzzles, setPuzzles] = useState(null);

    // estado para formulario
    const [totalPuzzles, setTotalPuzzles] = useState(null);

    useEffect( () => {
        const getPuzzlesData = async () => {
            const data = await getPuzzles(totalPuzzles);
            setPuzzles( data );
        }
        if( totalPuzzles !== null && gameSelect === 'acertijos' && loading ) getPuzzlesData();
        
    }, [ loading ] );

    return (
        <PuzzlesContext.Provider
            value={{
                puzzles,
                totalPuzzles,
                setTotalPuzzles
            }}
        >
            { children }
        </PuzzlesContext.Provider>
    );
}
 
export default PuzzlesProvider;