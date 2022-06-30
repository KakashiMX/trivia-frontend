import React from 'react';

// componentes
import Principal from './components/app/Principal';

// context
import AppProvider from './context/AppContext';
import UIProvider from './context/UIContext';

function App() {

  return (
    <UIProvider>
      <AppProvider>
        <Principal />
      </AppProvider>
    </UIProvider>
  );
}

export default App;
