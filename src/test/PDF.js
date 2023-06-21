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
            backgroundColor: '#fff',
            padding: 30,
            margin: 20,
        },
        title: {
            textAlign: 'center',
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 50,
        },
        content: {
            fontSize: 14,
            lineHeight: 1.5,
            textAlign: 'justify',
            flex: 1,
            marginTop: 20,
            marginRight: 40,
            marginBottom: 20,
            marginLeft: 20,
        },
    });

    const MyDocument = () => (
        <Document>
            <Page style={styles.page}>
                <Text style={styles.title}>Unternehmensbewertung</Text>
            </Page>
            <Page style={styles.page}>
                <Text style={styles.content}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida mi id mauris tincidunt fringilla. Morbi nec aliquam tellus. In dictum pharetra mauris, at blandit mi mollis in. Nulla in lectus sem. Ut vulputate nisl quis purus dignissim feugiat. Nunc tincidunt, dui at scelerisque tempor, nisl mi tristique metus, ut cursus dui leo a dui. Sed vitae pellentesque justo. Sed dapibus diam vitae consequat tincidunt.

                    Fusce ullamcorper ipsum nec enim pellentesque, eget lobortis massa congue. Curabitur rhoncus urna metus, a lacinia sapien rutrum vitae. Nulla facilisi. Nunc finibus pulvinar libero ut volutpat. Maecenas gravida tortor ac nibh maximus, vel luctus tellus posuere. Curabitur venenatis elit eget congue fringilla. Nullam pharetra pellentesque lectus, sed bibendum nisl faucibus sed. Nam nec dolor quis tellus auctor hendrerit. Aenean posuere ligula id ullamcorper tincidunt. Donec eget justo ipsum. Sed facilisis neque vel urna tincidunt, vitae mattis arcu commodo. Fusce eget tellus sed neque congue faucibus eu et est. Donec sit amet ex in justo fringilla scelerisque. Nulla facilisi.

                    Vestibulum a sagittis est. Cras eget tincidunt nunc. Sed consequat lectus id metus bibendum, id tempor nunc egestas. In dignissim, dolor ut congue hendrerit, risus mauris aliquet justo, in ultrices ex leo vel ex. Praesent vehicula, leo id efficitur cursus, ligula risus consequat nisl, vitae sollicitudin odio ligula id orci. Sed suscipit turpis quis lacus tincidunt venenatis. In rhoncus aliquam lacus, ac dignissim dolor iaculis vitae. In vulputate eros sit amet orci fringilla, a fermentum mi sollicitudin. Nullam ac malesuada sapien. Curabitur mollis tempus tortor, vel posuere orci lobortis in.

                    Integer faucibus scelerisque condimentum. Integer dictum dolor vel tincidunt aliquet. Mauris faucibus, metus at posuere fermentum, nisl velit consequat est, sed scelerisque sapien tortor non enim. Vestibulum congue mauris tellus, at ultrices ex rhoncus vitae. Sed nec malesuada massa. Nulla facilisi. Morbi volutpat purus et ex tristique, eu convallis urna vulputate. Quisque pulvinar nisi vel sapien tincidunt dapibus. Ut dapibus enim sed tellus eleifend sollicitudin. Vestibulum sodales pulvinar mi vel pulvinar. In vitae metus auctor, eleifend ligula vitae, consectetur nunc. Mauris aliquet mauris id elit lacinia ullamcorper. Sed bibendum semper lobortis.

                    Aliquam ac diam at est iaculis eleifend a eu lorem. Sed ac aliquam orci, nec feugiat nunc. Morbi eu est tortor. Maecenas semper, justo et feugiat volutpat, tellus odio posuere metus, vel vulputate nisi tellus ut nunc. Maecenas aliquam, leo vel fringilla condimentum, elit lacus congue elit, in fermentum ex tellus eget ipsum. Nunc dignissim lobortis urna id rhoncus. Sed aliquam, lorem non faucibus molestie, ex urna scelerisque erat, ut lacinia libero lectus nec nisi. Aliquam sit amet ipsum eget felis vehicula dictum sed in neque. In auctor rhoncus urna, vitae bibendum quam vestibulum ut. In hac habitasse platea dictumst. Sed sit amet nisl quis nulla lobortis efficitur at vel ex. Mauris scelerisque consectetur lorem, vitae interdum tellus cursus et.
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
