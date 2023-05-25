import React from 'react';
import { Grid, Header, Divider, Form, Select, Label, Button } from 'semantic-ui-react';

const Quality = () => {
    return (
        <Grid padded className="shared-section quality">
            <Grid.Column>
                <Header as="h2">5. Qualitative Anpassungen</Header>
                <Divider />
                <Form>
                    <Form.Group>
                        <Form.Field>
                            <h3>1. Klumpenrisiken</h3>
                            <Label htmlFor="kundenabhaengigkeit" className="form-label">
                                Abhängigkeit zum Kunden<span className="required-mark">*</span>
                            </Label>
                            <Form.Select
                                className="form-select"
                                name="kundenabhaengigkeit"
                                placeholder="Bitte auswählen"
                                options={[
                                    {
                                        value: '0.7',
                                        text: 'Das Unternehmen hat eine starke Abhängigkeit zu den besten drei Kunden.',
                                    },
                                    {
                                        value: '1',
                                        text: 'Das Unternehmen hat eine moderate Abhängigkeit zu den besten drei Kunden.',
                                    },
                                    {
                                        value: '1.2',
                                        text:
                                            'Das Unternehmen hat einen sehr diversifizierten Kundenstamm und eine schwache Abhängigkeit gegenüber den besten drei Kunden.',
                                    },
                                ]}
                            />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group>
                        <Form.Field>
                            <Label htmlFor="mitarbeiterabhaengigkeit" className="form-label">
                                Abhängigkeit zu den wichtigsten Mitarbeitern<span className="required-mark">*</span>
                            </Label>
                            <Form.Select
                                className="form-select"
                                name="mitarbeiterabhaengigkeit"
                                placeholder="Bitte auswählen"
                                options={[
                                    {
                                        value: '0.7',
                                        text: 'Die wichtigsten Mitarbeiter wären nur schwer zu ersetzen.',
                                    },
                                    {
                                        value: '1',
                                        text: 'Die wichtigsten Mitarbeiter wären innerhalb eines Jahres ersetzbar.',
                                    },
                                    {
                                        value: '1.2',
                                        text: 'Die wichtigsten Mitarbeiter wären in unter einer Woche erstetzbar.',
                                    },
                                ]}
                            />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group>
                        <Form.Field>
                            <Label htmlFor="lieferantenabhaengigkeit" className="form-label">
                                Abhängigkeit zu Lieferanten<span className="required-mark">*</span>
                            </Label>
                            <Form.Select
                                className="form-select"
                                name="lieferantenabhaengigkeit"
                                placeholder="Bitte auswählen"
                                options={[
                                    {
                                        value: '0.7',
                                        text: 'Wenn ein Lieferant ausfällt, lässt sich dieser kaum ersetzen.',
                                    },
                                    {
                                        value: '1',
                                        text: 'Wenn ein Lieferant ausfällt, lässt dieser sich innerhalb eines Monats ersetzen.',
                                    },
                                    {
                                        value: '1.2',
                                        text: 'Das Unternehmen hat keine Abhängigkeit zu seinen Lieferanten.',
                                    },
                                ]}
                            />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group>
                        <Form.Field>
                            <Label htmlFor="produktdiversifikation" className="form-label">
                                Produktdiversifikation<span className="required-mark">*</span>
                            </Label>
                            <Form.Select
                                className="form-select"
                                name="produktdiversifikation"
                                placeholder="Bitte auswählen"
                                options={[
                                    {
                                        value: '1.1',
                                        text: 'Das Unternehmen ist gut diversifiziert und bietet Produkte in mehreren Kategorien / Branchen an.',
                                    },
                                    {
                                        value: '0.7',
                                        text: 'Das Unternehmen ist spezialisiert auf eine Produktkategorie.',
                                    },
                                ]}
                            />
                        </Form.Field>
                    </Form.Group>

                    <Divider />

                    <Form.Group>
                        <Form.Field>
                            <h3>2. Abhängigkeit zum Unternehmer</h3>
                            <Label htmlFor="tagesgeschaeft" className="form-label">
                                Einbindung ins Tagesgeschäft<span className="required-mark">*</span>
                            </Label>
                            <Form.Select
                                className="form-select"
                                name="tagesgeschaeft"
                                placeholder="Bitte auswählen"
                                options={[
                                    {
                                        value: '1.2',
                                        text: 'Der Unternehmer kann sich intensiv mit strategischen Fragen befassen.',
                                    },
                                    {
                                        value: '1',
                                        text: 'Der Unternehmer muss einen großen Teil seiner Zeit dem Tagesgeschäft widmen.',
                                    },
                                    {
                                        value: '0.7',
                                        text: 'Der Unternehmer hat kaum Zeit für strategische Fragen, da das Tagesgeschäft einen Großteil seiner Zeit fordert.',
                                    },
                                ]}
                            />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group>
                        <Form.Field>
                            <Label htmlFor="fernbleiben" className="form-label">
                                Wie lange können Sie vom Unternehmen fern bleiben<span className="required-mark">*</span>
                            </Label>
                            <Form.Select
                                className="form-select"
                                name="fernbleiben"
                                placeholder="Bitte auswählen"
                                options={[
                                    { value: '0.65', text: '3 Tage' },
                                    { value: '0.85', text: '3 Wochen' },
                                    { value: '1.2', text: '3 Monate' },
                                    { value: '1.5', text: '3 Jahre' },
                                ]}
                            />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group>
                        <Form.Field>
                            <Label htmlFor="absenz" className="form-label">
                                Unerwartete Absenz<span className="required-mark">*</span>
                            </Label>
                            <Form.Select
                                className="form-select"
                                name="absenz"
                                placeholder="Bitte auswählen"
                                options={[
                                    {
                                        value: '1.3',
                                        text: 'Eine unerwartete Absenz des Unternehmers von mehreren Monaten hätte keinen großen Einfluss auf das Unternehmen.',
                                    },
                                    {
                                        value: '1',
                                        text: 'Eine unerwartete Absenz des Unternehmers von mehreren Monaten würde zu Problemen bei unerwarteten Geschäftsvorfällen führen.',
                                    },
                                    {
                                        value: '0.7',
                                        text: 'Eine unerwartete Absenz des Unternehmers von mehreren Monaten wäre sehr schwierig.',
                                    },
                                ]}
                            />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group>
                        <Form.Field>
                            <Label htmlFor="kundenbeziehung" className="form-label">
                                Beziehung zu den Kunden<span className="required-mark">*</span>
                            </Label>
                            <Form.Select
                                className="form-select"
                                name="kundenbeziehung"
                                placeholder="Bitte auswählen"
                                options={[
                                    {
                                        value: '0.7',
                                        text: 'Der Unternehmer kennt den Großteil der Kunden persönlich und diese erwarten, dass dieser sich persönlich um sie kümmert.',
                                    },
                                    {
                                        value: '1',
                                        text: 'Der Unternehmer kennt zwar einen großen Teil der Kunden persönlich, diese erwarten aber nicht, dass dieser sich persönlich um sie kümmert.',
                                    },
                                    {
                                        value: '1.2',
                                        text: 'Der Unternehmer kennt kaum Kunden persönlich.',
                                    },
                                ]}
                            />
                        </Form.Field>
                    </Form.Group>
                </Form>
            </Grid.Column>
        </Grid>
    );
};

export default Quality;