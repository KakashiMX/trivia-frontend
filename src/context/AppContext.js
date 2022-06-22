import React, { createContext, useEffect, useState} from 'react';

// helpers
import { getCategories } from '../helper/getCategories';

// creación del context
export const AppContext = createContext();

const AppProvider = props => {

    // state para ocultar el mensaje de bienvenida
  const [showMessage, setShowMessage] = useState(true);

  // state para mostrar u ocultar formulario de preguntas
  const [questions, setQuestions] = useState(false);

  // state para categorias
  const [categories, setCategories] = useState(null);

  useEffect( () => {

    const getCategoriesData = async () => {
        const data = await getCategories();
        setCategories( data );
    }

    getCategoriesData();
  }, []);

    // valores para acceder por useContext
    return (
        <AppContext.Provider
            value={{
                showMessage,
                setShowMessage,
                questions,
                setQuestions,
                categories
            }}
        >
            { props.children }
        </AppContext.Provider>
    );
}

export default AppProvider;