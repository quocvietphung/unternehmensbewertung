import React, {useEffect} from 'react';
import { Grid, Form, Button } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { setErgebnisData } from '../../redux/ergebnisSlice';
import '../Ergebnis/Ergebnis.scss';

const Ergebnis = () => {
    const unternehmenswert = useSelector((state) => state.sections.sectionData.unternehmenswert);
    const ergebnisData = useSelector((state) => state.ergebnis.ergebnisData);
    const dispatch = useDispatch();

    const formatUnternehmenswert = (unternehmenswert) => {
        const roundedValue = Math.round(unternehmenswert).toString();
        const formattedValue = roundedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return formattedValue;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
        };
        dispatch(setErgebnisData(formData));
        // Additional logic or actions you want to perform
    }

    useEffect(() => {
        console.log('ergebnisData:', ergebnisData);
        // checkValidity();
    }, [ergebnisData]);


    return (
        <Grid className="test-enterprise-result">
            <Grid.Row columns={2}>
                <Grid.Column width={6}>
                    <div className="heading-container">
                        <h2 className="heading-title">Der Wert Ihres Unternehmens beträgt:</h2>
                        <p className="ertragswert">{formatUnternehmenswert(unternehmenswert)} €</p>
                    </div>
                </Grid.Column>
                <Grid.Column width={10} className="result-column">
                    <Form className="result-form" onSubmit={handleSubmit}>
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
                            name="firstName"
                            defaultValue={ergebnisData.firstName}
                        />
                        <Form.Input
                            label="Nachname"
                            placeholder="Ihr Nachname"
                            className="form-input"
                            name="lastName"
                            defaultValue={ergebnisData.lastName}
                        />
                        <Form.Input
                            label="Ihre E-Mail Adresse"
                            placeholder="Enter your E-Mail adresse"
                            className="form-input"
                            name="email"
                            defaultValue={ergebnisData.email}
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