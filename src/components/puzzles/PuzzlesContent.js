import React, { useContext, useRef, useState } from 'react';
import QuestionIcon from '../../icons/question.png';

// context
import { PuzzlesContext } from '../../context/PuzzlesContext';
import { GamesContext } from '../../context/GamesContext';

const PuzzlesContent = () => {

    // accediendo al context
    const { puzzles, totalPuzzles, response, setResponse } = useContext( PuzzlesContext );
    const { result, setResult } = useContext( GamesContext );
    const { correct, incorrect } = result;

    // referencia al input para agregar o eliminar clase
    const inputRef = useRef();
    const helpRef = useRef();

    // estado de paginación para los acertijos
    const [numberPuzzle, setNumberPuzzle] = useState(0);

    // estado para mostrar botón de siguiente acertijo
    const [nextPuzzle, setNextPuzzle] = useState(false);

    // estado para mostrar la respuesta o pista
    const [help, setHelp] = useState(null);

    // función para obtener pista o respuesta
    const handleShowHelp =(number) => {
        setHelp( number );
        helpRef.current.classList.add('modal__background--show');
    }

    // función para cerrar la modal de ayuda
    const handleCloseModal = () => {
        setHelp( null );
        helpRef.current.classList.remove('modal__background--show');
    }

    // función para verificar la respuesta del usuario
    const handleVerify = () => {

        // verifica que la respuesta se incluya en las respuestas correctas del acertijo
        const isCorrect = puzzles[ numberPuzzle ].correct.includes( response.toLowerCase() );

        // si es correct
        if( isCorrect ) {
            // aumenta el resultado de correcto en 1
            setResult({
                ...result,
                correct: correct + 1
            });
        
            // agrega la clase al input de correcto
            inputRef.current.classList.add('game__input--correct', 'fadein');

        }else{
            // aumenta el  resultado de incorrecto en 1
            setResult({
                ...result,
                incorrect: incorrect + 1
            });

            // agrega la clase al input de incorrecto
            inputRef.current.classList.add('game__input--incorrect');
        }

        // una vez verificada la respuesta, muestra el botón de siguiente
        setNextPuzzle( true );
    }

    // función para pasar a al siguiente acertijo
    const handleNextPuzzle = () => {
        // aumenta el contador para pasar al siguiente acertijo
        setNumberPuzzle( numberPuzzle + 1 );
        // oculta el botón de siguiente acertijo hasta que el usuario compruebe su respuesta
        setNextPuzzle( false );
        // como ya respondió el usuario y su respuesta ya fue verificada, entonces vuelve a resetear el state
        setResponse("");

        // verifica si tiene la case de correcto
            // si la tiene se la quita
            // si no la tiene,entonces tiene la clase de incorrecto y la elimina
        inputRef.current.className.includes('game__input--correct') ? inputRef.current.classList.remove('game__input--correct') : inputRef.current.classList.remove('game__input--incorrect') 
    }

    return (
        <>
        { puzzles[numberPuzzle] !== null ? 
            <>
                <div className="game__header">
                    <div className="game__header--title">
                        <span>Acertijo: { numberPuzzle +1 } / {     totalPuzzles }</span>
                    </div>

                    <p className="game__header--phrase">{ puzzles[ numberPuzzle ].question}</p>
                </div>

                <div className="game__body">
                    <div className="form__group game__group">
                        <input 
                            type="text" 
                            ref={ inputRef }
                            disabled={ nextPuzzle }
                            value={ response }
                            className="form__input game__input" 
                            placeholder='Ingresa tu respuesta'
                            onChange={ e => setResponse( e.target.value ) }
                        />
                        <div className="game__help">
                            {/* En la respuesta del backend, hay acertijos que pueden tener pistas, si las hay, entonces muestra un botón */}
                            { puzzles[ numberPuzzle ].suggestion !== undefined ? 
                                <small
                                    onClick={ () => handleShowHelp(0)}
                                >Pista <i className="fa-solid fa-shoe-prints"></i></small>
                            : null}

                            <small
                                onClick={ () => handleShowHelp(1)}
                            >Solución <i className="fa-solid fa-circle-question"></i></small>
                        </div>
                    </div>
                    
                    

                    <div className="game__buttons">
                        <button 
                            className="button game__button"
                            onClick={ handleVerify }
                            disabled={ nextPuzzle }
                        >Comprobar respuesta</button>
                    </div>

                    <div>
                        { nextPuzzle ? 
                            <button 
                                className="button"
                                onClick={ handleNextPuzzle }
                            >Siguiente Pregunta</button>
                            : null
                        }
                    </div>
                </div>
            </>
        : null}

            <div 
                className='modal__background fadein'
                ref={ helpRef }
            >
                <div 
                    className='modal'
                >
                    <div className="modal__head">
                        <img 
                            src={ QuestionIcon }
                            alt="signo de interrogación" 
                            className='modal__icon'
                        />
                        { help === 0 ? 
                            <>
                                <h2>¡Pista del acertijo!</h2>
                            </>
                        :
                            <>
                                <h2>¡Solución al acertijo!</h2>
                                <h3>La respuesta es: </h3>
                            </>
                        }
                    </div>
                    
                    <div className="modal__body">
                        <p>{ 
                        help === 0 ? puzzles[ numberPuzzle ].suggestion : puzzles[ numberPuzzle ].answer
                        }</p>
                    </div>

                    <div className="modal__buttons">
                        <button 
                            className='modal__button modal__button--confirm'
                            onClick={ handleCloseModal }
                        >OK</button>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default PuzzlesContent;