import React from 'react';
import { Container, Header as SemanticHeader, Icon, Grid } from 'semantic-ui-react';
import './Home.scss';

const Home = () => {
    return (
        <div className="Home">
            <Container text textAlign="center" className="home-container">
                <SemanticHeader as="h1" className="home-header">
                    <Icon name="home" /> Willkommen auf unserer Webseite
                </SemanticHeader>
                <Grid stackable columns={2} className="home-grid">
                    <Grid.Row>
                        <Grid.Column>
                            <p className="home-text">
                                <Icon name="check" /> Orgaplan Beratung erkennt die Bedeutung des Unternehmenswerts für das Geschäft.
                                Der Unternehmenswert (Enterprise Value) ist ein wichtiger Indikator, der den Gesamtwert eines Unternehmens repräsentiert.
                                Er wird berechnet, indem der Marktwert aller Aktien und Anleihen sowie Schulden addiert und der Bargeld- und äquivalente Geldbeträge abgezogen werden.
                            </p>
                        </Grid.Column>
                        <Grid.Column>
                            <p className="home-text">
                                <Icon name="check" /> Orgaplan Beratung konzentriert sich darauf, die Leistung und Rentabilität zu verbessern, um den Unternehmenswert zu steigern.
                                Das Unternehmen trifft strategische Entscheidungen zur Produktentwicklung, Kundengewinnung und Erweiterung des Dienstleistungsportfolios, um Umsatz und Gewinn zu steigern.
                                Indem dies erreicht wird, kann Orgaplan Beratung den Unternehmenswert erhöhen und die Attraktivität für Investoren steigern.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <p className="home-text">
                                <Icon name="check" /> Darüber hinaus legt Orgaplan Beratung großen Wert auf den Aufbau einer starken Marktposition und einer positiven Unternehmenskultur.
                                Durch Bereitstellung hochwertiger Dienstleistungen und den Aufbau langfristiger Kundenbeziehungen schafft das Unternehmen Vertrauen und Wettbewerbsfähigkeit auf dem Markt.
                                Dies hat eine positive Auswirkung auf den Unternehmenswert und stärkt das Vertrauen von Investoren und Kunden.
                            </p>
                        </Grid.Column>
                        <Grid.Column>
                            <p className="home-text">
                                <Icon name="check" /> Auf dieser Homepage haben wir eine Methode zur Berechnung des Unternehmenswerts anhand wichtiger Kriterien wie Branche, Unternehmensalter, Umsatz, EBIT, Gewinn, Equity Bridge und Qualität entwickelt.
                                Sie können dies tun, indem Sie die relevanten Informationen im Abschnitt "Unternehmenswert berechnen" eingeben, und das Ergebnis des Unternehmenswerts wird Ihnen als PDF-Datei per E-Mail zugesandt.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    );
};

export default Home;
