import React from 'react';
import Skill from '../skill/Skill';
import './column.css';

const Column = (props) => {
    return (
        <div className="column">
            {props.skills.map((skill) => (
                <Skill value={skill} />
            ))}
        </div>
    )
}

export default Column;