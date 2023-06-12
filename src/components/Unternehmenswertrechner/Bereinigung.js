import React, { useState, useEffect } from 'react';
import { Grid, Header, Form, Input, Popup, Divider, Icon, Segment, Label, Button } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import {
    setGehaltValue,
    setAnpassungEbitValue,
    setBereinigungEbitValue,
    setTypischGehalt,
    setErklaerungAnpassungEbit,
    setValueForBereinigungEbit
} from '../../redux/bereinigungSlice';

const Bereinigung = (props) => {
    const prognose = useSelector((state) => state.kennzahlen.kennzahlenData.prognose);
    const kennzahlenDataEbits = useSelector((state) => state.kennzahlen.kennzahlenData.ebit);
    const bereinigungData = useSelector((state) => state.bereinigung.bereinigungData);
    const dispatch = useDispatch();

    const prognose2023 = {
        gehalt: {
            title: "Gehalt 2023 (Prognose)",
            year: 2023,
            value: null
        },
        anpassungEbit: {
            title: "Anpassung 2023 (Prognose)",
            year: 2023,
            value: null,
            bereinigungEbit: null
        },
        bereinigungEbit: {
            title: "Bereinigtes EBIT 2023 (Prognose)",
            year: 2023,
            value: null,
        },
    };

    useEffect(() => {
        console.log("prognose", prognose);

        if (prognose) {
            const newGehalt = [...bereinigungData.gehalt.filter(item => item.year !== 2023), prognose2023.gehalt];
            const newAnpassungEbit = [...bereinigungData.anpassungEbit.filter(item => item.year !== 2023), prognose2023.anpassungEbit];
            const newBereinigungEbit = [...bereinigungData.bereinigungEbit.filter(item => item.year !== 2023), prognose2023.bereinigungEbit];
            dispatch(setGehaltValue(newGehalt));
            dispatch(setAnpassungEbitValue(newAnpassungEbit));
            dispatch(setBereinigungEbitValue(newBereinigungEbit));
        } else {
            const initialGehalt = bereinigungData.gehalt.filter(item => item.year !== 2023);
            const initialAnpassungEbit = bereinigungData.anpassungEbit.filter(item => item.year !== 2023);
            const initialBereinigungEbit = bereinigungData.bereinigungEbit.filter(item => item.year !== 2023);
            dispatch(setGehaltValue(initialGehalt));
            dispatch(setAnpassungEbitValue(initialAnpassungEbit));
            dispatch(setBereinigungEbitValue(initialBereinigungEbit));
        }
    }, [prognose]);

    useEffect(() => {
        calculateBereinigungEbit();
        console.log("bereinigungData", bereinigungData);
    }, [bereinigungData.gehalt, bereinigungData.typischGehalt, bereinigungData.anpassungEbit]);

    const calculateBereinigungEbit = () => {
        const { gehalt, anpassungEbit, typischGehalt } = bereinigungData;

        bereinigungData.bereinigungEbit.forEach((item, index) => {
            if (!kennzahlenDataEbits[index] || !gehalt[index] || !anpassungEbit[index]) {
                return;
            }

            const kennzahlenDataEbit = parseFloat(kennzahlenDataEbits[index].value) || 0;
            const gehaltValue = parseFloat(gehalt[index].value) || 0;
            const anpassungEbitValue = parseFloat(anpassungEbit[index].value) || 0;
            const typischGehaltValue = parseFloat(typischGehalt) || 0;
            const bereinigtesEbitValue = (kennzahlenDataEbit + gehaltValue + anpassungEbitValue) - typischGehaltValue;

            dispatch(setValueForBereinigungEbit({ year: item.year, value: bereinigtesEbitValue }));
        });
    };

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

    const handleInputChange = (name, value, index) => {
        if (name.includes("gehalt")) {
            const updatedGehalt = bereinigungData.gehalt.map((item, i) =>
                i === index ? { ...item, value: value } : item
            );
            dispatch(setGehaltValue(updatedGehalt));
        } else if (name.includes("anpassungEbit")) {
            const updatedAnpassungEbit = bereinigungData.anpassungEbit.map((item, i) =>
                i === index ? { ...item, value: value } : item
            );
            dispatch(setAnpassungEbitValue(updatedAnpassungEbit));
        } else if (name === "typischGehalt") {
            dispatch(setTypischGehalt(value));
        } else if (name === "erklaerungAnpassungEbit") {
            dispatch(setErklaerungAnpassungEbit(value));
        }
    };

    const renderPopupTrigger = (popover) => (
        <span className="question-mark-icon" onClick={() => handlePopupOpen(popover)}>
            <Icon name="question circle" />
        </span>
    );

    const handleWeiterClick = () => {
        props.onWeiterClick();
    };

    const renderFormFields = () => {
        return (
            <Grid>
                {bereinigungData.gehalt.map((gehaltItem, index) => (
                    <Grid.Column key={index} width={4}>
                        <Form>
                            <Form.Field>
                                <label htmlFor={`gehalt[${index}]`} className="form-label">
                                    {gehaltItem.title}
                                </label>
                                <Input
                                    type="text"
                                    className="form-text input-number ebit-clean-calc"
                                    name={`gehalt[${index}]`}
                                    required
                                    pattern="\d*"
                                    data-gtm-form-interact-field-id={index + 12}
                                    value={gehaltItem.value}
                                    onChange={(e) => handleInputChange(e.target.name, e.target.value, index)}
                                />
                                <div className="invalid-feedback negative-number" style={{ display: 'none' }}>
                                    Keine negativen Eingaben erlaubt.
                                </div>
                                <div className="invalid-feedback">Das ist ein Pflichtfeld</div>
                            </Form.Field>
                        </Form>
                    </Grid.Column>
                ))}
            </Grid>
        );
    };

    const renderAnpassungEbit = () => {
        return (
            <Grid>
                {bereinigungData.anpassungEbit.map((anpassungItem, index) => (
                    <Grid.Column key={index} width={4}>
                        <Form.Field>
                            <label htmlFor={`anpassungEbit[${index}]`} className="form-label">
                                {anpassungItem.title}
                            </label>
                            <Input
                                type="text"
                                className="form-text input-number not-required negative ebit-clean-calc"
                                name={`anpassungEbit[${index}]`}
                                value={anpassungItem.value}
                                onChange={(e) => handleInputChange(e.target.name, e.target.value, index)}
                            />
                        </Form.Field>
                    </Grid.Column>
                ))}
            </Grid>
        );
    };

    const renderBereinigungEbit = () => {
        return (
            <Grid>
                {bereinigungData.bereinigungEbit.map((bereinigungItem, index) => (
                    <Grid.Column key={index} width={4}>
                        <Form.Field>
                            <label className="form-label">{bereinigungItem.title}</label>
                            <Input
                                type="text"
                                className="form-text input-number not-required disabled-all"
                                value={bereinigungItem.value}
                                readOnly
                            />
                            <div className="invalid-feedback negative-number" style={{ display: 'none' }}>
                                Keine negativen Eingaben erlaubt.
                            </div>
                        </Form.Field>
                    </Grid.Column>
                ))}
            </Grid>
        );
    };

    const renderAdditionalAdjustments = () => {
        return (
            <Grid>
                {renderAnpassungEbit()}
                {renderBereinigungEbit()}
            </Grid>
        );
    };

    return (
        <Grid padded className="shared-section bereinigung">
            <Grid.Column>
                <Header as="h2">3. Bereinigung des EBITs</Header>
                <Divider />
                <Form>
                    <Segment>
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
                    </Segment>

                    <Segment>
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
                                value={bereinigungData.typischGehalt}
                                onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                            />
                            <div className="invalid-feedback negative-number" style={{ display: 'none' }}>
                                Keine negativen Eingaben erlaubt.
                            </div>
                            <div className="invalid-feedback">Das ist ein Pflichtfeld</div>
                        </Form.Field>
                    </Segment>

                    <Segment>
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
                            <label className="form-label" htmlFor="erklaerungAnpassungEbit">
                                Fassen Sie die oben gemachten Anpassungen kurz in eigenen Worten zusammen. Dies erscheint als Notiz auf dem Firmenwert-Report.
                            </label>
                            <Input
                                className="form-text erklaerungAnpassungEbit"
                                type="text"
                                name="erklaerungAnpassungEbit"
                                value={bereinigungData.erklaerungAnpassungEbit}
                                onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                            />
                        </Form.Field>
                    </Segment>

                    <Form.Field>
                        <p className="required-fields-hint">
                            <span className="required">*</span>Diese Eingaben sind Pflichtfelder
                        </p>
                    </Form.Field>

                    <Form.Field>
                        <div className="button-container">
                            <Button className="click-back" onClick={props.onZuruckClick}>Zurück</Button>
                            <Button className="click-continue" primary type="submit" onClick={handleWeiterClick}>
                                Weiter
                            </Button>
                        </div>
                    </Form.Field>

                </Form>
            </Grid.Column>
        </Grid>
    );
};

export default Bereinigung;
