import React, { createContext, useContext, useEffect, useState} from 'react';

//context
import { UIContext } from './UIContext';

// helpers
import { getCategories } from '../helper/getCategories';
import { getQuestions } from '../helper/getQuestions';

// creación del context
export const QuizContext = createContext();

const QuizProvider = props => {

  // uso de context UI
  // state para mostrar un loading
  const { loading, setLoading } = useContext( UIContext );

  // state para categorias
  const [categories, setCategories] = useState(null);

  // state para el formualario de QuizModal.js
  const [triviaValues, setTriviaValues] = useState({
    category: 'aleatoria',
    total: ''
  });

    const { category, total } = triviaValues;

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
      }, 4000);

      // eslint-disable-next-line
  }, [ loading ]);

    // valores para acceder por useContext
    return (
        <QuizContext.Provider
            value={{
                categories,
                triviaValues, setTriviaValues,
                dataQuestions,
                setDataQuestions
            }}
        >
            { props.children }
        </QuizContext.Provider>
    );
}

export default QuizProvider;