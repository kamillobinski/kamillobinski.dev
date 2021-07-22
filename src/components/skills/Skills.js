import React from 'react';
import Column from './column/Column';
import Label from './label/Label';
import Row from './row/Row';
import './skills.css';

const LABEL = "SKILLS";

const FRONTEND_DB_SKILLS = ["JavaScript", "React.js", "Node.js", "", "SQL", "MySQL"];
const BACKEND_SKILLS = ["Java", "Spring", "Spring Data", "Hibernate", "Maven", "JUnit", "REST API"];
const TOOLS = ["Git", "Heroku", "Netlify", "IntelliJ IDEA", "VS Code"];

const Skills = () => {
    return (
        <div className="skills">
            <div className="container">
                <Row>
                    <Label value={LABEL} />
                </Row>
                <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Column skills={BACKEND_SKILLS} />
                    <Column skills={FRONTEND_DB_SKILLS} />
                    <Column skills={TOOLS} />
                </Row>
            </div>
        </div >
    )
}

export default Skills;