import React, { useContext } from 'react';

// context
import { UIContext } from '../../../../context/UIContext';
import { GamesContext } from '../../../../context/GamesContext';

// icono
import InfoIcon from '../../../icons/information.png';

const GameModal = () => {

    // accediendo al context
    const { setActualModal } = useContext( UIContext );
    const { listGames, setGameSelect } = useContext( GamesContext );

    const handleClick = () => {
        setActualModal(1);
    }
    return (
        <div className="modal__background modal__background--show fadein">
            <div className="modal">
                <div className="modal__header">
                    <img 
                        src={ InfoIcon } 
                        alt="icono de información" 
                        className='modal__icon'
                    />
                    <p>Esta es una implementación de mi RESTAPI "Trivia y más"</p>
                    <p>Puedes encontrar más información aquí</p>
                </div>
                
                
                <div className="modal__body">
                    <div className="form__group">
                        <label htmlFor="" className="form__label">Selecciona un modo de juego:</label>
                        <select 
                            className="form__input"
                            onChange={ e => setGameSelect( e.target.value )}
                        >
                            <option value=""></option>
                            { listGames ? 
                                listGames.map( game => 
                                    <option key={ game.nameValue} value={ game.nameValue }>{ game.name }</option>
                                )
                            : null}
                        </select>
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
 
export default GameModal;

/*
    En este componente de modal se muestra el mensaje de bienvenida, así como un select para elegir un juego disponible
*/