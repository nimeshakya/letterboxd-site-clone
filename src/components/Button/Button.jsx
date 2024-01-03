import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ className, children }) => {
    return (
        <Link className={className} to='/' onClick={(e) => e.preventDefault()}>
            {children}
        </Link>
    );
};

export default Button;
