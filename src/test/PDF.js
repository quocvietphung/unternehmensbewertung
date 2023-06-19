import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        textAlign: 'center',
    },
});

class PDF extends React.Component {
    state = {
        isViewing: false,
    };

    render() {
        const { isViewing } = this.state;

        return (
            <div>
                <h1>Tạo và xem PDF</h1>
                {!isViewing && <button onClick={this.handleView}>Xem PDF</button>}
                {isViewing && (
                    <div>
                        <PDFViewer width={600} height={800}>
                            <MyDocument />
                        </PDFViewer>
                        <PDFDownloadLink document={<MyDocument />} fileName="example.pdf">
                            {({ blob, url, loading, error }) =>
                                loading ? 'Đang tạo PDF...' : 'Tải xuống PDF'
                            }
                        </PDFDownloadLink>
                    </div>
                )}
            </div>
        );
    }

    handleView = () => {
        this.setState({ isViewing: true });
    };
}

const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.text}>Hello Nam</Text>
            </View>
        </Page>
    </Document>
);

export default PDF;
