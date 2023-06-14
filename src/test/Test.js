import React from 'react';
import { Grid, Header, Divider, Form, Container, Segment, Input, Button, Checkbox } from 'semantic-ui-react';
import './Test.scss';

const Test = () => {
    return (
        <Container as="section" className="container-section">
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Header as="h2" size="xl" className="header-xl">
                            Der Wert Ihres Unternehmens beträgt:
                        </Header>
                        <Segment className="value-segment">
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column>
                                        <p>€31.396.921</p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as="h2" size="xl" className="pdf-header-xl">
                            Laden Sie jetzt Ihren <br />persönlichen PDF-Bericht <br />herunter
                        </Header>
                        <Segment className="pdf-segment">
                            <p>Anonym, kostenlos und unverbindlich</p>
                        </Segment>
                        <Divider />
                        <Segment className="form-segment">
                            <Grid>
                                <Form>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Form.Field>
                                                <label className="email-label">Ihre E-Mail Adresse</label>
                                                <Input type="email" name="email" required className="email-input" />
                                                <Segment className="email-error-segment">
                                                    Das ist ein Pflichtfeld
                                                </Segment>
                                            </Form.Field>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Button type="submit" className="submit-button">Bericht anfragen</Button>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Form.Field>
                                                <Checkbox id="invalidCheck" required />
                                                <label htmlFor="invalidCheck" className="checkbox-label">
                                                    Hiermit erkläre ich mich mit der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage gemäß der <a href="https://everto-consulting.de/datenschutz/" target="_blank" title="Zur Datenschutzerklärung">Datenschutzerklärung</a> einverstanden.
                                                </label>
                                                <Segment>
                                                    Bitte akzeptieren Sie die Datenschutzbestimmungen
                                                </Segment>
                                            </Form.Field>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Form>
                            </Grid>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default Test;