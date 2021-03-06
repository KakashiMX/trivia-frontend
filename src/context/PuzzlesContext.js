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
    const { loading, setLoading } = useContext( UIContext );

    // estado para consultar la DB
    const [puzzles, setPuzzles] = useState(null);

    // estado para formulario
    const [totalPuzzles, setTotalPuzzles] = useState(null);

    // estado para respuesta dada por el usuario del acertijo
    const [response, setResponse] = useState("");

    useEffect( () => {
        const getPuzzlesData = async () => {
            const data = await getPuzzles(totalPuzzles);
            setPuzzles( data );
        }
        if( totalPuzzles !== null && gameSelect === 'acertijos' && loading ) getPuzzlesData();
        
        setTimeout(() => {
            setLoading( false )
        }, 3000);
        // eslint-disable-next-line
    }, [ loading ] );

    return (
        <PuzzlesContext.Provider
            value={{
                puzzles,
                totalPuzzles,
                setTotalPuzzles,
                response, setResponse
            }}
        >
            { children }
        </PuzzlesContext.Provider>
    );
}
 
export default PuzzlesProvider;