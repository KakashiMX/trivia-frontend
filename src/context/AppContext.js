import React, { createContext} from 'react';

// axios
import clientAxios from '../axios/axios';

// creación del context
export const AppContext = createContext();

const AppProvider = props => {

    // valores para acceder por useContext
    return (
        <AppContext.Provider
            value={{
                hola:"hola"
            }}
        >
            { props.children }
        </AppContext.Provider>
    );
}

export default AppProvider;