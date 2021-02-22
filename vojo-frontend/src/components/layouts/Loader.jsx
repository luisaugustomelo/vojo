import React, { useContext } from "react";
import { Spinner } from "@mindlab-vojo/component-library";

import { LoaderContext } from "../../contexts/LoaderContext";

const Loader = ({ className }) => {
    const { isLoading } = useContext(LoaderContext);

    return (
        <div
            className={`backdrop${isLoading ? " show" : ""} ${className ? className : ""
                }`}
        >
            <Spinner />
        </div>
    );
};

export default Loader;
