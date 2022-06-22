import React, { useContext } from 'react';

// context
import { AppContext } from '../../context/AppContext';

// componentes
import WelcomeMessage from '../../components/ui/WelcomeMessage';
import Form from '../form/Form';
import Loading from '../ui/Loading';

const Principal = () => {
    // state para ocultar el mensaje de bienvenida
  const { showComponent, loading,  } = useContext( AppContext );
  const { showwelcomemessage, showform } = showComponent

    return (
        <>
            { showwelcomemessage ? 
                <WelcomeMessage
                />
                :
                null
            }
            { showform ?
                <Form /> : null
            }

            { loading ? 
                <Loading /> : null
            }
        </>
    );
}
 
export default Principal;