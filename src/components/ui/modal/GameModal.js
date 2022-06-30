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
                <p><b>Modos de juego</b></p>
                <p><b>Acertijos:</b> Resuelve el acertijo planteado, puedes obtener una pista o simplemente mostrar la solución</p>

                <p><b>Trivia:</b> Cuántas respuestas correctas puedes obtener. Elige entre Películas, Freestyle, Fútbol y más</p>

                <p><b>Refranes:</b> Completa el refran o dicho planteado</p>

                
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