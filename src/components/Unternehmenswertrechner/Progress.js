import React from 'react';
import { Grid } from 'semantic-ui-react';

const Progress = () => {
    return (
        <div className="nav-wrapper">
            <Grid columns={6}>
                <Grid.Row>
                    <Grid.Column className="nav-item finished" data-target="basis" id="nav-basis">
                        <div className="nav-border"></div>
                        <div className="heading">Basis-Infos</div>
                    </Grid.Column>
                    <Grid.Column className="nav-item inactive active error" data-target="kennzahlen" id="nav-kennzahlen">
                        <div className="nav-border"></div>
                        <div className="heading">Kennzahlen</div>
                    </Grid.Column>
                    <Grid.Column className="nav-item inactive" data-target="bereinigung" id="nav-bereinigung">
                        <div className="nav-border"></div>
                        <div className="heading">Bereinigung</div>
                    </Grid.Column>
                    <Grid.Column className="nav-item inactive" data-target="equity" id="nav-equity">
                        <div className="nav-border"></div>
                        <div className="heading">Equity Bridge</div>
                    </Grid.Column>
                    <Grid.Column className="nav-item inactive" data-target="qualitaet" id="nav-qualitaet">
                        <div className="nav-border"></div>
                        <div className="heading">Qualität</div>
                    </Grid.Column>
                    <Grid.Column className="nav-item inactive" data-target="anlass" id="nav-anlass">
                        <div className="nav-border"></div>
                        <div className="heading">Anlass</div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
};

export default Progress;
