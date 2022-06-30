import React, { useContext, useRef, useState } from 'react';

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

    // estado de paginación para los acertijos
    const [numberPuzzle, setNumberPuzzle] = useState(0);

    // estado para mostrar botón de siguiente acertijo
    const [nextPuzzle, setNextPuzzle] = useState(false);

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
            inputRef.current.classList.add('game__input--correct');

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
                    </div>

                    <div className="game__buttons">
                        {/* En la respuesta del backend, hay acertijos que pueden tener pistas, si las hay, entonces muestra un botón */}
                        { puzzles[ numberPuzzle ].suggestion !== undefined ? 
                            <button className="button game__button">Ver pista</button>
                        : null}

                        <button 
                            className="button game__button"
                            onClick={ handleVerify }
                            disabled={ nextPuzzle }
                        >Comprobar respuesta</button>

                        {/* Si el estado de nextPuzzle es verdadero, quiere decir que la respuesta del usuario ya se verificó y muestra un botón para la solución correcta */}
                        { nextPuzzle ? 
                            <button 
                                className="button game__button"
                            >Ver solución</button>
                            : null
                        }
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
        </>
    );
}
 
export default PuzzlesContent;