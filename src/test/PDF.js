import React, { useState, useEffect } from 'react';
import { Document, Page, Text, View, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { Grid, Button } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import './PDF.scss';

const PDF = () => {
    const unternehmenswert = useSelector((state) => state.sections.sectionData.unternehmenswert);
    const ergebnisData = useSelector((state) => state.ergebnis.ergebnisData);

    const [isViewing, setIsViewing] = useState(false);

    const handleView = () => {
        setIsViewing(true);
    };

    const handleClose = () => {
        setIsViewing(false);
    };

    useEffect(() => {
        console.log('unternehmenswert:', unternehmenswert);
        console.log('ergebnisData:', ergebnisData);
    }, [unternehmenswert, ergebnisData]);

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

    const sendEmail = () => {
        const data = {
            to: 'quocvietphung1993@gmail.com',
            subject: 'Your PDF',
            body: 'Please find the PDF attached.',
            attachments: [{
                filename: 'test.pdf',
                path: 'path/to/example.pdf' // Thay đổi đường dẫn tới tệp PDF thật của bạn
            }]
        };

        fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                console.log('Email sent:', result);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <Grid container stackable centered className="grid-container">
            <Grid.Row>
                <Grid.Column>
                    <h1>Create and View PDF</h1>
                    {!isViewing && (
                        <div>
                            <Button className="button" onClick={handleView}>View PDF</Button>
                            <Button className="button" onClick={sendEmail}>Send via Email</Button>
                        </div>
                    )}
                    {isViewing && (
                        <div>
                            <PDFViewer className="pdf-viewer" width={600} height={800}>
                                <MyDocument />
                            </PDFViewer>
                            <PDFDownloadLink
                                className="pdf-download-link"
                                document={<MyDocument />}
                                fileName="example.pdf"
                            >
                                {({ blob, url, loading, error }) =>
                                    loading ? 'Generating PDF...' : 'Download PDF'
                                }
                            </PDFDownloadLink>
                            <Button className="close-button" onClick={handleClose}>Close</Button>
                        </div>
                    )}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default PDF;
