import React, { useState } from 'react';
import { Grid, Header, Form, Input, Popup, Divider, Icon, Segment, Label } from 'semantic-ui-react';

const Bereinigung = () => {
    const [popoverData, setPopoverData] = useState({
        showPopover1: false,
        showPopover2: false,
    });

    const handlePopupOpen = (popover) => {
        setPopoverData((prevState) => ({ ...prevState, [popover]: true }));
    };

    const handlePopupClose = (popover) => {
        setPopoverData((prevState) => ({ ...prevState, [popover]: false }));
    };

    const handleInputChange = (e) => {
        // Handle logic when the input changes here
    };

    const renderPopupTrigger = (popover) => (
        <span className="question-mark-icon" onClick={() => handlePopupOpen(popover)}>
            <Icon name="question circle" />
        </span>
    );

    const renderFormFields = () => {
        const years = ['2020', '2021', '2022', '2023 (Prognose)'];
        return (
            <Grid>
                {years.map((year, index) => (
                    <Grid.Column key={index} width={4}>
                        <Form.Field>
                            <label htmlFor={`gehalt[${index}]`} className="form-label">
                                {year}
                            </label>
                            <Input
                                type="text"
                                className="form-text input-number ebit-clean-calc"
                                name={`gehalt[${index}]`}
                                required
                                pattern="\d*"
                                data-gtm-form-interact-field-id={index + 12}
                                onChange={handleInputChange}
                            />
                            <div className="invalid-feedback negative-number" style={{ display: 'none' }}>
                                Keine negativen Eingaben erlaubt.
                            </div>
                            <div className="invalid-feedback">Das ist ein Pflichtfeld</div>
                        </Form.Field>
                    </Grid.Column>
                ))}
            </Grid>
        );
    };

    const renderAdditionalAdjustments = () => {
        const years = ['2020', '2021', '2022', '2023 (Prognose)'];
        return (
            <Grid>
                {years.map((year, index) => (
                    <Grid.Column key={index} width={4}>
                        <Form.Field>
                            <label htmlFor={`anpassungEbit[${index}]`} className="form-label">
                                Anpassung {year}
                            </label>
                            <Input
                                type="text"
                                className="form-text input-number not-required negative ebit-clean-calc"
                                name={`anpassungEbit[${index}]`}
                                onChange={handleInputChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label className="form-label">Bereinigtes EBIT</label>
                            <Input
                                type="text"
                                className="form-text input-number not-required disabled-all"
                                name={`bereinigungEbit[${index}]`}
                                onChange={handleInputChange}
                            />
                            <div className="invalid-feedback negative-number" style={{ display: 'none' }}>
                                Keine negativen Eingaben erlaubt.
                            </div>
                        </Form.Field>
                    </Grid.Column>
                ))}
                <Form.Field>
                    <label className="form-label" htmlFor="erklaerungAnpassungEbit">
                        Fassen Sie die oben gemachten Anpassungen kurz in eigenen Worten zusammen. Dies erscheint als Notiz auf dem Firmenwert-Report.
                    </label>
                    <Input className="form-text erklaerungAnpassungEbit" type="text" name="erklaerungAnpassungEbit" />
                </Form.Field>
            </Grid>
        );
    };

    return (
        <Grid padded className="shared-section bereinigung">
            <Grid.Column>
                <Header as="h2">3. Bereinigung des EBITs</Header>
                <Divider />
                <Segment>
                    <Form>
                        <Form.Field>
                            <h3>
                                Ausgezahlte Vergütung der Geschäftsführung in EUR
                                <span className="required-mark">*</span>
                                <Popup
                                    content="Als Bruttolohn inklusive allen Arbeitgeberkosten"
                                    position="top center"
                                    trigger={renderPopupTrigger('showPopover1')}
                                    open={popoverData.showPopover1}
                                    onOpen={() => handlePopupOpen('showPopover1')}
                                    onClose={() => handlePopupClose('showPopover1')}
                                />
                            </h3>
                            {renderFormFields()}
                        </Form.Field>

                        <Divider />

                        <Form.Field>
                            <h3>
                                Branchenübliche Vergütung einer angestellten Geschäftsführung in EUR
                                <span className="required-mark">*</span>
                                <Popup
                                    content="Falls man einen (neuen) externen Geschäftsführer zu Marktbedingungen einstellen müsste, wie hoch wären dafür die gesamten Personalkosten pro Jahr etwa (Bruttolohn inklusive allen Arbeitgeberkosten)?"
                                    position="top center"
                                    trigger={renderPopupTrigger('showPopover2')}
                                    open={popoverData.showPopover2}
                                    onOpen={() => handlePopupOpen('showPopover2')}
                                    onClose={() => handlePopupClose('showPopover2')}
                                />
                            </h3>
                            <label htmlFor="typischGehalt" className="form-label">
                                Branchenübliche Vergütung
                            </label>
                            <Input
                                type="text"
                                className="form-text input-number ebit-clean-calc"
                                name="typischGehalt"
                                required
                                pattern="\d*"
                                data-gtm-form-interact-field-id={16}
                                onChange={handleInputChange}
                            />
                            <div className="invalid-feedback negative-number" style={{ display: 'none' }}>
                                Keine negativen Eingaben erlaubt.
                            </div>
                            <div className="invalid-feedback">Das ist ein Pflichtfeld</div>
                        </Form.Field>

                        <Divider />

                        <Form.Field>
                            <h3>
                                Sonstige Bereinigungen des EBITs<span className="required-mark">*</span>
                            </h3>
                            <p>
                                Kleine und mittelständische Unternehmen weisen in der Regel einen zu niedrigen Gewinn aus. Dies liegt einerseits an der Bestrebung des
                                Unternehmers seine Steuerlast zu reduzieren andererseits, da bei inhabergeführten Betrieben teilweise private und betriebliche Ebenen
                                vermischt werden. Um die wirkliche Ertragskraft des Unternehmens für einen Käufer aufzuzeigen und ein repräsentatives Ergebnis in der
                                Unternehmensbewertung zu erhalten, muss der EBIT bereinigt werden. Ziel ist es die tatsächliche Ertragskraft des Unternehmens zu
                                ermitteln.
                            </p>
                            <p>
                                Folgend sind mögliche Gründe für eine Bereinigung des EBITS aufgelistet.{' '}
                                <strong>Das Bereinigen des EBITS ist für ein erstes Ergebnis nicht notwendig und kann übersprungen werden</strong>. Das sorgfältige
                                Bereinigen würde jedoch den Unternehmenswert repräsentativer machen.
                            </p>
                            <ul>
                                <li>
                                    Hinzurechnen von nicht betriebsnotwendigen Aufwendungen, z.B. private Ausgaben wie Reisespesen, Kfz-Kosten, Handyrechnungen, Löhne
                                    für Angestellte und Familienmitglieder etc.
                                </li>
                                <li>Außerordentliche Abschreibungen</li>
                                <li>Außerordentliche Erträge und / oder außerordentliche Aufwendungen</li>
                                <li>Bildung von außerordentlichen Rückstellungen oder Auflösung derselben</li>
                                <li>Mieten und Pachten an Gesellschafter oder nahestehende Personen die nicht marktüblich sind.</li>
                                <li>
                                    Gehälter von Gesellschaftern oder diesen nahen stehenden Personen, einschließlich Nebenleistungen u. ä. die oberhalb des marktüblichen
                                    Niveaus sind und quasi teilweise Gewinnvorwegentnahmecharakter haben.
                                </li>
                                <li>
                                    Gehälter einschließlich Nebenleistungen von Arbeitnehmern, die in enger persönlicher oder verwandtschaftlicher Beziehung zu Gesellschaftern
                                    stehen oder die selbst Gesellschafter sind, die oberhalb des marktüblichen Niveaus sind und quasi teilweise Gewinnvorwegentnahmecharakter
                                    haben.
                                </li>
                            </ul>

                            <p> Bitte geben Sie hier sonstige außerplanmäßige Einnahmen oder Ausgaben ("-") in EUR an, um den EBIT zu bereinigen.</p>

                            {renderAdditionalAdjustments()}
                        </Form.Field>
                        <Form.Field>
                            <p>* Diese Eingaben sind Pflichtfelder</p>
                        </Form.Field>
                    </Form>
                </Segment>
            </Grid.Column>
        </Grid>
    );
};

export default Bereinigung;
