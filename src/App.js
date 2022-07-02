import React from 'react';

// componentes
import Principal from './components/app/Principal';

// context
import GamesProvider from './context/GamesContext';
import ProversProvider from './context/ProversContext';
import PuzzlesProvider from './context/PuzzlesContext';
import QuizProvider from './context/QuizContext';
import UIProvider from './context/UIContext';

function App() {

  return (
    <UIProvider>
      <GamesProvider>
        <PuzzlesProvider>
          <QuizProvider>
            <ProversProvider>
              <Principal />
            </ProversProvider>
          </QuizProvider>
        </PuzzlesProvider>
      </GamesProvider>
    </UIProvider>
  );
}

export default App;
