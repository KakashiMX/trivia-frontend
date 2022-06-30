import React, { useContext } from 'react';

// context
import { UIContext } from '../../../context/UIContext';

// componentes
import GameModal from './GameModal';

const Modal = () => {

    const { actualModal } = useContext( UIContext );

    return (
        <div className="container">
            
            { actualModal === 0 ? <GameModal /> : null }
        </div>
    );
}
 
export default Modal;