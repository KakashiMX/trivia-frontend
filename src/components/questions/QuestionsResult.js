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

    return (
        <div className='container'>
            <div className="content__header">Resultados</div>
            <div className="content gameover__body">
                <div>
                    <p className='table__head'>Preguntas realizadas:  { total }</p>
                    <table className="body__table">
                        <thead>
                            <tr>
                                <th className='table__head--row'>Correctas</th>
                                <th className='table__head--row'>Incorrectas</th>
                            </tr>
                        </thead>
                        
                        <tbody>

                            <tr className='table__row'>
                                <td className='row__body'>{ result.corrects}</td>
                                <td className='row__body'>{ result.incorrects}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="buttons">
                    <button 
                        className="button"
                        onClick={ handleStart }
                    >Volver a empezar</button>
                </div>
            </div>
        </div>
    );
}
 
export default QuestionsResult;