import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, pdf } from '@react-pdf/renderer';

const MyDocument = ({ kennzahlenData, basisInfoData, bereinigungData }) => {
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
            marginTop: 100,
            marginBottom: 20,
        },
        subtitle: {
            fontSize: 24,
            fontWeight: 'bold',
            marginTop: 10,
            marginBottom: 5,
        },
        content: {
            marginTop: 20,
            fontSize: 14,
            lineHeight: 1.5,
            textAlign: 'justify',
            alignSelf: 'stretch',
        },
        pageNumber: {
            position: 'absolute',
            fontSize: 12,
            bottom: 30,
            left: 0,
            right: 0,
            textAlign: 'center',
            color: 'gray',
        },
        table: {
            marginTop: 10,
            display: 'table',
            width: 'auto',
            borderWidth: 0, // Removed border
        },
        tableRow: {
            flexDirection: 'row',
        },
        tableCellHeader: {
            color:"white",
            margin: 'auto',
            padding: 10,
            fontSize: 12,
        },
        tableCell: {
            margin: 'auto',
            fontSize: 12,
        },
        tableCol: {
            width: '50%',
            borderWidth: 0, // Removed border
        },
        tableRowHeader: {
            padding: 5,
            margin: 2,
            width: '80%',
            borderWidth: 0, // Removed border
            backgroundColor: '#003366',
        },
        tableColHeader: {
            padding: 5,
            margin: '2 1',
            width: '50%',
            borderWidth: 0, // Removed border
            backgroundColor: '#1abc9c',
        },
        image: {
            textAlign: 'justify',
            alignSelf: 'stretch',
            marginHorizontal: 100,
            width: 300,
            height: 400,
        },
    });

    const calculateEBITWachstum = (ebitData) => {
        let ebitWachstum = [];
        let sum = 0;
        let count = 0;

        for (let i = 0; i < ebitData.length - 1; i++) { // include 'Average'
            if (i === 0) {
                ebitWachstum.push({
                    year: ebitData[i].year,
                    value: "-" // "-" for the first year
                });
            } else {
                const currentEBIT = ebitData[i].value;
                const previousEBIT = ebitData[i - 1].value;
                const growth = ((currentEBIT - previousEBIT) / previousEBIT) * 100; // calculate growth
                sum += growth;
                count++;
                ebitWachstum.push({
                    year: ebitData[i].year,
                    value: Math.round(growth) + "%" // round to the nearest integer and add '%'
                });
            }
        }

        // Calculate average EBIT Wachstum
        const average = sum / count;
        ebitWachstum.push({
            year: 'Average',
            value: Math.round(average) + "%" // round to the nearest integer and add '%'
        });

        return ebitWachstum;
    };

    const calculateGewinnmarge = (bereinigterEbitData, umsatzData) => {
        return bereinigterEbitData.map((bereinigterEbitObj, index) => {
            const umsatzValue = umsatzData[index]?.value || 0;
            const gewinnmarge = umsatzValue !== 0 ? Math.round((bereinigterEbitObj.value / umsatzValue) * 100) : 'N/A';
            return {
                year: bereinigterEbitObj.year,
                value: `${gewinnmarge}%`
            };
        });
    };

    const transformKennzahlenData = () => {
        const ebitData = kennzahlenData.ebit.map(ebitObj => ({
            year: ebitObj.year,
            value: ebitObj.value || 0
        }));

        ebitData.push({
            year: 'Average',
            value: kennzahlenData.averageValues.averageEbit || 0
        });

        const anpassungEbitData = bereinigungData.anpassungEbit.map(anpassungEbitObj => ({
            year: anpassungEbitObj.year,
            value: anpassungEbitObj.value || 0
        }));

        // Push a dash for the average value
        anpassungEbitData.push({
            year: 'Average',
            value: "-"
        });

        const gehaltValues = bereinigungData.gehalt
            .map(gehaltObj => parseFloat(gehaltObj.value))
            .filter(value => !isNaN(value));

        const gehaltSum = gehaltValues.reduce((sum, value) => sum + value, 0)
        const gehaltAverage = Math.round(gehaltSum / gehaltValues.length);

        console.log("gehaltValues", gehaltValues);
        console.log("gehaltSum", gehaltSum);

        const verguetungGFData = bereinigungData.gehalt.map(gehaltObj => ({
            year: gehaltObj.year,
            value: gehaltObj.value || 0
        }));

        verguetungGFData.push({
            year: 'Average',
            value: gehaltAverage || 0
        });

        const bereinigterEbitData = bereinigungData.bereinigungEbit.map(bereinigterEbitObj => ({
            year: bereinigterEbitObj.year,
            value: bereinigterEbitObj.value || 0
        }));

        bereinigterEbitData.push({
            year: 'Average',
            value: bereinigungData.bereinigungEbitAverage || 0
        });

        const ebitWachstum = calculateEBITWachstum(ebitData);

        const umsatzData = kennzahlenData.umsatz.map(umsatzObj => ({
            year: umsatzObj.year,
            value: umsatzObj.value || 0
        }));

        // Push a dash for the average value
        umsatzData.push({
            year: 'Average',
            value: kennzahlenData.averageValues.averageUmsatz || 0
        });

        const gewinnmargeData = calculateGewinnmarge(bereinigterEbitData, umsatzData);

        console.log("gewinnmargeData", gewinnmargeData);

        const jahresAbschlussAnalyseData = {
            'EBIT': ebitData,
            'Sonst. Bereinigung EBIT': anpassungEbitData,
            'Vergütung GF': verguetungGFData,
            'Bereinigter EBIT': bereinigterEbitData,
            'EBIT Wachstum': ebitWachstum, // use calculated EBIT Wachstum
            'Umsatz': umsatzData,
            'Gewinnmarge': gewinnmargeData,
        }

        return jahresAbschlussAnalyseData;
    }

    const jahresAbschlussAnalyseData = transformKennzahlenData();

    // Extract the column headers (years) from the data
    const columnHeaders = jahresAbschlussAnalyseData['EBIT'].map(datum => datum.year);

// Extract the row headers (information types) from the data
    const rowHeaders = Object.keys(jahresAbschlussAnalyseData);

// Convert the data into the format expected by the Table component
    const tableData = rowHeaders.map(rowHeader => jahresAbschlussAnalyseData[rowHeader].map(datum => datum.value));

    const Header = () => (
        <View style={styles.header}>
            <Text style={styles.headerText}>Orgaplan Beratung</Text>
        </View>
    );

    const formatCell = (rowHeaders, rowIndex, cell) => {
        const headersRequireEuro = ['EBIT', 'Sonst. Bereinigung EBIT', 'Verguetung GF', 'Bereinigter EBIT', 'Umsatz'];
        if(headersRequireEuro.includes(rowHeaders[rowIndex]) && cell !== '-' && cell !== null) {
            return `${cell} €`;
        } else if (cell === null) {
            return '';
        } else {
            return cell;
        }
    }

    const Table = ({ rowHeaders, colHeaders, data }) => (
        <View style={styles.table}>
            <View style={styles.tableRow}>
                <View style={[styles.tableColHeader, { width: '80%' }]}></View> {/* Empty cell */}
                {colHeaders.map((cell, cellIndex) => (
                    <View key={cellIndex} style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>{cell}</Text>
                    </View>
                ))}
            </View>
            {data.length === 0 ? (
                rowHeaders.map((header, index) => (
                    <View key={index} style={styles.tableRow}>
                        <View style={styles.tableRowHeader}>
                            <Text style={styles.tableCellHeader}>{header}</Text>
                        </View>
                        {colHeaders.map((colHeader, colIndex) => (
                            <View key={colIndex} style={styles.tableCol}>
                                <Text style={styles.tableCell}></Text>
                            </View>
                        ))}
                    </View>
                ))
            ) : (
                data.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.tableRow}>
                        <View style={styles.tableRowHeader}>
                            <Text style={styles.tableCellHeader}>{rowHeaders[rowIndex]}</Text>
                        </View>
                        {row.map((cell, cellIndex) => (
                            <View key={cellIndex} style={styles.tableCol}>
                                <Text style={styles.tableCell}>
                                    {formatCell(rowHeaders, rowIndex, cell)}
                                </Text>
                            </View>
                        ))}
                    </View>
                ))
            )}
        </View>
    );

    const PageNumber = ({ pageNumber }) => (
        <Text style={styles.pageNumber}>{pageNumber}</Text>
    );

    const imageUrl = 'assets/images/marktdaten.png';

    return (
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
                <Text style={styles.subtitle}>1. Basis-Informationen</Text>
                <Text style={styles.content}>
                    Branche: {basisInfoData.branche?.text || ''} {'\n'}
                    Lage: {basisInfoData.lage?.text || ''} {'\n'}
                    Alter: {basisInfoData.alter || ''}
                </Text>
                <Text style={styles.subtitle}>2. Jahresabschluss-Analyse</Text>
                <Table rowHeaders={rowHeaders} colHeaders={columnHeaders} data={tableData} />
                <Text style={styles.content}>
                    Branchenübliche Vergütung Geschäftsführer: {bereinigungData.typischGehalt || ''}
                </Text>
                <PageNumber pageNumber="1" />
            </Page>
            <Page style={styles.page}>
                <Header />
                <Text style={styles.subtitle}>3. Bandbreite von Bewertungsmultiples</Text>
                <Text style={styles.content}>
                    Die Bewertung von Firmen anhand von Multiples ist in der Praxis sehr verbreitet. Sie lassen
                    Vergleiche mit bereits verkauften Firmen zu.
                    Man betrachtet den Verkaufspreis hierbei als Vielfaches (Multiple) einer gewissen
                    Basiskennzahl, wie zum Beispiel dem Umsatz oder dem Gewinn des Unternehmens. Der von
                    Orgaplan Beratung berechnete Multiplikator basiert auf den von uns beobachteten
                    Marktdaten für Multiples von ähnlichen Firmen (Branche, Größe) sowie Ihren
                    firmenspezifischen Angaben.
                    Der EBIT wird für die Bewertung von mittelständischen Firmen um Sonderfaktoren und
                    möglicher inhaberspezifischer Kompensation bereinigt, da andernfalls das Ergebnis
                    erheblich verzerrt werden kann.
                    Der Umsatz Multiple dient in diesem Rechner als Ergänzung, ist in der Regel aber weniger
                    aussagekräftig und wird dementsprechend auch bei dieser Bewertung weniger stark
                    gewichtet.
                </Text>
                <Image
                    style={styles.image}
                    source={{
                        uri: imageUrl,
                        method: 'GET',
                        headers: {},
                        body: '',
                    }}
                />
                <PageNumber pageNumber="2" />
            </Page>
        </Document>
    );
};

export default MyDocument;
