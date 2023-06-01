import React, {useEffect} from "react";
import { Checkbox, Label, Grid, Header, Segment, Form, Divider, Button, Radio } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { setUmsatz, setEbit, setGewinnTypisch, setChecked } from '../../redux/kennzahlenSlice';

const Kennzahlen = (props) => {
    const dispatch = useDispatch();
    const checked = useSelector((state) => state.kennzahlen.checked);
    const umsatz = useSelector((state) => state.kennzahlen.umsatz);
    const ebit = useSelector((state) => state.kennzahlen.ebit);
    const gewinnTypisch = useSelector((state) => state.kennzahlen.gewinnTypisch);

    const kennzahlen = {
        umsatzYears: ["Umsatz 2020", "Umsatz 2021", "Umsatz 2022"].concat(checked ? ["Pronose 2023"] : []),
        ebitYears: ["Ebit 2020", "Ebit 2021", "Ebit 2022"].concat(checked ? ["Pronose 2023"] : []),
        gewinnYears: [" Gewinn 2020", "Gewinn 2021", "Gewinn 2022"].concat(checked ? ["Pronose 2023"] : []),
        options: ['ganz untypisch', 'eher untypisch', 'nur teilweise typisch', 'eher typisch', 'typisch']
    };

    const handleCheckboxChange = () => {
        dispatch(setChecked(!checked));
    };

    const handleChange = (index, type, value) => {
        if (type === 'umsatz') {
            const newUmsatz = [...umsatz];
            newUmsatz[index] = value;
            dispatch(setUmsatz(newUmsatz));
        } else if (type === 'ebit') {
            const newEbit = [...ebit];
            newEbit[index] = value;
            dispatch(setEbit(newEbit));
        } else if (type === 'gewinnTypisch') {
            const newGewinnTypisch = [...gewinnTypisch];
            newGewinnTypisch[index] = value;
            dispatch(setGewinnTypisch(newGewinnTypisch));
        }
    };

    const handleWeiterClick = () => {
        props.onWeiterClick();
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
                            {kennzahlen.umsatzYears.map((year, index) => (
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
                                            value={umsatz[index]}
                                            onChange={(e) => handleChange(index, 'umsatz', e.target.value)}
                                        />
                                    </Form.Field>
                                    <Form.Field width={3} className="form-input">
                                        <input
                                            type="text"
                                            value={umsatz[index]}
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
                            {kennzahlen.ebitYears.map((year, index) => (
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
                                            value={ebit[index]}
                                            onChange={(e) => handleChange(index, 'ebit', e.target.value)}
                                        />
                                    </Form.Field>
                                    <Form.Field width={3} className="form-input">
                                        <input
                                            type="text"
                                            value={ebit[index]}
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
                            {kennzahlen.options.map((option, index) => (
                                <Segment key={index} textAlign="center">{option}</Segment>
                            ))}
                        </Segment.Group>
                        {kennzahlen.gewinnYears.map((label, index) => (
                            <Segment.Group horizontal className="segment-group" key={label}>
                                <Segment>{label}</Segment>
                                {kennzahlen.options.map((option, i) => (
                                    <Segment textAlign="center" key={i}>
                                        <Form.Field>
                                            <Radio
                                                className="form-check-input"
                                                name={`gewinnYears[${index}]`}
                                                value={option}
                                                checked={gewinnTypisch[index] === option}
                                                onChange={() => handleChange(index, 'gewinnTypisch', option)}
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