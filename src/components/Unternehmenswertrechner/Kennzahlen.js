import React, { useEffect } from "react";
import { Checkbox, Label, Grid, Header, Segment, Form, Divider, Button, Radio } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { setUmsatz, setEbit, setGewinnTypisch, setChecked } from '../../redux/kennzahlenSlice';

const Kennzahlen = (props) => {
    const dispatch = useDispatch();
    const checked = useSelector((state) => state.kennzahlen.checked);
    const umsatz = useSelector((state) => state.kennzahlen.kennzahlenData.umsatz);
    const ebit = useSelector((state) => state.kennzahlen.kennzahlenData.ebit);
    const gewinnTypisch = useSelector((state) => state.kennzahlen.kennzahlenData.gewinnTypisch);

    const prognose2023 = {
        umsatz: {
            title: "Prognose 2023",
            year: 2023,
            value: 25000000,
        },
        ebit: {
            title: "Prognose 2023",
            year: 2023,
            value: 5000000,
        },
        gewinn: {
            title: "Gewinn 2023",
            year: 2023,
            value: "",
        },
    };

    useEffect(() => {
        console.log("checked:", checked);
        console.log("umsatz:", umsatz);
        console.log("ebit:", ebit);
        console.log("gewinnTypisch:", gewinnTypisch);
    }, [checked, umsatz, ebit, gewinnTypisch]);

    const handleCheckboxChange = () => {
        dispatch(setChecked(!checked));
        if (!checked) {
            const newUmsatz = [...umsatz, prognose2023.umsatz];
            const newEbit = [...ebit, prognose2023.ebit];
            const newGewinn = [...gewinnTypisch.gewinn, prognose2023.gewinn];
            dispatch(setUmsatz(newUmsatz));
            dispatch(setEbit(newEbit));
            dispatch(setGewinnTypisch({ ...gewinnTypisch, gewinn: newGewinn }));
        } else {
            const newUmsatz = umsatz.filter((item) => item.year !== 2023);
            const newEbit = ebit.filter((item) => item.year !== 2023);
            const newGewinn = gewinnTypisch.gewinn.filter((item) => item.year !== 2023);
            dispatch(setUmsatz(newUmsatz));
            dispatch(setEbit(newEbit));
            dispatch(setGewinnTypisch({ ...gewinnTypisch, gewinn: newGewinn }));
        }
    };

    const handleChange = (index, type, value) => {
        if (type === 'umsatz') {
            const newUmsatz = umsatz.map((item, i) =>
                i === index ? { ...item, value } : item
            );
            dispatch(setUmsatz(newUmsatz));
        } else if (type === 'ebit') {
            const newEbit = ebit.map((item, i) =>
                i === index ? { ...item, value } : item
            );
            dispatch(setEbit(newEbit));
        } else if (type === 'gewinnTypisch') {
            const newGewinnTypisch = {
                ...gewinnTypisch,
                gewinn: gewinnTypisch.gewinn.map((item, i) =>
                    i === index ? { ...item, value } : item
                )
            };
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
                            {umsatz.map((item, index) => (
                                <Form.Group className="form-group" key={item.year}>
                                    <Form.Field width={3} className="form-label">
                                        <label>{item.title}</label>
                                    </Form.Field>
                                    <Form.Field width={10} className="form-input">
                                        <input
                                            type="range"
                                            min="100000"
                                            max="50000000"
                                            step="50000"
                                            value={(umsatz && umsatz[index]?.value) || ""}
                                            onChange={(e) => handleChange(index, 'umsatz', e.target.value)}
                                        />
                                    </Form.Field>
                                    <Form.Field width={3} className="form-input">
                                        <input
                                            type="text"
                                            value={(umsatz && umsatz[index]?.value) || ""}
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
                            {ebit.map((item, index) => (
                                <Form.Group className="form-group" key={item.year}>
                                    <Form.Field width={3} className="form-label">
                                        <label>{item.title}</label>
                                    </Form.Field>
                                    <Form.Field width={10} className="form-input">
                                        <input
                                            type="range"
                                            min="0"
                                            max="10000000"
                                            step="1000"
                                            value={(ebit && ebit[index]?.value) || ""}
                                            onChange={(e) => handleChange(index, 'ebit', e.target.value)}
                                        />
                                    </Form.Field>
                                    <Form.Field width={3} className="form-input">
                                        <input
                                            type="text"
                                            value={(ebit && ebit[index]?.value) || ""}
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
                            {gewinnTypisch.options.map((option, index) => (
                                <Segment key={index} textAlign="center">{option}</Segment>
                            ))}
                        </Segment.Group>
                        {gewinnTypisch.gewinn.map((item, index) => (
                            <Segment.Group horizontal className="segment-group" key={item.title}>
                                <Segment>{item.title}</Segment>
                                {gewinnTypisch.options.map((option, i) => (
                                    <Segment textAlign="center" key={i}>
                                        <Form.Field>
                                            <Radio
                                                className="form-check-input"
                                                name={`gewinnYears[${index}]`}
                                                value={option}
                                                checked={gewinnTypisch.gewinn[index]?.value === option}
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