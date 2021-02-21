import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState({
        logged: false,
        accessToken: null
    });

    const providerValue = {
        authData,
        setAuthData
    }

    return (
        <AuthContext.Provider value={providerValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;