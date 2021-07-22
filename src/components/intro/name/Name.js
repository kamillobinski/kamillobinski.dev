import React from 'react';
import './name.css';

const Name = (props) => {
    return (
        <div className="name">
            <span>{props.value}</span>
        </div>
    )
}

export default Name;