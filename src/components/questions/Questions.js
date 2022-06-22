import React, { useContext, useRef, useState } from 'react'

// context
import { AppContext } from '../../context/AppContext';

const Questions = () => {
    const { dataQuestions, formValues } = useContext( AppContext );

    const { category, total } = formValues;

    const optionsRef = useRef();
    // state para hacer una paginación con las preguntas
    const [pagination, setPagination] = useState(0);

    // state para ver cuantas respuestas correctas o incorrectas tiene el usuario
    const [result, setResult] = useState({
        corrects: 0,
        incorrects: 0
    });
    const { corrects, incorrects } = result;

    // state para mostrar botón de siguiente pregunta
    const [showNext, setShowNext] = useState(false);

    // función para actualizar la respuesta seleccionada
    const handleSelect = e => {

        // elemento seleccionado
        const element = e.target;

        // si el contenido del elemento seleccionado es igual a la respuesta correcta
            // entonces se actualiza el state de respuestas correctas
        if( element.textContent === dataQuestions[pagination].correct){
                // se agrega la clase 
            element.classList.add('question__correct');
            setResult({
                ...result,
                corrects: corrects + 1 
            });

        // si el contenido del elemento seleccionado no es igual a la respuesta correcta
            // entonces se actualiza el state de respuestas incorrectas
        }else {
                // se agrega la clase
            element.classList.add('question__incorrect');
            setResult({
                ...result,
                incorrects: incorrects + 1 
            });
        }
        // se actualiza el state del botón para mostrarlo
        setShowNext( true );
    }

    // función para pasar a la siguiente pregunta
    const handleNextQuestion = () => {
        setPagination( pagination + 1 );
        setShowNext( false );
            // obtenemos las opciones
        const options = optionsRef.current.children;
            // convertimos las opciones a arreglo y después eliminamos la clase si es que la tiene
        Array.from(options).map( option => option.className.includes('question__correct') ? option.classList.remove('question__correct') : option.classList.remove('question__incorrect'));
    }

    return (
        <div className='questions__container'>
            
            <div className="question">
                <div className='question__header'>
                    <p className='question__header--title'>Categoria { category } - { pagination+1 }/{total}</p>

                    <p className='question__header--question'>{ dataQuestions[pagination].question}</p>
                </div>

                <div 
                    className='question__options'
                    ref={ optionsRef }
                >
                    { dataQuestions[pagination].options.map( option => 
                        <button
                            className="question__option"
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