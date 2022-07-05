import React, { useContext } from 'react';

// context
import { ProversContext } from '../../../../context/ProversContext';

// iconos
import QuestionIcon from '../../../../icons/question.png';

const ProversHelpModal = ({ showModalRef, numberProver, helpModal, setHelpModal }) => {

    // accediendo al context de ProversContext
    const{ provers } = useContext( ProversContext );

    // función para cerrar modal de ayuda
    const handleCloseModal = () => {
        setHelpModal( null );
        showModalRef.current.classList.remove('modal__background--show');
    }
    return (
        <div 
            className="modal__background fadein"
            ref={ showModalRef }
        >
            <div className="modal">
                <div className="modal__head">
                    <img 
                        src={ QuestionIcon } 
                        alt="signo de interrogación" 
                        className='modal__icon'
                    />
                    { helpModal === 0 ? 
                        <h2>Solución</h2>
                        :
                        <h2>Significado</h2>
                    }
                    
                </div>

                <div className="modal__body">
                    { helpModal === 0 ?
                        <p>{ provers[ numberProver ].correct.toUpperCase() } </p>
                        :
                        <p>{ provers[ numberProver ].meaning } </p>
                    }
                    
                    <button 
                        className='button'
                        onClick={ handleCloseModal }
                    >OK</button>
                </div>
            </div>
        </div>
    );
}
 
export default ProversHelpModal;