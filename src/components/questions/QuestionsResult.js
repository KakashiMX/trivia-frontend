import React, { useContext } from 'react'

// context
import { AppContext } from '../../context/AppContext';

const QuestionsResult = ({ total, result }) => {

    const { showComponent, setShowComponent, setDataQuestions, setFormValues } = useContext(AppContext)

    // función para mostrar de nuevo el formulario
    const handleStart = () => {
        setDataQuestions(null);

        setFormValues({
            category: 'aleatoria',
            total: ''
        });

        setShowComponent({
            ...showComponent,
            showform: true
        });

    }

    // función para cerrar ventana
    const handleOut = () => {
        window.close();
    }

    return (
        <>
            <div className="gameover__header">Resultados</div>
            <div className="gameover__body">
                <p>Has terminado esta trivia con</p>
                <p>Correctas: { result.corrects }/{total}</p>
                <p>Incorrectas: { result.incorrects }/{total}</p>

                <div className="buttons">
                    <button 
                        className="button"
                        onClick={ handleStart }
                    >Volver a empezar</button>
                    <button 
                        className="button"
                        onClick={ handleOut }
                    >Salir</button>
                </div>
            </div>
        </>
    );
}
 
export default QuestionsResult;