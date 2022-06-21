import React from 'react';

// componentes
import Principal from './components/app/Principal';

// context
import AppProvider from './context/AppContext';

function App() {

  return (
    <AppProvider>
      <Principal />
    </AppProvider>
  );
}

export default App;
