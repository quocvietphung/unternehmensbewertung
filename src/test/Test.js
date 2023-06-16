import React from 'react';
import { Grid, Form, Button } from 'semantic-ui-react';
import './Test.scss';

const Test = () => {
    const unternehmenswert = 'Der Wert Ihres Unternehmens beträgt:';

    return (
        <Grid className="custom-grid">
            <Grid.Row columns={2}>
                <Grid.Column width={6}>
                    <div className="heading-container">
                        <h2 className="heading-title">{unternehmenswert}</h2>
                    </div>
                </Grid.Column>
                <Grid.Column width={10} className="custom-column">
                    <Form className="custom-form">
                        <Form.Field>
                            <h3 className="form-title">
                                Laden Sie jetzt Ihren persönlichen PDF-Bericht herunter
                            </h3>
                            <p className="form-description">
                                Anonym, kostenlos und unverbindlich
                            </p>
                        </Form.Field>
                        <Form.Input
                            label="Ihre E-Mail Adresse"
                            placeholder="Enter your E-Mail adresse"
                            className="form-input"
                        />
                        <Button type="submit" primary className="form-button">
                            Bericht anfragen
                        </Button>
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default Test;