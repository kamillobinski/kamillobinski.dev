import React from 'react';
import './skill.css';

const Skill = (props) => {
    return (
        <div className="skill">
            <span>{props.value}</span>
        </div>
    )
}

export default Skill;