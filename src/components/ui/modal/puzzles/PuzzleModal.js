import React, { useContext } from 'react';

// icono 
import PuzzleIcon from '../../../../icons/puzzle.png';

// context
import { UIContext } from '../../../../context/UIContext';
import { PuzzlesContext } from '../../../../context/PuzzlesContext';

const PuzzleModal = () => {

    // accediendo al context de UIContext
    const { setActualModal, setLoading, setIsOpenModal } = useContext( UIContext );
    const { setTotalPuzzles } = useContext( PuzzlesContext );

    const handleClick = () => {
        setActualModal(0);
        setIsOpenModal( false );
        setLoading( true );
    }

    return (
        
        <div className="modal__background modal__background--show fadein">
            <div className="modal">
                <div className="modal__header">
                    <img 
                        src={ PuzzleIcon } 
                        alt="icono de información" 
                        className='modal__icon'
                    />
                    <p><b>Acertijos:</b> Podrás resolver el enunciado planteado, hay acertijos que contienen pistas o simplemente puedes mostrar la solución</p>
                </div>
                
                <div className="modal__body">
                    <p><b>A tener en cuenta:</b> Las respuestas no deben tener faltas de ortografía, recuerda tildar las palabras </p>
                    <div className="form__group">
                        <label htmlFor="" className="form__label">¿Cuántos acertijos puedes resolver?</label>
                        <input 
                            type="number" 
                            className="form__input"
                            onChange={ e => setTotalPuzzles( e.target.value ) }
                        />
                    </div>

                    <button 
                        className='button'
                        onClick={ handleClick }
                    >Siguiente</button>

                </div>

            </div>

        </div>
    );
}
 
export default PuzzleModal;

/* 
    Este componente de modal, se muestra despues de elegir el modo de juego "acertijos"
    muestra información acerca del juego así como un formulario para el total de acertijos a resolver
*/