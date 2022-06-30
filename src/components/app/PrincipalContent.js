import React, { useContext } from 'react';

// context
import { GamesContext } from '../../context/GamesContext';

// componentes
import PuzzlesContent from '../puzzles/PuzzlesContent';

const PrincipalContent = () => {

    // accediendo al context
    const { gameSelect } = useContext( GamesContext );
    return (
        <div className="game__container">
            <div className='game__content'>                

                { gameSelect === 'acertijos' ? <PuzzlesContent/> : null}
            </div>
        </div>
    );
}
 
export default PrincipalContent;