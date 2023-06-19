import React from 'react';
import { Document, Page, Text, View, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { Grid, Button } from 'semantic-ui-react';
import './pdf.scss';

class PDF extends React.Component {
    state = {
        isViewing: false,
    };

    handleView = () => {
        this.setState({ isViewing: true });
    };

    handleClose = () => {
        this.setState({ isViewing: false });
    };

    render() {
        const { isViewing } = this.state;

        return (
            <Grid container stackable centered className="grid-container">
                <Grid.Row>
                    <Grid.Column>
                        <h1>Create and View PDF</h1>
                        {!isViewing && <Button onClick={this.handleView}>View PDF</Button>}
                        {isViewing && (
                            <div>
                                <PDFViewer width={600} height={800}>
                                    <MyDocument />
                                </PDFViewer>
                                <PDFDownloadLink document={<MyDocument />} fileName="example.pdf">
                                    {({ blob, url, loading, error }) =>
                                        loading ? 'Generating PDF...' : 'Download PDF'
                                    }
                                </PDFDownloadLink>
                                <Button onClick={this.handleClose}>Close</Button>
                            </div>
                        )}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

const MyDocument = () => (
    <Document>
        <Page size="A4">
            <View>
                <Text>
                    Python is a popular, powerful, flexible, and easy-to-learn programming language.
                    It has clear and readable syntax, which helps reduce program maintenance costs.
                    Python supports multiple programming paradigms, including object-oriented and
                    functional programming. Python is also widely used in data analysis,
                    data science, artificial intelligence, and machine learning.
                </Text>
            </View>
            <View>
                <Text>
                    Some key features of Python include: Easy to learn and use, Clear syntax,
                    Large programming community, Powerful and flexible, Supports numerous libraries
                    and extensions, Cross-platform and Multi-paradigm programming.
                </Text>
            </View>
        </Page>
        <Page size="A4">
            <View>
                <Text>
                    For beginners, Python is an excellent language to start with.
                    It has a low learning curve and comes with a wealth of learning materials and
                    online resources. For experienced programmers, Python provides
                    a powerful and flexible language that can be used to perform a variety of
                    programming tasks.
                </Text>
            </View>
            <View>
                <Text>
                    Python has many applications, from web development, data analysis, machine learning
                    to software programming and game development. Whether you are looking for a
                    first programming language or a new language to add to your toolkit, Python is
                    a good choice.
                </Text>
            </View>
        </Page>
    </Document>
);

export default PDF;
