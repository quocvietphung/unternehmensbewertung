import React from 'react';
import { Grid } from 'semantic-ui-react';
import './Test.scss';

const Test = () => {
    const unternehmenswert = 'Der Wert Ihres Unternehmens beträgt:';

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <h2 className="heading-title">{unternehmenswert}</h2>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default Test;