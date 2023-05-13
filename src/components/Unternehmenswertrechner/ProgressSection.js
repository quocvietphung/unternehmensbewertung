import React from 'react';
import { Grid } from 'semantic-ui-react';

const ProgressSection = ({ setActiveSection, activeSection, finishedSections }) => {
    const handleItemClick = (target) => {
        setActiveSection(target);
    };

    return (
        <div className="nav-wrapper">
            <Grid columns={6}>
                <Grid.Row>
                    <Grid.Column
                        className={`nav-item ${activeSection === 'basis' ? 'active' : finishedSections.includes('basis') ? 'finished' : 'inactive'}`}
                        data-target="basis"
                        onClick={() => handleItemClick('basis')}
                    >
                        <div className="nav-border"></div>
                        <div className="heading">Basis-Infos</div>
                    </Grid.Column>
                    <Grid.Column
                        className={`nav-item ${activeSection === 'kennzahlen' ? 'active' : 'inactive'} ${activeSection === 'kennzahlen' ? 'error' : ''}`}
                        data-target="kennzahlen"
                        onClick={() => handleItemClick('kennzahlen')}
                    >
                        <div className="nav-border"></div>
                        <div className="heading">Kennzahlen</div>
                    </Grid.Column>
                    <Grid.Column
                        className={`nav-item ${activeSection === 'bereinigung' ? 'inactive' : 'inactive'}`}
                        data-target="bereinigung"
                        onClick={() => handleItemClick('bereinigung')}
                    >
                        <div className="nav-border"></div>
                        <div className="heading">Bereinigung</div>
                    </Grid.Column>
                    <Grid.Column
                        className={`nav-item ${activeSection === 'equity' ? 'inactive' : 'inactive'}`}
                        data-target="equity"
                        onClick={() => handleItemClick('equity')}
                    >
                        <div className="nav-border"></div>
                        <div className="heading">Equity Bridge</div>
                    </Grid.Column>
                    <Grid.Column
                        className={`nav-item ${activeSection === 'qualitaet' ? 'inactive' : 'inactive'}`}
                        data-target="qualitaet"
                        onClick={() => handleItemClick('qualitaet')}
                    >
                        <div className="nav-border"></div>
                        <div className="heading">Qualität</div>
                    </Grid.Column>
                    <Grid.Column
                        className={`nav-item ${activeSection === 'anlass' ? 'inactive' : 'inactive'}`}
                        data-target="anlass"
                        onClick={() => handleItemClick('anlass')}
                    >
                        <div className="nav-border"></div>
                        <div className="heading">Anlass</div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
};

export default ProgressSection;
