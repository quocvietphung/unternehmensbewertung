import React, { useEffect } from 'react';
import { Grid, Form, Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import '../Ergebnis/Ergebnis.scss';
import { setErgebnisData } from '../../redux/ergebnisSlice';
import { pdf } from '@react-pdf/renderer';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import MyDocument from "./MyDocument";

const Ergebnis = () => {
    const unternehmenswert = useSelector((state) => state.sections.sectionData.unternehmenswert);
    const basisInfoData = useSelector(state => state.basisInfo.basisInfoData);
    const kennzahlenData = useSelector((state) => state.kennzahlen.kennzahlenData);
    const bereinigungData = useSelector((state) => state.bereinigung.bereinigungData);
    const equityBridgeData = useSelector((state) => state.equityBridge.equityBridgeData);
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

    const savePdf = () => {
        return new Promise((resolve, reject) => {
            pdf(<MyDocument
                kennzahlenData={kennzahlenData}
                basisInfoData={basisInfoData}
                bereinigungData={bereinigungData}
                equityBridgeData={equityBridgeData}
                ergebnisData={ergebnisData}
                unternehmenswert={unternehmenswert}
            />).toBlob().then(blob => {
                const reader = new FileReader();
                reader.onloadend = function() {
                    if (reader.error) {
                        console.error('Error:', reader.error);
                        showSnackbar('Failed to convert PDF to Blob. Please try again later.');
                        reject(reader.error);
                    } else {
                        const base64data = reader.result;

                        const data = {
                            filename: `Unternehmenswert_${ergebnisData.lastName}.pdf`,
                            pdfData: base64data,
                            directoryPath: './pdfs'
                        };

                        console.log('******data******', data);

                        axios.post('http://localhost:3001/save-pdf', data)
                            .then(response => {
                                console.log('PDF saved:', response.data);
                                resolve();
                            })
                            .catch(error => {
                                console.error('Error:', error);
                                reject(error);
                            });
                    }
                };

                reader.onerror = function (error) {
                    console.error('Error:', error);
                    reject(error);
                };

                reader.readAsDataURL(blob);
            }).catch(error => {
                console.error('Error:', error);
                reject(error);
            });
        });
    };

    const sendEmail = () => {
        showSnackbar('Email sending...');
        savePdf()
            .then(() => {
                const formData = {
                    to: [ergebnisData.email],
                    subject: 'Orgaplan Unternehmenrechner PDF Test',
                    body: 'Test Email',
                    attachments: [{
                        filename: `Unternehmenswert_${ergebnisData.lastName}.pdf`,
                        path: `./pdfs/Unternehmenswert_${ergebnisData.lastName}.pdf`
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
        const variant = message.includes('successfully') ? 'success' :
            message.includes('sending') ? 'warning' : 'error';

        enqueueSnackbar(message, {
            variant: variant,
            autoHideDuration: 2000,
        });
    };

    return (
        <Grid className="enterprise-result">
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

export default Ergebnis;