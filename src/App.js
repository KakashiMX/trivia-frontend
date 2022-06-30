import React from 'react';

// componentes
import Principal from './components/app/Principal';

// context
import GamesProvider from './context/GamesContext';
import PuzzlesProvider from './context/PuzzlesContext';
import UIProvider from './context/UIContext';

function App() {

  return (
    <UIProvider>
      <GamesProvider>
        <PuzzlesProvider>
          <Principal />
        </PuzzlesProvider>
      </GamesProvider>
    </UIProvider>
  );
}

export default App;
