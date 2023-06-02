import React, { useEffect } from "react";
import { Checkbox, Label, Grid, Header, Segment, Form, Divider, Button, Radio } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import {
    setPrognose,
    setUmsatz,
    setEbit,
    setGewinnTypisch,
    setAverageUmsatz,
    setAverageEbit,
} from '../../redux/kennzahlenSlice';

const Kennzahlen = (props) => {
    const dispatch = useDispatch();
    const prognose = useSelector((state) => state.kennzahlen.kennzahlenData.prognose);
    const kennzahlenData = useSelector((state) => state.kennzahlen.kennzahlenData);

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
        console.log("prognose:", prognose);
        console.log("kennzahlenData:", kennzahlenData);
    }, [prognose, kennzahlenData]);

    const handleCheckboxChange = () => {
        dispatch(setPrognose(!prognose));
        if (!prognose) {
            const newUmsatz = [...kennzahlenData.umsatz, prognose2023.umsatz];
            const newEbit = [...kennzahlenData.ebit, prognose2023.ebit];
            const newGewinn = [...kennzahlenData.gewinnTypisch.gewinn, prognose2023.gewinn];
            dispatch(setUmsatz(newUmsatz));
            dispatch(setEbit(newEbit));
            dispatch(setGewinnTypisch({ ...kennzahlenData.gewinnTypisch, gewinn: newGewinn }));
        } else {
            const newUmsatz = kennzahlenData.umsatz.filter((item) => item.year !== 2023);
            const newEbit = kennzahlenData.ebit.filter((item) => item.year !== 2023);
            const newGewinn = kennzahlenData.gewinnTypisch.gewinn.filter((item) => item.year !== 2023);
            dispatch(setUmsatz(newUmsatz));
            dispatch(setEbit(newEbit));
            dispatch(setGewinnTypisch({ ...kennzahlenData.gewinnTypisch, gewinn: newGewinn }));
        }
    };

    const handleChange = (index, type, value) => {
        if (type === 'umsatz') {
            const newUmsatz = kennzahlenData.umsatz.map((item, i) =>
                i === index ? { ...item, value } : item
            );
            console.log("newUmsatz:", newUmsatz);
            dispatch(setUmsatz(newUmsatz));
            const averageUmsatz = calculateAverageUmsatz(newUmsatz);
            console.log("averageUmsatz:", averageUmsatz);
            dispatch(setAverageUmsatz(averageUmsatz));
        } else if (type === 'ebit') {
            const newEbit = kennzahlenData.ebit.map((item, i) =>
                i === index ? { ...item, value } : item
            );
            console.log("newEbit:", newEbit);
            dispatch(setEbit(newEbit));
            const averageEbit = calculateAverageEbit(newEbit);
            console.log("averageEbit:", averageEbit);
            dispatch(setAverageEbit(averageEbit));
        } else if (type === 'gewinnTypisch') {
            const newGewinnTypisch = {
                ...kennzahlenData.gewinnTypisch,
                gewinn: kennzahlenData.gewinnTypisch.gewinn.map((item, i) =>
                    i === index ? { ...item, value } : item
                )
            };
            console.log("newGewinnTypisch:", newGewinnTypisch);
            dispatch(setGewinnTypisch(newGewinnTypisch));
        }
    };

    const calculateAverageUmsatz = (umsatz) => {
        if (umsatz.length > 0) {
            const sum = umsatz.reduce((total, item) => total + parseFloat(item.value), 0);
            const average = sum / umsatz.length;
            return average;
        } else {
            return 0;
        }
    };

    const calculateAverageEbit = (ebit) => {
        if (ebit.length > 0) {
            const sum = ebit.reduce((total, item) => total + parseFloat(item.value), 0);
            const average = sum / ebit.length;
            return average;
        } else {
            return 0;
        }
    };

    const formatValue = (value) => {
        const valueInMillion = value / 1e6;
        const roundedValue = Math.round(valueInMillion * 10) / 10;
        let formattedValue = roundedValue.toFixed(1);

        if (formattedValue.endsWith(".0")) {
            formattedValue = parseInt(formattedValue).toString();
        }

        return formattedValue + " Mio EUR";
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
                            checked={prognose}
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
                            {kennzahlenData.umsatz.map((item, index) => (
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
                                            value={(kennzahlenData.umsatz && kennzahlenData.umsatz[index]?.value) || ""}
                                            onChange={(e) => handleChange(index, 'umsatz', e.target.value)}
                                        />
                                    </Form.Field>
                                    <Form.Field width={3} className="form-input">
                                        <input
                                            type="text"
                                            value={(kennzahlenData.umsatz && kennzahlenData.umsatz[index]?.value) || ""}
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
                            {kennzahlenData.ebit.map((item, index) => (
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
                                            value={(kennzahlenData.ebit && kennzahlenData.ebit[index]?.value) || ""}
                                            onChange={(e) => handleChange(index, 'ebit', e.target.value)}
                                        />
                                    </Form.Field>
                                    <Form.Field width={3} className="form-input">
                                        <input
                                            type="text"
                                            value={(kennzahlenData.ebit && kennzahlenData.ebit[index]?.value) || ""}
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
                            {kennzahlenData.gewinnTypisch.options.map((option, index) => (
                                <Segment key={index} textAlign="center">{option}</Segment>
                            ))}
                        </Segment.Group>
                        {kennzahlenData.gewinnTypisch.gewinn.map((item, index) => (
                            <Segment.Group horizontal className="segment-group" key={item.title}>
                                <Segment>{item.title}</Segment>
                                {kennzahlenData.gewinnTypisch.options.map((option, i) => (
                                    <Segment textAlign="center" key={i}>
                                        <Form.Field>
                                            <Radio
                                                className="form-check-input"
                                                name={`gewinnYears[${index}]`}
                                                value={option}
                                                checked={kennzahlenData.gewinnTypisch.gewinn[index]?.value === option}
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