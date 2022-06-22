import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Form = () => {

    // accediendo al context
    const { categories, setLoading, formValues, setFormValues, showComponent, setShowComponent } = useContext( AppContext );

    const { category, total } = formValues;

    // función para actualizar el valor de los inputs
    const handleInputChange = e => {
        setFormValues({
            ...formValues,
            [ e.target.name ] : e.target.value
        });
    }

    // función para iniciar la trivia
    const handleInit = e => {
        e.preventDefault();
        setLoading( true );
        setShowComponent({
            ...showComponent,
            showform: false,
            showloading: true
        });
    }

    return (
        <div className='form__container'>
                <div 
                    className='form__title animate__animated animate__bounceIn'>Antes de comenzar</div>
            <form 
                className='form animate__animated animate__bounceIn'
                onSubmit={ handleInit }
            >

                <div className="form__group">
                    <label htmlFor="" className="form__label">Selecciona una categoria:</label>
                    <select 
                        className='form__input'
                        name='category'
                        value={ category }
                        onChange={ handleInputChange }
                    >
                        { categories !== null  ?
                            categories.map( category =>
                                <option 
                                    value={category.nameValue}
                                    key={ category.nameValue }
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
                        name='total'
                        value={ total }
                        onChange={ handleInputChange }
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