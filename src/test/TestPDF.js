import React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// Define the CSS styles for the PDF document
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        height: '100vh'
    },
    page: {
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    section: {
        margin: '20 20',
        padding: 10,
        flexGrow: 1
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    paragraph: {
        fontSize: 12,
        marginBottom: 10
    },
    image: {
        margin: 'auto',
        width: 560,
        height: 380,
    },
    imageTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    }
});

const MyDocument = () => {
    const marktDaten = 'assets/images/marktdaten.png';

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.heading}>Hello React PDF!</Text>
                    <Text style={styles.paragraph}>
                        This is a simple example of creating a PDF document using @react-pdf/renderer.
                    </Text>
                    <Image style={styles.image} src={marktDaten} />
                    <Text style={styles.imageTitle}>Abbildung 1: Grafik Marktdaten Ebit und Umsatz</Text>
                </View>
            </Page>
        </Document>
    );
};

const TestPDF = () => (
    <div style={styles.container}>
        <PDFViewer width="600" height="800px">
            <MyDocument />
        </PDFViewer>
    </div>
);

export default TestPDF;
