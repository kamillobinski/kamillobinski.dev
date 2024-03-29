import React from 'react';
import Number from './number/Number';
import Content from './content/Content';
import Title from './content/title/Title';
import Description from './content/description/Description';
import Type from './type/Type';
import './card.css';

const Card = (props) => {
    return (
        <div className="card animate__animated animate__bounceIn" id="card" key={props.number}>
            <div className="container">
                <Number value={props.number} />
                <Content>
                    <Title value={props.title} />
                    <Description value={props.description} />
                </Content>
                <Type value={props.type} />
            </div>
        </div >
    )
}

export default Card;