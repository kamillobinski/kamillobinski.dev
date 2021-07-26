import React from 'react';
import Label from './label/Label';
import Text from './text/Text';
import "./about.css";

const LABEL = "ABOUT ME";
const TEXT = "I'm a Software Engineer specialized in backend development. Currently I'm seeking a challenging job where technical and interpersonal skills can contribute to the success of the organization and be further developed.";

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <Label value={LABEL} />
                <Text value={TEXT} />
            </div>
        </div >
    )
}

export default About;