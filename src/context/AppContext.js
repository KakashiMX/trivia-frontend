import React, { createContext, useState} from 'react';

// axios
import clientAxios from '../axios/axios';

// creación del context
export const AppContext = createContext();

const AppProvider = props => {

    // state para ocultar el mensaje de bienvenida
  const [showMessage, setShowMessage] = useState(true);

  // state para mostrar u ocultar formulario de preguntas
  const [questions, setQuestions] = useState(false);

    // valores para acceder por useContext
    return (
        <AppContext.Provider
            value={{
                showMessage: showMessage,
                setShowMessage: setShowMessage,
                questions: questions,
                setQuestions
            }}
        >
            { props.children }
        </AppContext.Provider>
    );
}

export default AppProvider;