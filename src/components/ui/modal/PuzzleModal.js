import React, { useContext } from 'react';

// context
import { UIContext } from '../../../context/UIContext';
import { PuzzlesContext } from '../../../context/PuzzlesContext';

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
        <>
            <div className="content__header">Modo de Juego</div>
            <div className="content">
                <p><b>Acertijos:</b> Resuelve el acertijo planteado, puedes obtener una pista o simplemente mostrar la solución</p>
                

                <div className="form__group">
                    <label htmlFor="" className="form__label">¿Cuántos puedes resolver?</label>
                    <input 
                        type="number" 
                        className="form__input"
                        onChange={ e => setTotalPuzzles( e.target.value ) }
                    />
                </div>

                <button 
                    className='button message__button'
                    onClick={ handleClick }
                >Siguiente</button>
            </div>
        </>
    );
}
 
export default PuzzleModal;