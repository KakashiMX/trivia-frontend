import React from 'react';

// componentes
import Principal from './components/app/Principal';

// context
import GamesProvider from './context/GamesContext';
import UIProvider from './context/UIContext';

function App() {

  return (
    <UIProvider>
      <GamesProvider>
        <Principal />
      </GamesProvider>
    </UIProvider>
  );
}

export default App;
