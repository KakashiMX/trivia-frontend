import React, { useContext } from 'react';

// context
import { QuizContext } from '../../../../context/QuizContext';
import { UIContext } from '../../../../context/UIContext';

// icono
import QuizIcon from '../../../../icons/quiz.png'

const QuizModal = () => {

    // accediendo al context de UIContext
    const { setActualModal, setLoading, setIsOpenModal } = useContext( UIContext );
    // accediendo al context de QuizContext
    const { triviaValues, setTriviaValues, categories } = useContext( QuizContext );
    const { category, total } = triviaValues;

    // función para capturar evento del formulario
    const handleInputChange = e => {
        setTriviaValues({
            ...triviaValues,
            [ e.target.name ] : e.target.value
        });
    }

    // función para cargar el juego
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
                        src={ QuizIcon } 
                        alt="icono de trivia" 
                        className='modal__icon'
                    />
                    <p><b>Trivia:</b> Cuántas respuestas correctas puedes obtener. Elige entre Películas, Freestyle, Fútbol y más. Actualmente cada categoría cuenta con 50 preguntas</p>
                </div>

                <div className="modal__body">
                    <form action="" className="form">

                        <div className="form__group">
                            <label htmlFor="" className="form__label">Elige una categoria: </label>
                            <select
                                className='form__input'
                                name='category'
                                value={ category }
                                onChange={ handleInputChange }
                            >
                            { categories !== null ? 
                                categories.map( category => 
                                    <option key={ category.nameValue }value={ category.nameValue }>{ category.name}</option>
                                )
                            : null}
                            </select>
                        </div>

                        <div className="form__group">
                        <label htmlFor="" className="form__label">Total de preguntas:</label>
                        <input 
                            type="number" 
                            className="form__input"
                            name='total'
                            value={ total }
                            onChange={ handleInputChange }
                        />
                    </div>

                    </form>
                    <button 
                        className='button'
                        onClick={ handleClick }
                    >Siguiente</button>
                </div>
            </div>
        </div>
    );
}
 
export default QuizModal;

/* 
    Este componente de modal, se muestra despues de elegir el modo de juego "trivia"
    muestra información acerca del juego así como un formulario para elegir la categoria y el total de preguntas a resolver
*/