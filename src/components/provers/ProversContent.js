import React, { useContext, useRef, useState } from 'react';
import { GamesContext } from '../../context/GamesContext';

// context
import { ProversContext } from '../../context/ProversContext';
import ModalResult from '../ui/modal/games/ModalResult';
import ProversHelpModal from '../ui/modal/provers/ProversHelpModal';

const ProversContent = () => {

    // accediendo al context de ProversContext
    const { provers, totalProvers, responseProver, setResponseProver } = useContext( ProversContext );

    // accediendo al context de GamesContext
    const { result, setResult } = useContext( GamesContext );
    const { correct, incorrect } = result;

    // referencia para mostrar la modal de respuesta o significado
    const showModalRef = useRef();
    // referencia al input para cambiar su clase de acuerdo a si la respuesta fue correcta o incorrecta
    const inputResRef = useRef();

    // estado de paginación para los refranes y dichos
    const [numberProver, setNumberProver] = useState(0);

    // estado para mostrar la respuesta correcta o significado
    const [helpModal, setHelpModal] = useState(null);

    // estado para mostrar botón de siguiente refrán
    const [showNextProver, setShowNextProver] = useState(false);

    // función para mostrar modal de respuesta o significado
    const handleShowModal = ( numberModal ) => {
        setHelpModal( numberModal );
        showModalRef.current.classList.add('modal__background--show');
    }

    // función para verificar la respuesta del usuario con la de la db
    const handleVerify = () => {

        // verifica que la respuesta dada por el usuario sea igual a la de la db
        if( responseProver.toLowerCase().trim() === provers[numberProver].correct){
            // si es correcto, aumenta el resultado de correcto en 1
            setResult({
                ...result,
                correct: correct + 1
            });

            // agrega la clase "correct" al input
            inputResRef.current.classList.add('game__input--correct');

        }else {
            // si la respuesta del usuario es incorrecta, aumenta el resulta de incorrect en 1
            setResult({
                ...result,
                incorrect: incorrect + 1
            });

            // agrega la clase "incorrect" al input
            inputResRef.current.classList.add('game__input--incorrect');
        }

        // una vez verificada la respuesta, muestra el botón de siguiente
        setShowNextProver( true );
    }

    // función para pasar al siguiente refrán
    const handleNextProver = () => {
        // cada que se pasa a un siguiente refrán aumenta el contador
        setNumberProver( numberProver + 1 );
        // oculta el botón de siguiente refrán
        setShowNextProver( false );
        // una vez verificada la respuesta del usuario, se resetea el state
        setResponseProver("");

        // se elimina la clase de "correct" o "incorrect" del input
            // verifica qué clase tiene y la elimina
        inputResRef.current.className.includes('game__input--correct') ?
            inputResRef.current.classList.remove('game__input--correct')
        :
            inputResRef.current.classList.remove('game__input--incorrect')
    }

    return (
        <>
        {/* Si provers[numberProver] === undefined, quiere decir que ya no hay más refranes para adivinar y pasa a mostrar los resultados del usuario */}
            { provers[ numberProver ] !== undefined ?
                <>
                    <div className="game__header">
                        <div className="game__header--title">
                            <span>Refran o acertijo: { numberProver + 1 } / { totalProvers }</span>
                        </div>
                        <div className="game__header--words">{ provers[ numberProver].words.map( word => (
                                <span 
                                    className='game__header--word'
                                    key={ word}
                                >{word}</span>
                            
                        )) }</div>
                    </div>

                    <div className="game__body">
                        <form className="form">
                            <div className="form__group">
                                <input 
                                    type="text" 
                                    className="form__input game__input" 
                                    value={ responseProver }
                                    ref={ inputResRef }
                                    disabled={ showNextProver }
                                    placeholder='Adivina el refrán o dicho'
                                    onChange={ e => setResponseProver( e.target.value )}
                                />
                                {/* En la respuesta del backend, también retorna la solución y el significado, entonces muestra un botón */}
                                <div className="game__help">
                                                                    
                                    <small
                                        onClick={() => handleShowModal(0)}
                                    >Respuesta <i className="fa-solid fa-circle-question"></i></small>
                                    <small
                                        onClick={() => handleShowModal(1)}
                                    >Significado <i className="fa-solid fa-book-quran"></i></small>
                                </div>
                            </div>
                        </form>

                        <button 
                            className="button button--gray"
                            onClick={ handleVerify }
                            disabled={ showNextProver }
                        >Comprobar respuesta</button>
                    
                        { showNextProver ? 
                            <button 
                                className="button"
                                onClick={ handleNextProver }
                            >Siguiente Acertijo</button> 
                            : null
                        }
                    </div>

                    <ProversHelpModal 
                        showModalRef={ showModalRef }
                        numberProver={ numberProver }
                        helpModal={ helpModal }
                        setHelpModal={ setHelpModal }
                    />
                </>
                : 
                <ModalResult />
            } 
        </>
    );
}
 
export default ProversContent;