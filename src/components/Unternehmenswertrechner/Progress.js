import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';

const Progress = () => {
    const [activeItem, setActiveItem] = useState('basis');

    const handleItemClick = (target) => {
        setActiveItem(target);
    };

    return (
        <div className="nav-wrapper">
            <Grid columns={6}>
                <Grid.Row>
                    <Grid.Column
                        className={`nav-item ${activeItem === 'basis' ? 'finished' : 'inactive'}`}
                        data-target="basis"
                        onClick={() => handleItemClick('basis')}
                    >
                        <div className="nav-border"></div>
                        <div className="heading">Basis-Infos</div>
                    </Grid.Column>
                    <Grid.Column
                        className={`nav-item ${activeItem === 'kennzahlen' ? 'active' : 'inactive'} ${activeItem === 'kennzahlen' ? 'error' : ''}`}
                        data-target="kennzahlen"
                        onClick={() => handleItemClick('kennzahlen')}
                    >
                        <div className="nav-border"></div>
                        <div className="heading">Kennzahlen</div>
                    </Grid.Column>
                    <Grid.Column
                        className={`nav-item ${activeItem === 'bereinigung' ? 'inactive' : 'inactive'}`}
                        data-target="bereinigung"
                        onClick={() => handleItemClick('bereinigung')}
                    >
                        <div className="nav-border"></div>
                        <div className="heading">Bereinigung</div>
                    </Grid.Column>
                    <Grid.Column
                        className={`nav-item ${activeItem === 'equity' ? 'inactive' : 'inactive'}`}
                        data-target="equity"
                        onClick={() => handleItemClick('equity')}
                    >
                        <div className="nav-border"></div>
                        <div className="heading">Equity Bridge</div>
                    </Grid.Column>
                    <Grid.Column
                        className={`nav-item ${activeItem === 'qualitaet' ? 'inactive' : 'inactive'}`}
                        data-target="qualitaet"
                        onClick={() => handleItemClick('qualitaet')}
                    >
                        <div className="nav-border"></div>
                        <div className="heading">Qualität</div>
                    </Grid.Column>
                    <Grid.Column
                        className={`nav-item ${activeItem === 'anlass' ? 'inactive' : 'inactive'}`}
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

export default Progress;
