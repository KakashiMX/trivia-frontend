import React, { useContext } from 'react';

// icono
import CompleteIcon from '../../../../icons/complete.png';

// context
import { GamesContext } from '../../../../context/GamesContext';

const ModalResult = () => {

    // accediendo al context de GamesContext, PuzzlesContext, QuizContext
    const { result, gameSelect } = useContext( GamesContext );

    // función para juego nuevo
    const handleNewGame = () => {
        window.location.reload();
    }

    return (
        <div className="modal__background modal__background--show fadein">
            <div className="modal">
                <div className="modal__header">
                    <img 
                        src={ CompleteIcon } 
                        alt="icono de completado" 
                        className='modal__icon'
                    />
                    <h2>Resultados</h2>
                </div>

                <div className="modal__body">
                    <p className='table__head'>{ gameSelect.toUpperCase() }</p>
                    <table className="body__table">
                        <thead>
                            <tr>
                                <th className='table__head--row'>Correctas</th>
                                <th className='table__head--row'>Incorrectas</th>
                            </tr>
                        </thead>
                        
                        <tbody>

                            <tr className='table__row'>
                                <td className='row__body'>{ result.correct}</td>
                                <td className='row__body'>{ result.incorrect}</td>
                            </tr>
                        </tbody>
                    </table>

                    <button 
                        className="button button--dark"
                        onClick={ handleNewGame }
                    >Juego nuevo</button>
                </div>
            </div>
        </div>
    );
}
 
export default ModalResult;

/* 
        En este componente se mostrará el resultado al termino de cada juego
        se mostrarán las respuestas correctas e incorrectas
        así como un botón para empezar de nuevo
*/