import React, { useContext } from 'react';

// context
import { UIContext } from '../../context/UIContext';

// componentes
import Modal from '../ui/modal/Modal';

import Loading from '../ui/loading/Loading';
// import Questions from '../questions/Questions';

const Principal = () => {
    // state para ocultar el mensaje de bienvenida
  const { isOpenModal, loading  } = useContext( UIContext );

    return (
        <>
            { isOpenModal ? <Modal /> : null }

            { loading ? 
                <Loading /> : null
            }
        </>
    );
}
 
export default Principal;