import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
    const [show, setShow] = useState(false);

    const providerValue = {
        show,
        setShow,
    }

    return (
        <ModalContext.Provider value={providerValue}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;