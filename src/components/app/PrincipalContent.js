import React, { useContext } from 'react';

// context
import { GamesContext } from '../../context/GamesContext';

// componentes
import PuzzlesContent from '../puzzles/PuzzlesContent';
import QuizContent from '../quiz/QuizContent';

const PrincipalContent = () => {

    // accediendo al context
    const { gameSelect } = useContext( GamesContext );
    return (
        <div className="game__container">
            <div className='game__content'>                

                { gameSelect === 'acertijos' ? <PuzzlesContent/> : null}

                { gameSelect === 'trivia' ? <QuizContent /> : null}
            </div>
        </div>
    );
}
 
export default PrincipalContent;