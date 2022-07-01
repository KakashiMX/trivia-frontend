import React, { useContext } from 'react';

// context
import { PuzzlesContext } from '../../../../context/PuzzlesContext';

// iconos
import QuestionIcon from '../../../../icons/question.png';

const PuzzlesHelpModal = ({ help, setHelp, helpRef, numberPuzzle }) => {

    // accediendo al context PuzzlesContext
    const { puzzles } = useContext( PuzzlesContext );

    // función para cerrar la modal de ayuda
    const handleCloseModal = () => {
        setHelp( null );
        helpRef.current.classList.remove('modal__background--show');
    }

    return (
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

                    <button 
                        className='button'
                        onClick={ handleCloseModal }
                    >OK</button>
                </div>
            </div>
    );
}
 
export default PuzzlesHelpModal;

/* 
    Este es un componente de tipo modal, para el componente PuzzlesContent.js
    En este componente se mostrará la ayuda para el acertijo o la respuesta del mismo
*/