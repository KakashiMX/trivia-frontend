import React, { useContext, useState } from 'react'

// context
import { AppContext } from '../../context/AppContext';

const Questions = () => {
    const { dataQuestions, formValues } = useContext( AppContext );

    const { category, total } = formValues;

    // state para hacer una paginación con las preguntas
    const [pagination, setPagination] = useState(0);

    const [result, setResult] = useState({
        corrects: 0,
        incorrects: 0
    });

    const [showNext, setShowNext] = useState(false);

    // función para actualizar la respuesta seleccionada
    const handleSelect = e => {
        if( e.target.textContent === dataQuestions[pagination].correct){
            e.target.classList.add('question__correct');
            setResult({
                ...result,
                corrects: ( result.corrects + 1 )
            });

        }else {
            e.target.classList.add('question__incorrect');
            setResult({
                ...result,
                incorrects: ( result.corrects + 1 )
            });
        }

        setShowNext( true );
    }

    // función para pasar a la siguiente pregunta
    const handleNextQuestion = () => {
        console.log('Siguiente pregunta');
    }
    return (
        <div className='questions__container'>
            
            <div className="question">
                <div className='question__header'>
                    <p className='question__header--title'>Categoria { category } - { pagination+1 }/{total}</p>

                    <p className='question__header--question'>{ dataQuestions[pagination].question}</p>
                </div>

                <div className='question__options'>
                    { dataQuestions[pagination].options.map( option => 
                        <button
                            className='question__option'
                            onClick={ handleSelect }
                            disabled={ showNext }
                        >
                            {option}
                        </button>
                    )}
                </div>
                { showNext ? 
                    <button 
                        className='button question__next'
                        onClick={ handleNextQuestion }
                    >Siguiente Pregunta</button>
                :null
                }
            </div>
        </div>
    );
}
 
export default Questions;