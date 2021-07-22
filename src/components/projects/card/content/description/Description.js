import React from 'react';
import './description.css';

const Description = (props) => {
    return (
        <div className="description">
            <span>{props.value}</span>
        </div>
    )
}

export default Description;