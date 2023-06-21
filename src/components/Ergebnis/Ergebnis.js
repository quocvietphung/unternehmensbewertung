import React, { useEffect } from 'react';
import { Grid, Form, Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import '../Ergebnis/Ergebnis.scss';
import { setErgebnisData } from '../../redux/ergebnisSlice';
import { Document, Page, Text, View, pdf } from '@react-pdf/renderer';
import axios from 'axios';
import { SnackbarProvider, useSnackbar } from 'notistack';

const ResultContainer = () => {
    const unternehmenswert = useSelector((state) => state.sections.sectionData.unternehmenswert);
    const ergebnisData = useSelector((state) => state.ergebnis.ergebnisData);
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        console.log('ergebnisData', ergebnisData);
    }, [ergebnisData]);

    const formatUnternehmenswert = (unternehmenswert) => {
        const roundedValue = Math.round(unternehmenswert).toString();
        const formattedValue = roundedValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        return formattedValue;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch(setErgebnisData({ ...ergebnisData, [name]: value }));
    };

    const MyDocument = () => (
        <Document>
            <Page className="page" size="A4">
                <View>
                    <Text className="text" style={{ fontSize: 15, margin: 20 }}>
                        First Name: {ergebnisData.firstName}
                    </Text>
                    <Text className="text" style={{ fontSize: 15, margin: 20 }}>
                        Last Name: {ergebnisData.lastName}
                    </Text>
                    <Text className="text" style={{ fontSize: 15, margin: 20 }}>
                        Email: {ergebnisData.email}
                    </Text>
                    <Text className="text" style={{ fontSize: 15, margin: 20 }}>
                        Unternehmenswert: {unternehmenswert}
                    </Text>
                </View>
            </Page>
        </Document>
    );

    const savePdf = () => {
        return new Promise(async (resolve, reject) => {
            const blob = await pdf(<MyDocument />).toBlob();

            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = function() {
                const base64data = reader.result;

                const data = {
                    filename: 'example.pdf',
                    pdfData: base64data
                };

                axios.post('http://localhost:3001/save-pdf', data)
                    .then(response => {
                        console.log('PDF saved:', response.data);
                        resolve();
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        reject(error);
                    });
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
        };
        dispatch(setErgebnisData(formData));
        sendEmail();
    };

    const sendEmail = () => {
        savePdf()
            .then(() => {
                const formData = {
                    to: ergebnisData.email,
                    subject: 'Test email',
                    body: 'This is a test email.',
                    attachments: [{
                        filename: 'example.pdf',
                        path: '/Users/soaica/git/unternehmensbewertung/src/pdf/example.pdf'
                    }]
                };

                axios
                    .post('http://localhost:3001/send-email', formData)
                    .then((response) => {
                        console.log('Request:', response.config);
                        console.log('Response:', response.data);
                        console.log('Email sent successfully');
                        showSnackbar('Email sent successfully!');
                    })
                    .catch((error) => {
                        console.error('Failed to send email:', error);
                        showSnackbar('Failed to send email. Please try again later.');
                    });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const showSnackbar = (message) => {
        enqueueSnackbar(message, {
            variant: message.includes('successfully') ? 'success' : 'error',
            autoHideDuration: 2000,
        });
    };

    return (
        <Grid className="test-enterprise-result">
            <Grid.Row columns={2}>
                <Grid.Column width={6}>
                    <div className="heading-container">
                        <h2 className="heading-title">
                            Der Wert Ihres Unternehmens beträgt:
                        </h2>
                        <p className="ertragswert">{formatUnternehmenswert(unternehmenswert)} €</p>
                    </div>
                </Grid.Column>
                <Grid.Column width={10} className="result-column">
                    <Form className="result-form" onSubmit={handleSubmit}>
                        <Form.Field>
                            <h3 className="form-title">
                                Laden Sie jetzt Ihren persönlichen PDF-Bericht herunter
                            </h3>
                            <p className="form-description">
                                Anonym, kostenlos und unverbindlich
                            </p>
                        </Form.Field>
                        <Form.Input
                            label="Vorname"
                            placeholder="Ihr Vorname"
                            className="form-input"
                            name="firstName"
                            value={ergebnisData.firstName}
                            onChange={handleInputChange}
                        />
                        <Form.Input
                            label="Nachname"
                            placeholder="Ihr Nachname"
                            className="form-input"
                            name="lastName"
                            value={ergebnisData.lastName}
                            onChange={handleInputChange}
                        />
                        <Form.Input
                            label="Ihre E-Mail Adresse"
                            placeholder="Geben Sie Ihre E-Mail Adresse ein"
                            className="form-input"
                            name="email"
                            value={ergebnisData.email}
                            onChange={handleInputChange}
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

const Ergebnis = () => (
    <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        autoHideDuration={2000}
    >
        <ResultContainer />
    </SnackbarProvider>
);

export default Ergebnis;