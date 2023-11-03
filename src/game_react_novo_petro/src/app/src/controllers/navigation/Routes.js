// Routes.js
import React from "react";

const Routes = ({ pathname, children }) => {
    const match = (path) => path === pathname;

    return React.Children.map(children, (child) => {
        return React.cloneElement(child, { match: match(child.props.path) });
    });
};

export default Routes;