import React from 'react';

const Card = ({ className, onClick, children }) => {
    return (
        <div
            className={`card elevation ${className ? className : ''}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
}

export default Card;