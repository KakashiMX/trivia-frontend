import React, { useContext } from 'react';

// context
import { UIContext } from '../../../context/UIContext';
import { GamesContext } from '../../../context/GamesContext';

const GameModal = () => {

    // accediendo al context
    const { setActualModal } = useContext( UIContext );
    const { listGames, setGameSelect } = useContext( GamesContext );

    const handleClick = () => {
        setActualModal(1);
    }
    return (
        <>
            <div className="content__header">Bienvenido</div>
            <div className="content">
                <p>Esta es una implementación de mi RESTAPI "Trivia y más"</p>
                <p>Puedes encontrar más información aquí</p>
                
                
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
                    className='button message__button'
                    onClick={ handleClick }
                >Siguiente</button>
            </div>
        </>
    );
}
 
export default GameModal;