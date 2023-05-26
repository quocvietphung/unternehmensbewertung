import React, { useState, useEffect } from "react";
import { Checkbox, Label, Grid, Header, Segment, Form, Divider, Button, Radio } from 'semantic-ui-react';

const Kennzahlen = (props) => {
    const [checked, setChecked] = useState(props.kennzahlenInfo?.checked || false);

    const umsatzYears = ['Umsatz2020', 'Umsatz2021', 'Umsatz2022'].concat(checked ? ["Prognose 2023"] : []);
    const ebitYears = ['Ebit2020', 'Ebit2021', 'Ebit2022'].concat(checked ? ["Prognose 2023"] : []);

    const [kennzahlen, setKennzahlen] = useState(() => props.kennzahlenInfo?.kennzahlen || Array(umsatzYears.length).fill({
        umsatz: 25000000,
        ebit: 5000000,
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
            kennzahlen: [...kennzahlen],
            selectedOptions: [...selectedOptions]
        };

        console.log("kennzahlenInfo:", kennzahlenInfo); // Kiểm tra giá trị kennzahlenInfo

        props.onWeiterClick(kennzahlenInfo);
    };

    const handleUmsatzChange = (field, value) => {
        setKennzahlen(prevKennzahlen => {
            const newKennzahlen = [...prevKennzahlen];
            newKennzahlen[field] = value;
            return newKennzahlen;
        });
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
                            {umsatzYears.map((year, index) => (
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
                                            value={kennzahlen[index].umsatz}
                                            onChange={(e) => handleUmsatzChange(index, { ...kennzahlen[index], umsatz: e.target.value })}
                                        />
                                    </Form.Field>
                                    <Form.Field width={3} className="form-input">
                                        <input
                                            type="text"
                                            value={kennzahlen[index].umsatz}
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
                            {ebitYears.map((year, index) => (
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
                                            value={kennzahlen[index].ebit}
                                            onChange={(e) => handleUmsatzChange(index, { ...kennzahlen[index], ebit: e.target.value })}
                                        />
                                    </Form.Field>
                                    <Form.Field width={3} className="form-input">
                                        <input
                                            type="text"
                                            value={kennzahlen[index].ebit}
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