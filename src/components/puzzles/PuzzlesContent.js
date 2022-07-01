import React, { useContext, useRef, useState } from 'react';

// componentes
import ModalResult from '../ui/modal/games/ModalResult';
import PuzzlesHelpModal from '../ui/modal/puzzles/PuzzlesHelpModal';

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
    // referencia para mostrar la respuesta o pista
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
        { puzzles[numberPuzzle] !== undefined ? 
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
                    
                    <button 
                        className="button button--gray"
                        onClick={ handleVerify }
                        disabled={ nextPuzzle }
                    >Comprobar respuesta</button>
                    
                    { nextPuzzle ? 
                        <button 
                            className="button"
                            onClick={ handleNextPuzzle }
                        >Siguiente Acertijo</button> 
                        : null
                    }

                </div>
                
                <PuzzlesHelpModal 
                    helpRef={ helpRef }
                    help={ help }
                    setHelp= { setHelp }
                    numberPuzzle={ numberPuzzle }
                />
            </>
        : 
            <ModalResult />
        }
        
        </>
    );
}
 
export default PuzzlesContent;