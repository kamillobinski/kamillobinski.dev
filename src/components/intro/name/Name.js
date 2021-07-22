import React from 'react';
import './name.css';

const Name = (props) => {
    return (
        <div className="name animate__animated animate__pulse">
            <span>{props.value}</span>
        </div>
    )
}

export default Name;