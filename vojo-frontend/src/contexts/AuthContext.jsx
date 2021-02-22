import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const accessToken = sessionStorage.getItem("accessToken");

    const [authData, setAuthData] = useState({
        logged: !!accessToken,
        accessToken,
    });

    const providerValue = {
        authData,
        setAuthData,
    };

    return (
        <AuthContext.Provider value={providerValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
