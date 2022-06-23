import React, { useContext } from 'react'

// context
import { AppContext } from '../../context/AppContext';

const  WelcomeMessage= () => {

    // accediendo al context
    const { showComponent, setShowComponent } = useContext( AppContext );

    // función para ocultar el mensaje de bienvenida
    const handleMessage = () => {
        setShowComponent({
            ...showComponent,
            showwelcomemessage: false,
            showform: true
        });
    }

    return (
        <div 
            className='container'
        >
            <div className='content__header'>Bienvenido</div>
            <div className='content'>

                <div className='message__body'>
                    <p>Esta es una implementación de mi RestAPI "Trivia"</p>
                    <p>Hay varias categorias para seleccionar, como por ejemplo: Cine, Videojuegos, Freestyle</p>
                    <p>Cada categoria cuenta actualmente con 50 preguntas</p>

                    <button 
                        className='button message__button'
                        onClick={ handleMessage }
                    >Siguiente</button>

                </div>

            </div>
        </div>
    );
}
 
export default WelcomeMessage;