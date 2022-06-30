import React, { useContext } from 'react';
import { GamesContext } from '../../../context/GamesContext';

// context
import { UIContext } from '../../../context/UIContext';

// componentes
import GameModal from './GameModal';
import PuzzleModal from './PuzzleModal';

const Modal = () => {

    const { actualModal } = useContext( UIContext );
    const { gameSelect } = useContext( GamesContext );

    return (
        <div className="container">
            
            { actualModal === 0 ? <GameModal /> : null }

            { actualModal === 1 && gameSelect === 'acertijos' ? <PuzzleModal />: null}
        </div>
    );
}
 
export default Modal;