import React, { useContext } from 'react'

// context
import { AppContext } from '../../context/AppContext';

const  WelcomeMessage= () => {

    // accediendo al context
    const { setShowMessage, setQuestions } = useContext( AppContext );

    // función para ocultar el mensaje de bienvenida
    const handleMessage = () => {
        setShowMessage(false);
        setQuestions( true );
    }

    return (
        <div 
            className='message__container'
        >
            <div className='message'>
                <div 
                    className='message__header'
                >Bienvenido a este juego de Trivia</div>

                <div 
                    className='message__body'
                >
                    <p>Esta es una implementación de mi RestAPI "Trivia"</p>
                    <p>Hay varias categorias para seleccionar, como por ejemplo: Cine, Videojuegos, Freestyle</p>
                    <p>Cada categoria cuenta actualmente con 50 preguntas</p>

                    <button 
                        className='button message__button'
                        onClick={ handleMessage }
                    >Iniciar Trivia</button>

                </div>

            </div>
        </div>
    );
}
 
export default WelcomeMessage;