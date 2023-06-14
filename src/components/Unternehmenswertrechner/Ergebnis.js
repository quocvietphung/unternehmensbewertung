import React from 'react';
import { Container, Grid, Header, Form, Input, Checkbox, Button } from 'semantic-ui-react';

const Ergebnis = () => {
    return (
        <section data-particle_enable="false" data-particle-mobile-disabled="false" className="er-section er-inner-section er-element er-element-be4ed81 er-section-full_width er-section-content-middle er-section-height-default er-section-height-default" data-id="be4ed81" data-element_type="section">
            <Container className="er-container er-column-gap-default">
                <Grid className="er-row">
                    <Grid.Column className="er-column er-col-50 er-inner-column er-element er-element-719936b" data-id="719936b" data-element_type="column">
                        <div className="er-column-wrap er-element-populated">
                            <div className="er-widget-wrap">
                                <Header className="er-element er-element-376e43f er-widget er-widget-heading" as="h2" size="xl" data-id="376e43f" data-element_type="widget" data-widget_type="heading.default">
                                    Der Wert Ihres Unternehmens beträgt:
                                </Header>
                                <div className="er-element er-element-020770e er-widget er-widget-shortcode" data-id="020770e" data-element_type="widget" data-widget_type="shortcode.default">
                                    <div className="er-widget-container">
                                        <div className="er-result-page">
                                            <div className="er-result">
                                                <div className="er-text">
                                                    <p className="er-unternehmenswert">€31.396.921</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid.Column>
                    <Grid.Column className="er-column er-col-50 er-inner-column er-element er-element-6b37ac9" data-id="6b37ac9" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="er-column-wrap er-element-populated">
                            <div className="er-widget-wrap">
                                <Header className="er-element er-element-57ef672 er-widget er-widget-heading" as="h2" size="xl" data-id="57ef672" data-element_type="widget" data-widget_type="heading.default">
                                    Laden Sie jetzt Ihren <br />persönlichen PDF-Bericht <br />herunter
                                </Header>
                                <div className="er-element er-element-3405483 er-widget er-widget-text-editor" data-id="3405483" data-element_type="widget" data-widget_type="text-editor.default">
                                    <div className="er-widget-container">
                                        <div className="er-text-editor er-clearfix">
                                            <p>Anonym, kostenlos und unverbindlich</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="er-element er-element-37e2ff4 er-widget er-widget-divider--view-line er-widget er-widget-divider" data-id="37e2ff4" data-element_type="widget" data-widget_type="divider.default">
                                    <div className="er-widget-container">
                                        <div className="er-divider">
                                            <span className="er-divider-separator"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="er-element er-element-77a5eae er-widget er-widget-shortcode" data-id="77a5eae" data-element_type="widget" data-widget_type="shortcode.default">
                                    <div className="er-widget-container">
                                        <div className="er-result-page">
                                            <div className="er-result">
                                                <Form id="evertoMailInputForm" className="er-needs-validation er-my-4" noValidate>
                                                    <Grid className="er-align-items-end er-mb-3">
                                                        <Grid.Column mobile={16} tablet={8} computer={8}>
                                                            <Form.Field>
                                                                <label htmlFor="eMail" className="er-form-label">Ihre E-Mail Adresse</label>
                                                                <Input type="email" id="eMail" name="email" required />
                                                                <div className="er-invalid-feedback">
                                                                    Das ist ein Pflichtfeld
                                                                </div>
                                                            </Form.Field>
                                                        </Grid.Column>
                                                        <Grid.Column mobile={16} tablet={8} computer={4}>
                                                            <Button className="er-btn-primary er-d-block er-w-100" type="submit">Bericht anfragen</Button>
                                                        </Grid.Column>
                                                    </Grid>
                                                    <Grid>
                                                        <Grid.Column>
                                                            <Form.Field>
                                                                <Checkbox className="er-form-check-input" id="invalidCheck" required />
                                                                <label className="er-form-check-label" htmlFor="invalidCheck">
                                                                    Hiermit erkläre ich mich mit der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage gemäß der <a href="https://everto-consulting.de/datenschutz/" target="_blank" title="Zur Datenschutzerklärung">Datenschutzerklärung</a> einverstanden.
                                                                </label>
                                                                <div className="er-invalid-feedback">
                                                                    Bitte akzeptieren Sie die Datenschutzbestimmungen
                                                                </div>
                                                            </Form.Field>
                                                        </Grid.Column>
                                                    </Grid>
                                                    <input type="hidden" id="submissionKey" name="submissionKey" value="9a1bc95083d7e9e1b75371c3119b58fe2f2a31c0af7818bf2fe6c52c4dff0df2" />
                                                    <input type="hidden" id="anlass" name="submissionAnlass" value="Unternehmensverkauf" />
                                                </Form>
                                                <div className="er-mail-form-result"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid.Column>
                </Grid>
            </Container>
        </section>
    );
};

export default Ergebnis;
