import React, { createContext, useContext, useEffect, useState } from 'react';
import { getProvers } from '../helper/provers/provers';

// context
import { GamesContext } from './GamesContext';
import { UIContext } from './UIContext';

// creación del context
export const ProversContext = createContext();

const ProversProvider = ({ children }) => {

    // accediendo al context de GamesContext
    const { gameSelect } = useContext( GamesContext );

    // accediendo al context de UIContext
    const { loading, setLoading } = useContext( UIContext );

    // estado para guardar los refranes obtenidos de la DB
    const [provers, setProvers] = useState(null);

    // estado del formulario de refranes
    const [totalProvers, setTotalProvers] = useState(null);

    // estado para respuesta dada por el usuario del refran o dicho
    const [responseProver, setResponseProver] = useState("");

    useEffect( () => {
        const getProversData = async () => {
            const data = await getProvers( totalProvers );
            setProvers( data );
        }
        if( totalProvers !== null && gameSelect === 'refranes&dichos' && loading ) getProversData();

        setTimeout(() => {
            setLoading( false );
        }, 3000);
        // eslint-disable-next-line
    }, [ loading ]);
    return (
        <ProversContext.Provider
            value={{
                provers,
                totalProvers, setTotalProvers,
                responseProver, setResponseProver
            }}
        >
            { children }
        </ProversContext.Provider>
    );
}
 
export default ProversProvider;

/* 
    En este context se manejaran estados del modo de juego "refranes y dichos"
*/