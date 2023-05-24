import React from 'react';
import { Grid, Header, Divider, Form, Select, Label, Button } from 'semantic-ui-react';
import './Test.scss';

const Test = () => {
    return (
        <Grid padded className="Test">
            <Grid.Column>
                <Header as="h2">5. Qualitative Anpassungen</Header>
                <Divider />
                <Form>
                    <div className="row mb-1">
                        <div className="col-12">
                            <h3>1. Klumpenrisiken</h3>
                            <label htmlFor="kundenabhaengigkeit" className="form-label">
                                Abhängigkeit zum Kunden<span className="required-mark"></span>{' '}
                            </label>
                            <Select
                                className="form-select"
                                name="kundenabhaengigkeit"
                                required
                                placeholder="Bitte auswählen"
                                options={[
                                    {
                                        value: '0.7',
                                        label: 'Das Unternehmen hat eine starke Abhängigkeit zu den besten drei Kunden.',
                                    },
                                    {
                                        value: '1',
                                        label: 'Das Unternehmen hat eine moderate Abhängigkeit zu den besten drei Kunden.',
                                    },
                                    {
                                        value: '1.2',
                                        label:
                                            'Das Unternehmen hat einen sehr diversifizierten Kundenstamm und eine schwache Abhängigkeit gegenüber den besten drei Kunden.',
                                    },
                                ]}
                            />
                            <div className="invalid-feedback">Das ist ein Pflichtfeld</div>
                        </div>
                    </div>
                    <div className="row mb-1">
                        <div className="col-12">
                            <label htmlFor="mitarbeiterabhaengigkeit" className="form-label">
                                Abhängigkeit zu den wichtigsten Mitarbeitern<span className="required-mark"></span>{' '}
                            </label>
                            <Select
                                className="form-select"
                                name="mitarbeiterabhaengigkeit"
                                required
                                placeholder="Bitte auswählen"
                                options={[
                                    {
                                        value: '0.7',
                                        label: 'Die wichtigsten Mitarbeiter wären nur schwer zu ersetzen.',
                                    },
                                    {
                                        value: '1',
                                        label: 'Die wichtigsten Mitarbeiter wären innerhalb eines Jahres ersetzbar.',
                                    },
                                    {
                                        value: '1.2',
                                        label: 'Die wichtigsten Mitarbeiter wären in unter einer Woche erstetzbar.',
                                    },
                                ]}
                            />
                            <div className="invalid-feedback">Das ist ein Pflichtfeld</div>
                        </div>
                    </div>
                    <div className="row mb-1">
                        <div className="col-12">
                            <label htmlFor="lieferantenabhaengigkeit" className="form-label">
                                Abhängigkeit zu Lieferanten<span className="required-mark"></span>{' '}
                            </label>
                            <Select
                                className="form-select"
                                name="lieferantenabhaengigkeit"
                                required
                                placeholder="Bitte auswählen"
                                options={[
                                    {
                                        value: '0.7',
                                        label: 'Wenn ein Lieferant ausfällt, lässt sich dieser kaum ersetzen.',
                                    },
                                    {
                                        value: '1',
                                        label: 'Wenn ein Lieferant ausfällt, lässt dieser sich innerhalb eines Monats ersetzen.',
                                    },
                                    {
                                        value: '1.2',
                                        label: 'Das Unternehmen hat keine Abhängigkeit zu seinen Lieferanten.',
                                    },
                                ]}
                            />
                            <div className="invalid-feedback">Das ist ein Pflichtfeld</div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-12">
                            <label htmlFor="produktdiversifikation" className="form-label">
                                Produktdiversifikation<span className="required-mark"></span>{' '}
                            </label>
                            <Select
                                className="form-select"
                                name="produktdiversifikation"
                                required
                                placeholder="Bitte auswählen"
                                options={[
                                    {
                                        value: '1.1',
                                        label:
                                            'Das Unternehmen ist gut diversifiziert und bietet Produkte in mehreren Kategorien / Branchen an.',
                                    },
                                    {
                                        value: '0.7',
                                        label: 'Das Unternehmen ist spezialisiert auf eine Produktkategorie.',
                                    },
                                ]}
                            />
                            <div className="invalid-feedback">Das ist ein Pflichtfeld</div>
                        </div>
                    </div>
                    <div className="row mb-1">
                        <div className="col-12">
                            <h3>2. Abhängigkeit zum Unternehmer</h3>
                            <label htmlFor="tagesgeschaeft" className="form-label">
                                Einbindung ins Tagesgeschäft<span className="required-mark"></span>{' '}
                            </label>
                            <Select
                                className="form-select"
                                name="tagesgeschaeft"
                                required
                                placeholder="Bitte auswählen"
                                options={[
                                    {
                                        value: '1.2',
                                        label: 'Der Unternehmer kann sich intensiv mit strategischen Fragen befassen.',
                                    },
                                    {
                                        value: '1',
                                        label: 'Der Unternehmer muss einen großen Teil seiner Zeit dem Tagesgeschäft widmen.',
                                    },
                                    {
                                        value: '0.7',
                                        label:
                                            'Der Unternehmer hat kaum Zeit für strategische Fragen, da das Tagesgeschäft einen Großteil seiner Zeit fordert.',
                                    },
                                ]}
                            />
                            <div className="invalid-feedback">Das ist ein Pflichtfeld</div>
                        </div>
                    </div>
                    <div className="row mb-1">
                        <div className="col-12">
                            <label htmlFor="fernbleiben" className="form-label">
                                Wie lange können Sie vom Unternehmen fern bleiben<span className="required-mark"></span>{' '}
                            </label>
                            <Select
                                className="form-select"
                                name="fernbleiben"
                                required
                                placeholder="Bitte auswählen"
                                options={[
                                    { value: '0.65', label: '3 Tage' },
                                    { value: '0.85', label: '3 Wochen' },
                                    { value: '1.2', label: '3 Monate' },
                                    { value: '1.5', label: '3 Jahre' },
                                ]}
                            />
                            <div className="invalid-feedback">Das ist ein Pflichtfeld</div>
                        </div>
                    </div>
                    <div className="row mb-1">
                        <div className="col-12">
                            <label htmlFor="absenz" className="form-label">
                                Unerwartete Absenz<span className="required-mark"></span>{' '}
                            </label>
                            <Select
                                className="form-select"
                                name="absenz"
                                required
                                placeholder="Bitte auswählen"
                                options={[
                                    {
                                        value: '1.3',
                                        label:
                                            'Eine unerwartete Absenz des Unternehmers von mehreren Monaten hätte keinen großen Einfluss auf das Unternehmen.',
                                    },
                                    {
                                        value: '1',
                                        label:
                                            'Eine unerwartete Absenz des Unternehmers von mehreren Monaten würde zu Problemen bei unerwarteten Geschäftsvorfällen führen.',
                                    },
                                    {
                                        value: '0.7',
                                        label: 'Eine unerwartete Absenz des Unternehmers von mehreren Monaten wäre sehr schwierig.',
                                    },
                                ]}
                            />
                            <div className="invalid-feedback">Das ist ein Pflichtfeld</div>
                        </div>
                    </div>
                    <div className="row mb-1">
                        <div className="col-12">
                            <label htmlFor="kundenbeziehung" className="form-label">
                                Beziehung zu den Kunden<span className="required-mark"></span>{' '}
                            </label>
                            <Select
                                className="form-select"
                                name="kundenbeziehung"
                                required
                                placeholder="Bitte auswählen"
                                options={[
                                    {
                                        value: '0.7',
                                        label:
                                            'Der Unternehmer kennt den Großteil der Kunden persönlich und diese erwarten, dass dieser sich persönlich um sie kümmert.',
                                    },
                                    {
                                        value: '1',
                                        label:
                                            'Der Unternehmer kennt zwar einen großen Teil der Kunden persönlich, diese erwarten aber nicht, dass dieser sich persönlich um sie kümmert.',
                                    },
                                    {
                                        value: '1.2',
                                        label: 'Der Unternehmer kennt kaum Kunden persönlich.',
                                    },
                                ]}
                            />
                            <div className="invalid-feedback">Das ist ein Pflichtfeld</div>
                        </div>
                    </div>
                    <p className="required-fields-hint">
                        <span className="required">*</span>Diese Eingaben sind Pflichtfelder
                    </p>
                    <div className="step-buttons">
                        <Button className="btn btn-secondary step-button prev" data-target="anlass">
                            Zurück
                        </Button>
                        <Button className="btn btn-secondary step-button next" data-target="equity">
                            Weiter
                        </Button>
                    </div>
                </Form>
            </Grid.Column>
        </Grid>
    );
};

export default Test;