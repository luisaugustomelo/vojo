import React, { createContext, useState } from "react";

export const LoaderContext = createContext();

const LoaderProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    const providerValue = {
        isLoading,
        setIsLoading,
    };

    return (
        <LoaderContext.Provider value={providerValue}>
            {children}
        </LoaderContext.Provider>
    );
};

export default LoaderProvider;
