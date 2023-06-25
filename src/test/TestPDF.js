import React from 'react';
import { PDFViewer, Document, Page, Text, View, Image } from '@react-pdf/renderer';
import './TestPDF.scss'; // Đường dẫn đến file TestPDF.scss

const marktDaten = 'assets/images/marktdaten.png';

const MyDocument = () => (
    <Document>
        <Page size="A4" className="page">
            <View className="section">
                <Text className="heading">Hello React PDF!</Text> {/* Đổi class thành className */}
                <Text className="paragraph">
                    This is a simple example of creating a PDF document using @react-pdf/renderer.
                </Text>
                <Image className="image" src={marktDaten} /> {/* Đổi class thành className */}
            </View>
        </Page>
    </Document>
);

const TestPDF = () => (
    <div className="container"> {/* Đổi class thành className */}
        <PDFViewer width={600} height="800px">
            <MyDocument />
        </PDFViewer>
    </div>
);

export default TestPDF;
