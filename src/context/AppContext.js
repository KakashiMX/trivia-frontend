import React, { createContext, useEffect, useState} from 'react';

// helpers
import { getCategories } from '../helper/getCategories';
import { getQuestions } from '../helper/getQuestions';

// creación del context
export const AppContext = createContext();

const AppProvider = props => {

  // state para ocultar o mostrar las ventanas emergente
  const [showComponent, setShowComponent] = useState({
    showwelcomemessage: true,
    showform: false,
    showloadinmessage: false
  });

  // state para categorias
  const [categories, setCategories] = useState(null);

  // state para el formualario
  const [formValues, setFormValues] = useState({
    category: 'aleatoria',
    total: '',
    });

    const { category, total } = formValues;

  // state para mostrar un loading
  const [loading, setLoading] = useState(false);

  // state para las preguntas de la DB
  const [dataQuestions, setDataQuestions] = useState(null);

  // función para obtener las preguntas
  const getQuestionsData = async () => {
    const data = await getQuestions( category, total );
    setDataQuestions( data );
  }

  useEffect( () => {

    const getCategoriesData = async () => {
        const data = await getCategories();
        setCategories( data );
    }

    getCategoriesData();

    if( loading ) getQuestionsData();

    setTimeout(() => {
        setLoading( false );
      }, 3000);

      // eslint-disable-next-line
  }, [ loading ]);

    // valores para acceder por useContext
    return (
        <AppContext.Provider
            value={{
                showComponent, 
                setShowComponent,
                categories,
                formValues, 
                setFormValues,
                loading,
                setLoading,
                dataQuestions
            }}
        >
            { props.children }
        </AppContext.Provider>
    );
}

export default AppProvider;