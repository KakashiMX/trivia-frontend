import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Form = () => {

    // accediendo al context
    const { categories } = useContext( AppContext );
    
    console.log( categories )
    return (
        <div className='form__container'>
                <div 
                    className='form__title'>Antes de comenzar</div>
            <form className='form'>

                <div className="form__group">
                    <label htmlFor="" className="form__label">Selecciona una categoria:</label>
                    <select className='form__input'>
                        { categories !== null  ?
                            categories.map( category =>
                                <option 
                                    value={category.name}
                                    key={ category.name }
                                >{ category.name}
                                </option>
                            )
                         : null
                        }
                    </select>
                </div>

                <div className="form__group">
                    <label htmlFor="" className="form__label">Total de preguntas: </label>
                    <input 
                        type="number" 
                        className="form__input" 
                    />
                </div>

                <input 
                    type="submit" 
                    className="button form__submit" 
                    value="Iniciar Trivia"
                />
            </form>
        </div>
    );
}
 
export default Form;