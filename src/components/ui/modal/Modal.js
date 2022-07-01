import React, { useContext } from 'react';
import { GamesContext } from '../../../context/GamesContext';

// context
import { UIContext } from '../../../context/UIContext';

// componentes
import GameModal from './games/GameModal';
import PuzzleModal from './puzzles/PuzzleModal';
import QuizModal from './quiz/QuizModal';

const Modal = () => {

    const { actualModal } = useContext( UIContext );
    const { gameSelect } = useContext( GamesContext );

    return (
        <>
            
            { actualModal === 0 ? <GameModal /> : null }

            { actualModal === 1 && gameSelect === 'acertijos' ? <PuzzleModal />: null}

            { actualModal === 1 && gameSelect === 'trivia' ? <QuizModal /> : null }
        </>
    );
}
 
export default Modal;