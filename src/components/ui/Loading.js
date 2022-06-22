import React from 'react';

const Loading = () => {
    return (
        <div className='spinner__container'>
            <span className="loader"></span>
            <p>Cargando preguntas...</p>
        </div>
    );
}
 
export default Loading;