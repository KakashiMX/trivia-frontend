import React, { useContext, useRef, useState } from 'react'
import { GamesContext } from '../../context/GamesContext';

// context
import { QuizContext } from '../../context/QuizContext';
import ModalResult from '../ui/modal/games/ModalResult';

const QuizContent = () => {

    // accediendo al context GamesContext
    const { result, setResult } = useContext( GamesContext );
    const { correct, incorrect } = result;

    // accediendo al context QuizContext
    const { dataQuestions, triviaValues } = useContext( QuizContext );
    const { category, total } = triviaValues;

    // referencia para poner o quitar clase de correcto o incorrecto
    const optionsRef = useRef();

    // state para hacer una paginación con las preguntas
    const [pagination, setPagination] = useState(0);

    // state para mostrar botón de siguiente pregunta
    const [nextQuestion, setNextQuestion] = useState(false);

    // función para actualizar la respuesta seleccionada
    const handleSelect = e => {

        // elemento seleccionado
        const element = e.target;

        // si el contenido del elemento seleccionado es igual a la respuesta correcta
            // entonces se actualiza el state de respuestas correctas
        if( element.textContent === dataQuestions[pagination].correct){
                // se agrega la clase 
            element.classList.add('quiz__correct');
            setResult({
                ...result,
                correct: correct + 1 
            });

        // si el contenido del elemento seleccionado no es igual a la respuesta correcta
            // entonces se actualiza el state de respuestas incorrectas
        }else {
                // se agrega la clase
            element.classList.add('quiz__incorrect');
            setResult({
                ...result,
                incorrect: incorrect + 1 
            });
        }
        // se actualiza el state del botón para mostrarlo
        setNextQuestion( true );
    }

    // función para pasar a la siguiente pregunta
    const handleNextQuestion = () => {
        setPagination( pagination + 1 );
        setNextQuestion( false );
            // obtenemos las opciones enlistadas
        const options = optionsRef.current.children;
            // convertimos las opciones a arreglo y después eliminamos la clase correct o incorrect si es que la tiene
        Array.from(options).map( option => option.className.includes('quiz__correct') ? option.classList.remove('quiz__correct') : option.classList.remove('quiz__incorrect'));
    }

    return (
        <>

            {/* Si dataQuestions[pagination] es igual a undefined, quiere decir que no hay más preguntas por delante y el juego habrá terminado */}
            { dataQuestions[pagination] !== undefined ? 
                <>
                    <div className='game__header'>
                        <div className='game__header--title'>
                            <span>Categoria: { category }</span>
                            <span>Pregunta: { pagination+1 }/{total}</span>
                        </div>
                        
                        <p className='game__header--phrase'>{ dataQuestions[pagination].question }</p>

                    </div>

                    <div className='game__body'>
                        <div 
                            className='quiz__options'
                            ref={ optionsRef }
                        >
                            { dataQuestions[pagination].options.map( option => 
                                <button
                                    key={ option }
                                    className="quiz__option"
                                    onClick={ handleSelect }
                                    disabled={ nextQuestion }
                                >
                                    {option}
                                </button>
                            )}
                        </div>

                    </div>
                    { nextQuestion ? 
                        <button 
                            className='button'
                            onClick={ handleNextQuestion }
                        >Siguiente Pregunta</button>
                    :null
                    }
                </>
            :
            // Una vez terminado el juego, se muestran los resultados
                <ModalResult />                
            }
        </>
    );
}
 
export default QuizContent;