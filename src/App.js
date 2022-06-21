import React, { useState } from 'react';

// componentes
import Form from './components/form/Form';
import WelcomeMessage from './components/ui/WelcomeMessage';

// context
import AppProvider from './context/AppContext';

function App() {

  // state para ocultar el mensaje de bienvenida
  const [showMessage, setShowMessage] = useState(true);

  // state para mostrar u ocultar formulario de preguntas
  const [questions, setQuestions] = useState(false);

  return (
    <AppProvider>
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
    </AppProvider>
  );
}

export default App;
