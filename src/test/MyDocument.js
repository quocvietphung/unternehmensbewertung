import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const MyDocument = ({ kennzahlenData, basisInfoData, bereinigungData }) => {

    const logoImage = 'assets/images/ORGAPLANLOGO.png';
    const brancheRadar = 'assets/images/branche_radar.png';
    const marktDaten = 'assets/images/marktdaten.png';

    const styles = StyleSheet.create({
        page: {
            flexDirection: 'column',
            padding: '10 30',
        },
        header: {
            marginBottom: 10,
            backgroundColor: '#f5f5f5',
        },
        logo: {
            width: 150,
            height: 60,
            margin: 'auto',
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
            marginVertical: 200,
        },
        subtitle: {
            fontSize: 24,
            fontWeight: 'bold',
            marginVertical: 5,
        },
        content: {
            marginVertical: 10,
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
            margin: '0 auto',
            width: 500,
            height: 350,
        },
        imageTitle: {
            marginTop: 10,
            fontSize: 14,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 10
        }
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
        <View>
            <View style={styles.header}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: logoImage,
                        method: 'GET',
                        headers: {},
                        body: '',
                    }}
                />
            </View>
            <View style={styles.horizontalLine}></View>
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
                                <Text style={[styles.tableCell, rowHeaders[rowIndex] === 'Bereinigter EBIT' ? { color: '#ffc658' } : null]}>
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

    return (
        <Document>
            <Page style={[styles.page, { backgroundColor: '#1abc9c' }]}>
                <Header />
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
                <Text style={[styles.content,  { marginBottom: 0 }]}>
                    Die Anwendung von Multiples zur Bewertung von Unternehmen ist in der Praxis weit verbreitet.
                    Sie ermöglichen den Vergleich mit bereits verkauften Unternehmen. Dabei wird der Verkaufspreis
                    als ein Vielfaches (Multiple) einer bestimmten Basisgröße, wie beispielsweise des Umsatzes oder
                    Gewinns des Unternehmens, betrachtet. Bei der Berechnung des Multiplikators durch Orgaplan Beratung
                    basieren wir auf Markt­daten, die wir für vergleichbare Unternehmen (Branche, Größe) beobachtet
                    haben, sowie auf den spezifischen Angaben Ihres Unternehmens. Der EBIT (Ergebnis vor Zinsen und
                    Steuern) wird bei der Bewertung von mittelständischen Unternehmen um Sonderfaktoren und mögliche
                    Kompensationen aufgrund der Unternehmensführung bereinigt, da andernfalls das Ergebnis erheblich
                    verfälscht werden könnte. Der Umsatz-Multiple dient in diesem Bewertungsprozess als zusätzliche
                    Information, hat jedoch in der Regel eine geringere Aussagekraft und wird entsprechend weniger
                    stark gewichtet.
                </Text>
                <Image
                    style={[styles.image]}
                    source={{
                        uri: brancheRadar,
                        method: 'GET',
                        headers: {},
                        body: '',
                    }}
                />
                <Text style={styles.imageTitle}>Abbildung 1: Wertfaktor von EBIT und Umsatz</Text>
                <PageNumber pageNumber="2" />
            </Page>
            <Page style={styles.page}>
                <Header />
                <Text style={styles.subtitle}>4. Details zu qualitativen Werttreibern</Text>
                <Text style={styles.content}>
                    Um die Vergleichbarkeit mit ähnlichen Unternehmen herzustellen, werden Zu- und Abschläge verwendet,
                    um Branchen-Multiples zu ermitteln. Bei einer gründlichen Analyse sollten idealerweise eine Vielzahl
                    von Faktoren berücksichtigt und von einem externen Berater analysiert werden. Dies ist wichtig für
                    eine aussagekräftige Bewertung, da der Unternehmer sonst sowohl Akteur als auch Betroffener ist.
                    Der Orgaplan Beratung Firmenwertrechner dient lediglich als erster Anhaltspunkt und fragt daher nur
                    nach den qualitativen Kriterien, die unserer Erfahrung nach die größten Auswirkungen auf den
                    Kaufpreis haben.
                </Text>

                <Text style={styles.content}>Durch Bewertung und Verbesserung der Qualität kann ein Unternehmen seinen Wert steigern. Qualität spielt eine wichtige Rolle bei der Bestimmung des Wettbewerbs und des Gewinnpotenzials eines Unternehmens sowie bei der Anziehung von Investitionen und dem Aufbau von Vertrauen bei Kunden und Stakeholdern.</Text>

                <Text style={[styles.subtitle, { fontSize: 18 }]}>4.1 Klumpenrisiken</Text>
                <Text style={styles.content}>Bewertung des Ausmaßes der Abhängigkeit des Unternehmens von wenigen wichtigen Kunden. Wenn ein Unternehmen nur von wenigen Kunden abhängig ist, besteht ein höheres Risiko, wenn diese Kunden verloren gehen. Ein Unternehmen mit hoher Qualität hat eine vielfältige Kundenbasis und ist nicht stark von wenigen wichtigen Kunden abhängig.</Text>

                <Text style={[styles.subtitle, { fontSize: 18 }]}>4.2 Abhängigkeit vom Unternehmer</Text>
                <Text style={styles.content}>Bestimmung des Maßes, in dem das Unternehmen von entscheidenden Unternehmensinhabern abhängt. Ein Unternehmen mit hoher Qualität hat die Fähigkeit, unabhängig von der Anwesenheit der Schlüsselunternehmer zu überleben und zu wachsen. Dies gewährleistet Nachhaltigkeit und die Fähigkeit zur Machtübertragung in der Zukunft.</Text>

                <PageNumber pageNumber="3" />
            </Page>

            <Page style={styles.page}>
                <Header />
                <Text style={styles.subtitle}>5. Vom Unternehmenswert zum Kaufpreis mittels Equity Bridge</Text>
                <Text style={styles.content}>
                    Der Unternehmenswertrechner ermittelt den Gesamtunternehmenswert, auch als Enterprise Value bezeichnet, des Zielunternehmens anhand von normalisierten Kennzahlen (EBIT) und unter Verwendung branchenüblicher Multiplikatoren. Dieser Wert wird durch qualitative Faktoren angepasst, um die Vergleichbarkeit mit anderen Unternehmen der Branche zu erhöhen.
                </Text>

                <Text style={styles.content}>
                    Der Enterprise Value entspricht nicht dem Kaufpreis, sondern repräsentiert ausschließlich den Wert
                    der operativen Vermögenswerte (Assets) des Unternehmens. Um den Wert des Eigenkapitals zu ermitteln,
                    werden die finanziellen Verbindlichkeiten und andere Faktoren vom Enterprise Value subtrahiert und
                    Barmittel und ähnliche Werte addiert. Es kann erhebliche Unterschiede zwischen dem ermittelten
                    Enterprise Value und dem Kaufpreis für Unternehmensanteile, dem sogenannten Equity Value, geben.
                    Diese Unterschiede hängen unter anderem von der Finanzierung des Zielunternehmens ab. Ohne diese
                    Betrachtung würden Unternehmen mit unterschiedlichen Fremdfinanzierungsgraden immer den gleichen Wert haben.
                </Text>

                <Text style={styles.content}>
                    Das folgende Schaubild veranschaulicht die Vorgehensweise der Equity Bridge.
                </Text>
                <PageNumber pageNumber="4" />
            </Page>
        </Document>
    );
};

export default MyDocument;
