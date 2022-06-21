import React, { useState } from 'react';
import Form from './components/form/Form';
import WelcomeMessage from './components/ui/WelcomeMessage';


function App() {

  // state para ocultar el mensaje de bienvenida
  const [showMessage, setShowMessage] = useState(true);

  // state para mostrar u ocultar formulario de preguntas
  const [questions, setQuestions] = useState(false);

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

export default App;
