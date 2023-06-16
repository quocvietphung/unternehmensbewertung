import React from 'react';
import { Grid, Form, Button } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import '../Ergebnis/Ergebnis.scss';

const Ergebnis = () => {
    const unternehmenswert = useSelector((state) => state.sections.sectionData.unternehmenswert);

    const formatUnternehmenswert = (unternehmenswert) => {
        const roundedValue = Math.round(unternehmenswert).toString();

        const formattedValue = roundedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        return formattedValue;
    }

    return (
        <Grid className="enterprise-result">
            <Grid.Row columns={2}>
                <Grid.Column width={6}>
                    <div className="heading-container">
                        <h2 className="heading-title">Der Wert Ihres Unternehmens beträgt:</h2>
                        <p className="ertragswert">{formatUnternehmenswert(unternehmenswert)} €</p>
                    </div>
                </Grid.Column>
                <Grid.Column width={10} className="custom-column">
                    <Form className="custom-form">
                        <Form.Field>
                            <h3 className="form-title">
                                Laden Sie jetzt Ihren persönlichen PDF-Bericht herunter
                            </h3>
                            <p className="form-description">Anonym, kostenlos und unverbindlich</p>
                        </Form.Field>
                        <Form.Input
                            label="Vorname"
                            placeholder="Ihr Vorname"
                            className="form-input"
                        />
                        <Form.Input
                            label="Nachname"
                            placeholder="Ihr Nachname"
                            className="form-input"
                        />
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

export default Ergebnis;