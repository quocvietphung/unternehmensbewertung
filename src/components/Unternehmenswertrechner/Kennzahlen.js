import React, { useState, useEffect } from "react";
import { Checkbox, Label, Grid, Header, Segment, Form, Divider, Button, Radio } from 'semantic-ui-react';

const Kennzahlen = (props) => {
    const [checked, setChecked] = useState(props.kennzahlenInfo?.checked || false);
    const [umsatz2020, setUmsatz2020] = useState(props.kennzahlenInfo?.umsatz2020 || 25000000);
    const [umsatz2021, setUmsatz2021] = useState(props.kennzahlenInfo?.umsatz2021 || 25000000);
    const [umsatz2022, setUmsatz2022] = useState(props.kennzahlenInfo?.umsatz2022 || 25000000);
    const [umsatzPrognose2023, setUmsatzPrognose2023] = useState(props.kennzahlenInfo?.prognose2023 || 25000000);
    const [ebit2020, setEbit2020] = useState(props.kennzahlenInfo?.ebit2020 || 5000000);
    const [ebit2021, setEbit2021] = useState(props.kennzahlenInfo?.ebit2021 || 5000000);
    const [ebit2022, setEbit2022] = useState(props.kennzahlenInfo?.ebit2022 || 5000000);
    const [ebitPrognose2023, setEbitPrognose2023] = useState(props.kennzahlenInfo?.ebitPrognose2023 || 5000000);
    const options = ['ganz untypisch', 'eher untypisch', 'nur teilweise typisch', 'eher typisch', 'typisch'];
    const gewinnYears = ["Gewinn 2020", "Gewinn 2021", "Gewinn 2022"].concat(checked ? ["Prognose 2023"] : []);
    const [selectedOptions, setSelectedOptions] = useState(() => props.kennzahlenInfo?.selectedOptions || Array(gewinnYears.length).fill(''));

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    const handleOptionChange = (index, value) => {
        setSelectedOptions(prevOptions => {
            const newOptions = [...prevOptions];
            newOptions[index] = { year: gewinnYears[index], value: value };
            return newOptions;
        });
    }

    const handleWeiterClick = () => {
        const kennzahlenInfo = {
            checked,
            umsatz2020,
            umsatz2021,
            umsatz2022,
            umsatzPrognose2023,
            ebit2020,
            ebit2021,
            ebit2022,
            ebitPrognose2023,
            selectedOptions,  // add selectedOptions here
        };

        props.onWeiterClick(kennzahlenInfo);
    };

    return (
        <Grid padded className="shared-section kennzahlen">
            <Grid.Column>
                <Header as="h2">2. Finanzwirtschaftliche Kennzahlen</Header>
                <Divider />
                <Form>
                    <Form.Field>
                        <Checkbox
                            label="Möchten Sie eine Prognose für das aktuelle Kalenderjahr angeben?"
                            toggle
                            checked={checked}
                            onChange={handleCheckboxChange}
                        />
                    </Form.Field>
                    <Header as="h3">Umsatz der letzten Jahre*</Header>
                    <Label>
                        Sie können Ihre Kennzahlen über den Schieberegler anpassen oder direkt über die Zahleneingabe eintragen.
                        <br />
                        Bitte beachten Sie, dass ein Unternehmenswert erst ab einem Umsatz von 100.000 EUR berechnet werden kann.
                    </Label>
                    <Segment>
                        <Form>
                            <Form.Group className="form-group">
                                <Form.Field width={3} className="form-label">
                                    <label>Umsatz 2020</label>
                                </Form.Field>
                                <Form.Field width={10} className="form-input">
                                    <input
                                        type="range"
                                        min="100000"
                                        max="50000000"
                                        step="50000"
                                        value={umsatz2020}
                                        onChange={(e) => setUmsatz2020(e.target.value)}
                                    />
                                </Form.Field>
                                <Form.Field width={3} className="form-input">
                                    <input
                                        type="text"
                                        value={umsatz2020}
                                        readOnly
                                    />
                                </Form.Field>
                            </Form.Group>

                            <Form.Group className="form-group">
                                <Form.Field width={3} className="form-label">
                                    <label>Umsatz 2021</label>
                                </Form.Field>
                                <Form.Field width={10} className="form-input">
                                    <input
                                        type="range"
                                        min="100000"
                                        max="50000000"
                                        step="50000"
                                        value={umsatz2021}
                                        onChange={(e) => setUmsatz2021(e.target.value)}
                                    />
                                </Form.Field>
                                <Form.Field width={3} className="form-input">
                                    <input
                                        type="text"
                                        value={umsatz2021}
                                        readOnly
                                    />
                                </Form.Field>
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Form.Field width={3} className="form-label">
                                    <label>Umsatz 2022</label>
                                </Form.Field>
                                <Form.Field width={10} className="form-input">
                                    <input
                                        type="range"
                                        min="100000"
                                        max="50000000"
                                        step="50000"
                                        value={umsatz2022}
                                        onChange={(e) => setUmsatz2022(e.target.value)}
                                    />
                                </Form.Field>
                                <Form.Field width={3} className="form-input">
                                    <input
                                        type="text"
                                        value={umsatz2022}
                                        readOnly
                                    />
                                </Form.Field>
                            </Form.Group>

                            {checked && (
                                <Form.Group className="form-group">
                                    <Form.Field width={3} className="form-label">
                                        <label>Prognose 2023</label>
                                    </Form.Field>
                                    <Form.Field width={10} className="form-input">
                                        <input
                                            type="range"
                                            min="100000"
                                            max="50000000"
                                            step="50000"
                                            value={umsatzPrognose2023}
                                            onChange={(e) => setUmsatzPrognose2023(e.target.value)}
                                        />
                                    </Form.Field>
                                    <Form.Field width={3} className="form-input">
                                        <input
                                            type="text"
                                            value={umsatzPrognose2023}
                                            readOnly
                                        />
                                    </Form.Field>
                                </Form.Group>
                            )}
                        </Form>
                    </Segment>
                    <Header as="h3">EBIT (Gewinn vor Zinsen und Steuern) der letzten Jahre*</Header>
                    <Label>
                        Sie können Ihre Kennzahlen über den Schieberegler anpassen oder direkt über die Zahleneingabe eintragen.
                        <br />
                        Bitte beachten Sie, dass ein Unternehmenswert erst ab einem EBIT von 50.000 EUR berechnet werden kann.
                    </Label>
                    <Segment>
                        <Form>
                            <Form.Group className="form-group">
                                <Form.Field width={3} className="form-label">
                                    <label>EBIT 2020</label>
                                </Form.Field>
                                <Form.Field width={10} className="form-input">
                                    <input
                                        type="range"
                                        min="0"
                                        max="10000000"
                                        step="1000"
                                        value={ebit2020}
                                        onChange={(e) => setEbit2020(e.target.value)}
                                    />
                                </Form.Field>
                                <Form.Field width={3} className="form-input">
                                    <input
                                        type="text"
                                        value={ebit2020}
                                        readOnly
                                    />
                                </Form.Field>
                            </Form.Group>

                            <Form.Group className="form-group">
                                <Form.Field width={3} className="form-label">
                                    <label>EBIT 2021</label>
                                </Form.Field>
                                <Form.Field width={10} className="form-input">
                                    <input
                                        type="range"
                                        min="0"
                                        max="10000000"
                                        step="1000"
                                        value={ebit2021}
                                        onChange={(e) => setEbit2021(e.target.value)}
                                    />
                                </Form.Field>
                                <Form.Field width={3} className="form-input">
                                    <input
                                        type="text"
                                        value={ebit2021}
                                        readOnly
                                    />
                                </Form.Field>
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Form.Field width={3} className="form-label">
                                    <label>EBIT 2022</label>
                                </Form.Field>
                                <Form.Field width={10} className="form-input">
                                    <input
                                        type="range"
                                        min="0"
                                        max="10000000"
                                        step="1000"
                                        value={ebit2022}
                                        onChange={(e) => setEbit2022(e.target.value)}
                                    />
                                </Form.Field>
                                <Form.Field width={3} className="form-input">
                                    <input
                                        type="text"
                                        value={ebit2022}
                                        readOnly
                                    />
                                </Form.Field>
                            </Form.Group>

                            {checked && (
                                <Form.Group className="form-group">
                                    <Form.Field width={3} className="form-label">
                                        <label>Prognose 2023</label>
                                    </Form.Field>
                                    <Form.Field width={10} className="form-input">
                                        <input
                                            type="range"
                                            min="0"
                                            max="10000000"
                                            step="1000"
                                            value={ebitPrognose2023}
                                            onChange={(e) => setEbitPrognose2023(e.target.value)}
                                        />
                                    </Form.Field>
                                    <Form.Field width={3} className="form-input">
                                        <input
                                            type="text"
                                            value={ebitPrognose2023}
                                            readOnly
                                        />
                                    </Form.Field>
                                </Form.Group>
                            )}
                        </Form>
                    </Segment>
                    <Header as="h3">
                        Schätzen Sie ein, wie typisch die Gewinne für die Unternehmenszukunft sind.
                        <span className="required-mark">*</span>
                    </Header>
                    <Segment>
                        <Segment.Group horizontal className="segment-group">
                            <Segment></Segment>
                            {options.map((option, index) => (
                                <Segment key={index} textAlign="center">{option}</Segment>
                            ))}
                        </Segment.Group>
                        {gewinnYears.map((label, index) => (
                            <Segment.Group horizontal className="segment-group" key={label}>
                                <Segment>{label}</Segment>
                                {options.map((option, i) => (
                                    <Segment textAlign="center" key={i}>
                                        <Form.Field>
                                            <Radio
                                                className="form-check-input"
                                                name={`gewinnYears[${index}]`}
                                                value={option}
                                                checked={selectedOptions[index]?.value === option}
                                                onChange={() => handleOptionChange(index, option)}
                                                required
                                            />
                                        </Form.Field>
                                    </Segment>
                                ))}
                            </Segment.Group>
                        ))}
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

export default Kennzahlen;

