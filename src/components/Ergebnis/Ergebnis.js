import React, { useState } from 'react';
import { Grid, Form, Button } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { setErgebnisData } from '../../redux/ergebnisSlice';
import { Document, Page, Text, View, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import emailjs from 'emailjs-com';
import '../Ergebnis/Ergebnis.scss';

const Ergebnis = () => {
    const unternehmenswert = useSelector((state) => state.sections.sectionData.unternehmenswert);
    const ergebnisData = useSelector((state) => state.ergebnis.ergebnisData);
    const dispatch = useDispatch();
    const [isPDFGenerated, setIsPDFGenerated] = useState(false);

    const formatUnternehmenswert = (unternehmenswert) => {
        const roundedValue = Math.round(unternehmenswert).toString();
        const formattedValue = roundedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return formattedValue;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch(setErgebnisData({ ...ergebnisData, [name]: value }));
    }

    const generatePDF = () => {
        setIsPDFGenerated(true);
    }

    const sendEmail = () => {
        const serviceId = 'YOUR_SERVICE_ID';
        const templateId = 'YOUR_TEMPLATE_ID';
        const userId = 'YOUR_USER_ID';

        const doc = (
            <Document>
                <Page>
                    <View>
                        <Text>First Name: {ergebnisData.firstName}</Text>
                        <Text>Last Name: {ergebnisData.lastName}</Text>
                        <Text>Email: {ergebnisData.email}</Text>
                        <Text>Unternehmenswert: {unternehmenswert}</Text>
                    </View>
                </Page>
            </Document>
        );

        const pdfBlob = doc.toBlob();

        emailjs.send(serviceId, templateId, {
            to_email: ergebnisData.email,
            from_email: 'YOUR_FROM_EMAIL',
            subject: 'Your PDF Report',
            message: 'Attached is your PDF report.',
        }, {
            'attachment.pdf': pdfBlob,
        }, userId)
            .then(() => {
                console.log('Email sent successfully');
                // Xử lý sau khi gửi email thành công
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
                // Xử lý khi gửi email thất bại
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
        };
        dispatch(setErgebnisData(formData));
        generatePDF();
    }

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
                            placeholder="Enter your E-Mail adresse"
                            className="form-input"
                            name="email"
                            value={ergebnisData.email}
                            onChange={handleInputChange}
                        />
                        <Button type="submit" primary className="form-button">
                            Bericht anfragen
                        </Button>
                    </Form>
                    {isPDFGenerated && (
                        <Button onClick={sendEmail}>Send Email with PDF</Button>
                    )}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default Ergebnis;