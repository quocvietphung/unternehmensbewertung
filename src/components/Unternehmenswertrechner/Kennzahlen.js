import React, { useState, useEffect } from "react";
import { Checkbox, Label, Grid, Header, Segment, Form, Divider, Button, Radio } from 'semantic-ui-react';

const Kennzahlen = (props) => {
    const [checked, setChecked] = useState(props.kennzahlenInfo?.checked || false);
    const [umsatz, setUmsatz] = useState(() => ({
        umsatz2020: props.kennzahlenInfo?.umsatz2020 || 25000000,
        umsatz2021: props.kennzahlenInfo?.umsatz2021 || 25000000,
        umsatz2022: props.kennzahlenInfo?.umsatz2022 || 25000000
    }));

    const [ebit, setEbit] = useState(() => ({
        ebit2020: props.kennzahlenInfo?.ebit2020 || 5000000,
        ebit2021: props.kennzahlenInfo?.ebit2021 || 5000000,
        ebit2022: props.kennzahlenInfo?.ebit2022 || 5000000
    }));

    const [prognose, setPrognose] = useState(() => ({
        umsatzPrognose2023: props.kennzahlenInfo?.umsatzPrognose2023 || 25000000,
        ebitPrognose2023: props.kennzahlenInfo?.ebitPrognose2023 || 5000000
    }));

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
    };

    const handleWeiterClick = () => {
        const kennzahlenInfo = {
            checked,
            umsatz: { ...umsatz },
            ebit: { ...ebit },
            prognose: { ...prognose },
            selectedOptions: [...selectedOptions]
        };

        props.onWeiterClick(kennzahlenInfo);
    };

    const handleUmsatzChange = (field, value) => {
        setUmsatz(prevUmsatz => ({
            ...prevUmsatz,
            [field]: value
        }));
    };

    const handleEbitChange = (field, value) => {
        setEbit(prevEbit => ({
            ...prevEbit,
            [field]: value
        }));
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
                            {gewinnYears.map((year, index) => (
                                <Form.Group className="form-group" key={year}>
                                    <Form.Field width={3} className="form-label">
                                        <label>{year}</label>
                                    </Form.Field>
                                    <Form.Field width={10} className="form-input">
                                        <input
                                            type="range"
                                            min="100000"
                                            max="50000000"
                                            step="50000"
                                            value={umsatz[`umsatz${index + 2020}`]}
                                            onChange={(e) => handleUmsatzChange(`umsatz${index + 2020}`, e.target.value)}
                                        />
                                    </Form.Field>
                                    <Form.Field width={3} className="form-input">
                                        <input
                                            type="text"
                                            value={umsatz[`umsatz${index + 2020}`]}
                                            readOnly
                                        />
                                    </Form.Field>
                                </Form.Group>
                            ))}
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
                            {gewinnYears.map((year, index) => (
                                <Form.Group className="form-group" key={year}>
                                    <Form.Field width={3} className="form-label">
                                        <label>{year}</label>
                                    </Form.Field>
                                    <Form.Field width={10} className="form-input">
                                        <input
                                            type="range"
                                            min="0"
                                            max="10000000"
                                            step="1000"
                                            value={ebit[`ebit${index + 2020}`]}
                                            onChange={(e) => handleEbitChange(`ebit${index + 2020}`, e.target.value)}
                                        />
                                    </Form.Field>
                                    <Form.Field width={3} className="form-input">
                                        <input
                                            type="text"
                                            value={ebit[`ebit${index + 2020}`]}
                                            readOnly
                                        />
                                    </Form.Field>
                                </Form.Group>
                            ))}
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