import React, { useState } from 'react';
import { Grid, Form, Button } from 'semantic-ui-react';
import './Test.scss';

const Test = () => {
    const unternehmenswert = 'Der Wert Ihres Unternehmens beträgt:';

    return (
        <Grid>
            <Grid.Row columns={2}>
                <Grid.Column width={6}>
                    <h2 className="heading-title">{unternehmenswert}</h2>
                </Grid.Column>
                <Grid.Column width={10} className="custom-column">
                    <Form>
                        <Form.Field>
                            <h3>Laden Sie jetzt Ihren persönlichen PDF-Bericht herunter</h3>
                            <p>Anonym, kostenlos und unverbindlich</p>
                        </Form.Field>
                        <Form.Input
                            label="Ihre E-Mail Adresse"
                            placeholder="Enter your E-Mail adresse"
                        />
                        <Button type="submit" primary>
                            Bericht anfragen
                        </Button>
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default Test;