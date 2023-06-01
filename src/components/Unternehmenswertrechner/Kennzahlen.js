import React, { useState } from "react";
import { Checkbox, Label, Grid, Header, Segment, Form, Divider, Button, Radio } from 'semantic-ui-react';
import { useDispatch, useSelector } from "react-redux";
import { setValidity, setError } from '../../redux/reducers';

const Kennzahlen = (props) => {
    const [checked, setChecked] = useState(false);
    const [kennzahlen, setKennzahlen] = useState({
        year: [2020, 2021, 2022],
        umsatz: 25000000,
        ebit: 5000000,
        gewinnTypisch: [
            "ganz untypisch",
            "eher untypisch",
            "nur teilweise typisch",
            "eher typisch",
            "typisch"
        ]
    });
    const [selectedGewinnTypischOptions, setSelectedGewinnTypischOptions] = useState([]);

    const handleCheckboxChange = () => {
        setChecked(!checked);
        setKennzahlen(prevKennzahlen => {
            const newKennzahlen = [...prevKennzahlen];
            if (!checked) {
                newKennzahlen.push({ umsatz: 25000000, ebit: 5000000 });
            } else {
                newKennzahlen.pop();
            }
            return newKennzahlen;
        });
        setSelectedGewinnTypischOptions(prevOptions => {
            const newOptions = [...prevOptions];
            if (!checked) {
                newOptions.push("");
            } else {
                newOptions.pop();
            }
            return newOptions;
        });
    };

    const handleChange = (index, field, value) => {
        if (field === "umsatz" || field === "ebit") {
            setKennzahlen(prevKennzahlen => {
                const newKennzahlen = [...prevKennzahlen];
                newKennzahlen[index] = { ...newKennzahlen[index], [field]: value };
                return newKennzahlen;
            });
        } else if (field === "selectedGewinnTypischOptions") {
            setSelectedGewinnTypischOptions(prevOptions => {
                const newOptions = [...prevOptions];
                newOptions[index] = { year: kennzahlen.year[index], value: value };
                return newOptions;
            });
        }
    };

    const handleWeiterClick = () => {
        props.onWeiterClick();
    };

    const umsatzYears = kennzahlen.year;
    const ebitYears = kennzahlen.year;

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
                                        <label>Umsatz {year}</label>
                                    </Form.Field>
                                    <Form.Field width={10} className="form-input">
                                        <input
                                            type="range"
                                            min="100000"
                                            max="50000000"
                                            step="50000"
                                            value={kennzahlen[index]?.umsatz}
                                            onChange={(e) => handleChange(index, 'umsatz', e.target.value)}
                                        />
                                    </Form.Field>
                                    <Form.Field width={3} className="form-input">
                                        <input
                                            type="text"
                                            value={kennzahlen[index]?.umsatz}
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
                                        <label>Ebit {year}</label>
                                    </Form.Field>
                                    <Form.Field width={10} className="form-input">
                                        <input
                                            type="range"
                                            min="0"
                                            max="10000000"
                                            step="1000"
                                            value={kennzahlen[index]?.ebit}
                                            onChange={(e) => handleChange(index, 'ebit', e.target.value)}
                                        />
                                    </Form.Field>
                                    <Form.Field width={3} className="form-input">
                                        <input
                                            type="text"
                                            value={kennzahlen[index]?.ebit}
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
                            {kennzahlen.gewinnTypisch.map((option, index) => (
                                <Segment key={index} textAlign="center">{option}</Segment>
                            ))}
                        </Segment.Group>
                        {kennzahlen.year.map((label, index) => (
                            <Segment.Group horizontal className="segment-group" key={label}>
                                <Segment>Gewinn {label}</Segment>
                                {kennzahlen.gewinnTypisch.map((option, i) => (
                                    <Segment textAlign="center" key={i}>
                                        <Form.Field>
                                            <Radio
                                                className="form-check-input"
                                                name={`gewinnYears[${index}]`}
                                                value={option}
                                                checked={selectedGewinnTypischOptions[index]?.value === option}
                                                onChange={() => handleChange(index, 'selectedGewinnTypischOptions', option)}
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