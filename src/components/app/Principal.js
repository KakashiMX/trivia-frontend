import React, { useContext } from 'react';

// context
import { AppContext } from '../../context/AppContext';

// componentes
import WelcomeMessage from '../../components/ui/WelcomeMessage';
import Form from '../form/Form';

const Principal = () => {
    // state para ocultar el mensaje de bienvenida
  const {showMessage, questions} = useContext( AppContext );

    return (
        <>
            { showMessage ? 
                <WelcomeMessage
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