import React, { useState } from 'react';
import {Grid, Header, Form, Input, Popup, Divider} from 'semantic-ui-react';
import './Test.scss';

const Test = () => {
    const [showPopover1, setShowPopover1] = useState(false);
    const [showPopover2, setShowPopover2] = useState(false);

    const handlePopupOpen1 = () => {
        setShowPopover1(true);
    };

    const handlePopupClose1 = () => {
        setShowPopover1(false);
    };

    const handlePopupOpen2 = () => {
        setShowPopover2(true);
    };

    const handlePopupClose2 = () => {
        setShowPopover2(false);
    };

    return (
        <Grid padded className="Test">
            <Grid.Column>
                <Header as="h2">3. Bereinigung des EBITs</Header>
                <Divider />
                <Form>
                    <Form.Field>
                        <h3>
                            Ausgezahlte Vergütung der Geschäftsführung in EUR
                            <span className="required-mark">*</span>
                            <Popup
                                content="Als Bruttolohn inklusive allen Arbeitgeberkosten"
                                position="top center"
                                trigger={
                                    <span className="question-mark-icon" onClick={handlePopupOpen1}>
            ?
          </span>
                                }
                                open={showPopover1}
                                onOpen={handlePopupOpen1}
                                onClose={handlePopupClose1}
                            />
                        </h3>
                        <label htmlFor="gfGehalt[0]" className="form-label">
                            2020
                        </label>
                        <Form.Input
                            type="text"
                            className="form-text input-number ebit-clean-calc"
                            name="gfGehalt[0]"
                            required
                            pattern="\d*"
                            data-gtm-form-interact-field-id="12"
                        />
                        <div className="invalid-feedback negative-number" style={{ display: 'none' }}>
                            Keine negativen Eingaben erlaubt.
                        </div>
                        <div className="invalid-feedback">Das ist ein Pflichtfeld</div>
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="gfGehalt[1]" className="form-label">
                            2021
                        </label>
                        <Form.Input
                            type="text"
                            className="form-text input-number ebit-clean-calc"
                            name="gfGehalt[1]"
                            required
                            pattern="\d*"
                            data-gtm-form-interact-field-id="13"
                        />
                        <div className="invalid-feedback negative-number" style={{ display: 'none' }}>
                            Keine negativen Eingaben erlaubt.
                        </div>
                        <div className="invalid-feedback">Das ist ein Pflichtfeld</div>
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="gfGehalt[2]" className="form-label">
                            2022
                        </label>
                        <Form.Input
                            type="text"
                            className="form-text input-number ebit-clean-calc"
                            name="gfGehalt[2]"
                            required
                            pattern="\d*"
                            data-gtm-form-interact-field-id="14"
                        />
                        <div className="invalid-feedback negative-number" style={{ display: 'none' }}>
                            Keine negativen Eingaben erlaubt.
                        </div>
                        <div className="invalid-feedback">Das ist ein Pflichtfeld</div>
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="gfGehalt[3]" className="form-label">
                            2023 (Prognose)
                        </label>
                        <Form.Input
                            type="text"
                            className="form-text input-number ebit-clean-calc"
                            name="gfGehalt[3]"
                            pattern="\d*"
                            required
                            data-gtm-form-interact-field-id="15"
                        />
                        <div className="invalid-feedback negative-number" style={{ display: 'none' }}>
                            Keine negativen Eingaben erlaubt.
                        </div>
                        <div className="invalid-feedback">Das ist ein Pflichtfeld</div>
                    </Form.Field>

                    <Form.Field>
                        <h3>
                            Branchenübliche Vergütung einer angestellten Geschäftsführung in EUR
                            <span className="required-mark">*</span>
                            <Popup
                                content="Falls man einen (neuen) externen Geschäftsführer zu Marktbedingungen einstellen müsste, wie hoch wären dafür die gesamten Personalkosten pro Jahr etwa (Bruttolohn inklusive allen Arbeitgeberkosten)?"
                                position="top center"
                                trigger={
                                    <span className="question-mark-icon" onClick={handlePopupOpen2}>
            ?
          </span>
                                }
                                open={showPopover2}
                                onOpen={handlePopupOpen2}
                                onClose={handlePopupClose2}
                            />
                        </h3>
                        <label htmlFor="typischGfGehalt" className="form-label">
                            Branchenübliche Vergütung
                        </label>
                        <Form.Input
                            type="text"
                            className="form-text input-number ebit-clean-calc"
                            name="typischGfGehalt"
                            required
                            pattern="\d*"
                            data-gtm-form-interact-field-id="16"
                        />
                        <div className="invalid-feedback negative-number" style={{ display: 'none' }}>
                            Keine negativen Eingaben erlaubt.
                        </div>
                        <div className="invalid-feedback">Das ist ein Pflichtfeld</div>
                    </Form.Field>

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
                    </Form.Field>

                    <Form.Group>
                        <h3>
                            Bitte geben Sie hier sonstige außerplanmäßige Einnahmen oder Ausgaben ("-") in EUR an, um den EBIT zu bereinigen.
                        </h3>
                        <Form.Field>
                            <label htmlFor="anpassungEbit[0]" className="form-label">
                                Anpassung 2020
                            </label>
                            <Form.Input
                                type="text"
                                className="form-text input-number not-required negative ebit-clean-calc"
                                name="anpassungEbit[0]"
                            />
                        </Form.Field>
                        <Form.Field>
                            <label htmlFor="anpassungEbit[1]" className="form-label">
                                Anpassung 2021
                            </label>
                            <Form.Input
                                type="text"
                                className="form-text input-number not-required negative ebit-clean-calc"
                                name="anpassungEbit[1]"
                            />
                        </Form.Field>
                        <Form.Field>
                            <label htmlFor="anpassungEbit[2]" className="form-label">
                                Anpassung 2022
                            </label>
                            <Form.Input
                                type="text"
                                className="form-text input-number not-required negative ebit-clean-calc"
                                name="anpassungEbit[2]"
                            />
                        </Form.Field>
                        <Form.Field>
                            <label htmlFor="anpassungEbit[3]" className="form-label">
                                Anpassung 2023 (Prognose)
                            </label>
                            <Form.Input
                                type="text"
                                className="form-text input-number not-required negative ebit-clean-calc"
                                name="anpassungEbit[3]"
                            />
                        </Form.Field>
                    </Form.Group>

                    <Form.Field>
                        <label className="form-label" htmlFor="erklaerungAnpassungEbit">
                            Fassen Sie die oben gemachten Anpassungen kurz in eigenen Worten zusammen. Dies erscheint als Notiz auf dem Firmenwert-Report.
                        </label>
                        <Form.Input className="form-text" type="text" name="erklaerungAnpassungEbit" />
                    </Form.Field>
                </Form>
            </Grid.Column>
        </Grid>
    );
};

export default Test;
