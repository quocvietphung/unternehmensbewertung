import React from 'react';
import { Document, Page, Text, View, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { Grid, Button } from 'semantic-ui-react';
import './pdf.scss';

class PDF extends React.Component {
    state = {
        isViewing: false,
    };

    render() {
        const { isViewing } = this.state;

        return (
            <Grid container stackable centered className="grid-container">
                <Grid.Row>
                    <Grid.Column>
                        <h1>Tạo và xem PDF</h1>
                        {!isViewing && <Button onClick={this.handleView}>Xem PDF</Button>}
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
                                <Button onClick={this.handleClose}>Đóng</Button>
                            </div>
                        )}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }

    handleView = () => {
        this.setState({ isViewing: true });
    };

    handleClose = () => {
        this.setState({ isViewing: false });
    };
}

const MyDocument = () => (
    <Document>
        <Page size="A4" className="page">
            <View className="section">
                <Text className="text">Hello Nam</Text>
            </View>
        </Page>
    </Document>
);

export default PDF;
