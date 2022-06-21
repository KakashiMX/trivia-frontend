import React, { useState } from 'react';
import WelcomeMessage from './components/ui/WelcomeMessage';


function App() {

  // state para ocultar el mensaje de bienvenida
  const [showMessage, setShowMessage] = useState(true);

  return (
    <>
      { showMessage ? 
        <WelcomeMessage 
          setShowMessage = { setShowMessage }
        />
        :
        null
      }
      
    </>
  );
}

export default App;
