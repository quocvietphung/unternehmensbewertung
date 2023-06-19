import React, { useState } from 'react';
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

    const MyDocument = () => (
        <Document>
            <Page className="page" size="A4">
                <View>
                    <Text className="text" style={{ fontSize: 15, margin: 20 }}>
                        Python is a popular, powerful, flexible, and easy-to-learn programming language.
                        It has clear and readable syntax, which helps reduce program maintenance costs.
                        Python supports multiple programming paradigms, including object-oriented and
                        functional programming. Python is also widely used in data analysis,
                        data science, artificial intelligence, and machine learning.
                    </Text>
                </View>
                <View>
                    <Text className="text" style={{ fontSize: 15, margin: 20 }}>
                        Some key features of Python include: Easy to learn and use, Clear syntax,
                        Large programming community, Powerful and flexible, Supports numerous libraries
                        and extensions, Cross-platform and Multi-paradigm programming.
                    </Text>
                </View>
            </Page>
            <Page className="page" size="A4">
                <View>
                    <Text className="text" style={{ fontSize: 15, margin: 20 }}>
                        For beginners, Python is an excellent language to start with.
                        It has a low learning curve and comes with a wealth of learning materials and
                        online resources. For experienced programmers, Python provides
                        a powerful and flexible language that can be used to perform a variety of
                        programming tasks.
                    </Text>
                </View>
                <View>
                    <Text className="text" style={{ fontSize: 15, margin: 20 }}>
                        Python has many applications, from web development, data analysis, machine learning
                        to software programming and game development. Whether you are looking for a
                        first programming language or a new language to add to your toolkit, Python is
                        a good choice.
                    </Text>
                </View>
            </Page>
        </Document>
    );

    return (
        <Grid container stackable centered className="grid-container">
            <Grid.Row>
                <Grid.Column>
                    <h1>Create and View PDF</h1>
                    {!isViewing && <Button className="button" onClick={handleView}>View PDF</Button>}
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
