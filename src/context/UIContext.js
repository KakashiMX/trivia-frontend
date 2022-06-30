import React, { createContext, useState } from 'react';


// creacion del context
export const UIContext = createContext();

const UIProvider = ({ children }) => {

    // estado para mostrar un cargando
    const [loading, setLoading] = useState(false);

    // estado para mostrar la modal
    const [isOpenModal, setIsOpenModal] = useState(true);

    // estado para mostrar componente de modal
    const [actualModal, setActualModal] = useState(0);

    return (
        <UIContext.Provider
            value={{
                loading,
                setLoading,
                isOpenModal, setIsOpenModal,
                actualModal, 
                setActualModal
            }}
        >
            { children }
        </UIContext.Provider>
    );
}
 
export default UIProvider;

/* 
    En este context se manejaran estados de componetes de interfaz, es decir
    estados para mostrar u ocultar una modal, 
    estados para mostrar un cargando
*/