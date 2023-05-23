import React from 'react';
import { Grid } from 'semantic-ui-react';

const sections = ['basis', 'kennzahlen', 'bereinigung', 'equity', 'qualitaet', 'anlass'];

const ProgressSection = ({ setActiveSection, activeSection, finishedSections }) => {
    const handleItemClick = (target) => {
        if (activeSection === target || finishedSections.includes(target)) {
            setActiveSection(target);
        }
    };

    return (
        <div className="nav-wrapper">
            <Grid columns={6}>
                <Grid.Row>
                    {sections.map(section => (
                        <Grid.Column
                            key={section}
                            className={`nav-item ${finishedSections.includes(section) ? 'finished' : activeSection === section ? 'active' : 'inactive'}`}
                            data-target={section}
                            onClick={() => handleItemClick(section)}
                        >
                            <div className="nav-border"></div>
                            <div className="heading">{section}</div>
                        </Grid.Column>
                    ))}
                </Grid.Row>
            </Grid>
        </div>
    );
};

export default ProgressSection;
