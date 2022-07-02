import React, { createContext, useContext, useState } from 'react';

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