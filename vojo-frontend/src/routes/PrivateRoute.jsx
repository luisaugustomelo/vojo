import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

const PrivateRoute = ({ path, admin, children, ...rest }) => {
    const { authData } = useContext(AuthContext);

    if (!authData.logged) {
        return (
            <Redirect to={{ pathname: "/", state: { from: [rest.location] } }} />
        );
    }

    return (
        <Route path={path} {...rest}>
            {children}
        </Route>
    );
};

export default PrivateRoute;
