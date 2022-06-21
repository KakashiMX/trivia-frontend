import React, { useContext, useState } from 'react';

// context
import { AppContext } from '../../context/AppContext';

// componentes
import WelcomeMessage from '../../components/ui/WelcomeMessage';
import Form from '../form/Form';

const Principal = () => {
    // state para ocultar el mensaje de bienvenida
  const {showMessage, setShowMessage, questions, setQuestions} = useContext( AppContext );

    return (
        <>
            { showMessage ? 
                <WelcomeMessage
                setShowMessage = { setShowMessage }
                setQuestions= { setQuestions }
                />
                :
                null
            }
            { questions ?
                <Form /> : null
            }
        </>
    );
}
 
export default Principal;