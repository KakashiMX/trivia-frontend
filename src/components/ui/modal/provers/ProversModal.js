import React, { useContext } from 'react';

// icono 
import ProverIcon from '../../../../icons/prover.png';

// context
import { ProversContext } from '../../../../context/ProversContext';
import { UIContext } from '../../../../context/UIContext';

const ProversModal = () => {

    // accediendo al context de UIContext
    const { setActualModal, setLoading, setIsOpenModal } = useContext( UIContext );
    // accediendo al context de ProversContext
    const { setTotalProvers } = useContext( ProversContext );

    // función para iniciar el juego
    const handleClick = () => {
        setActualModal(0);
        setIsOpenModal( false );
        setLoading( true );
    }

    return (
        <div className="modal__background modal__background--show fadein">
            <div className="modal">
                <div className="modal__header">
                    <img src={ ProverIcon } alt="icono de busqueda" className="modal__icon" />
                    <p><b>Refranes:</b> El juego te proporcionará tres o menos palabras clave para poder adivinar el refrán o dicho</p>
                </div>

                <div className="modal__body">
                    <p><b>A tener en cuenta: </b>Las respuestas no llevan signos de puntuación, pero deberán estar bien escritas, recuerda tildar las palabras</p>
                </div>

                <form className="form">
                    <div className="form__group">
                        <label 
                            className="form__label">¿Cuántos refranes puedes adivinar?</label>
                        <input 
                            type="number" 
                            className="form__input"
                            onChange={ e => setTotalProvers( e.target.value ) }
                        />
                    </div>
                </form>
                <button 
                    className='button'
                    onClick={ handleClick }
                >Siguiente</button>
            </div>
        </div>
    );
}
 
export default ProversModal;