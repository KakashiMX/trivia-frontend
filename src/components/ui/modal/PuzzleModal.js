import React, { useContext } from 'react';

// context
import { UIContext } from '../../../context/UIContext';
import { PuzzlesContext } from '../../../context/PuzzlesContext';

const PuzzleModal = () => {

    // accediendo al context de UIContext
    const { setActualModal, setLoading } = useContext( UIContext );
    const { setTotalPuzzles } = useContext( PuzzlesContext );

    const handleClick = () => {
        setActualModal(2);
        setLoading( true );
    }

    return (
        <>
            <div className="content__header">Acertijos</div>
            <div className="content">
                <p><b>Antes de comenzar</b></p>
                <p>Recuerda que puedes obtener una pista o simplemente mostrar la solución al acertijo</p>
                <div className="form__group">
                    <label htmlFor="" className="form__label">Elije el total de acertijos a resolver</label>
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