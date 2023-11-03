// Link.js
import React from "react";

const Link = ({ to, children, onClick }) => {
    return (
        <a href={to} onClick={onClick}>
            {children}
        </a>
    );
};

export default Link;