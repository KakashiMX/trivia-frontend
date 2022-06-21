import React from 'react';

const Form = () => {
    return (
        <div className='form__container'>
                <div 
                    className='form__title'>Antes de comenzar</div>
            <form className='form'>

                <div className="form__group">
                    <label htmlFor="" className="form__label">Selecciona una categoria:</label>
                    <select className='form__input'>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
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