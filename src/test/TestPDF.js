import React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// Định nghĩa kiểu dữ liệu CSS cho tài liệu PDF
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
        margin: 10,
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
        width: 200,
        height: 200,
        marginBottom: 10
    }
});

const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.heading}>Hello React PDF!</Text>
                <Text style={styles.paragraph}>
                    This is a simple example of creating a PDF document using @react-pdf/renderer.
                </Text>
                <Image style={styles.image} src="/path/to/image.jpg" />
            </View>
        </Page>
    </Document>
);

const TestPDF = () => (
    <div style={styles.container}>
        <PDFViewer width="600" height="800px">
            <MyDocument />
        </PDFViewer>
    </div>
);

export default TestPDF;
