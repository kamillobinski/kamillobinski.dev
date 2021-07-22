import React from 'react';
import './title.css';

const Title = (props) => {
    return (
        <div className="title">
            <span>{props.value}</span>
        </div>
    )
}

export default Title;