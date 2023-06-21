import React, { useState, useEffect } from 'react';
import { Document, Page, Text, View, PDFViewer, PDFDownloadLink, StyleSheet, pdf } from '@react-pdf/renderer';
import { Grid, Button } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import './PDF.scss';
import axios from "axios";

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

    const styles = StyleSheet.create({
        page: {
            flexDirection: 'column',
            padding: 40,
        },
        header: {
            marginBottom: 20,
            backgroundColor: '#f5f5f5',
            paddingVertical: 10,
        },
        headerText: {
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
        },
        horizontalLine: {
            borderBottomColor: '#000',
            borderBottomWidth: 1,
            marginBottom: 20,
        },
        footer: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            alignSelf: 'stretch',
            paddingVertical: 10,
            backgroundColor: '#f5f5f5',
        },
        footerText: {
            textAlign: 'center',
            fontSize: 12,
            fontStyle: 'italic',
            color: '#888',
            marginTop: 10,
        },
        title: {
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 80,
            marginBottom: 20,
        },
        content: {
            marginTop: 10,
            fontSize: 14,
            lineHeight: 1.5,
            textAlign: 'justify',
            alignSelf: 'stretch',
        },
    });

    const Header = () => (
        <View style={styles.header}>
            <Text style={styles.headerText}>Orgaplan Beratung</Text>
        </View>
    );

    const MyDocument = () => (
        <Document>
            <Page style={styles.page}>
                <Header />
                <View style={styles.horizontalLine}></View>
                <Text style={styles.title}>Unternehmensbewertung</Text>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Schanzenstraße 58, 40549 Düsseldorf</Text>
                    <Text style={styles.footerText}>Tel: 0211 22963989</Text>
                    <Text style={styles.footerText}>Email: hotline@orgaplan.org</Text>
                </View>
            </Page>
            <Page style={styles.page}>
                <Header />
                <Text style={styles.content}>
                    Basis-Informationen:
                    - Branche: Versorgungswirtschaft
                    - Lage: ländlich
                    - Alter: 120 Jahre
                </Text>
                <Text style={styles.content}>
                    Jahresabschluss-Analyse:
                    {/* Add your analysis content here */}
                </Text>
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

    const sendEmail = () => {
        savePdf()
            .then(() => {
                const data = {
                    to: 'quocvietphung1993@gmail.com',
                    subject: 'Your PDF',
                    body: 'Please find the PDF attached.',
                    attachments: [{
                        filename: 'example.pdf',
                        path: '/Users/soaica/git/unternehmensbewertung/src/pdf/example.pdf'
                    }]
                };

                axios.post('http://localhost:3001/send-email', data)
                    .then(response => {
                        console.log('Email sent:', response.data);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            })
            .catch((error) => {
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
                            <Button className="button" onClick={savePdf}>Save PDF</Button>
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
