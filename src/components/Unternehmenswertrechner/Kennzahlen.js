import React, { useEffect } from "react";
import { Checkbox, Label, Grid, Header, Segment, Form, Divider, Button, Radio } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { setValidity, setError } from '../../redux/reducers';

import {
    setPrognose,
    setUmsatz,
    setEbit,
    setGewinn,
    setAverageUmsatz,
    setAverageEbit,
} from '../../redux/kennzahlenSlice';

import {setAnpassungEbitValue, setBereinigungEbitValue, setGehaltValue} from "../../redux/bereinigungSlice";

const Kennzahlen = (props) => {
    const dispatch = useDispatch();
    const isValid = useSelector(state => state.validation.isValid);
    const prognose = useSelector((state) => state.kennzahlen.kennzahlenData.prognose);
    const kennzahlenData = useSelector((state) => state.kennzahlen.kennzahlenData);
    const bereinigungData = useSelector((state) => state.bereinigung.bereinigungData);

    const prognose2023 = {
        umsatz: {
            title: "Prognose 2023",
            year: 2023,
            value: 25000000
        },
        ebit: {
            title: "Prognose 2023",
            year: 2023,
            value: 5000000
        },
        gewinn: {
            title: "Prognose 2023",
            year: 2023,
            type: "",
            value: null
        },
        gehalt: {
            title: "Gehalt 2023 (Prognose)",
            year: 2023,
            value: null
        },
        anpassungEbit: {
            title: "Anpassung 2023 (Prognose)",
            year: 2023,
            value: null,
        },
        bereinigungEbit: {
            title: "Bereinigtes EBIT 2023 (Prognose)",
            year: 2023,
            value: null,
        },
    };

    useEffect(() => {
        // console.log("prognose:", prognose);
        // console.log("kennzahlenData:", kennzahlenData);
        checkValidity();
    }, [prognose, kennzahlenData]);

    // useEffect(() => {
    //     console.log("bereinigungData", bereinigungData);
    // }, [bereinigungData]);

    const checkValidity = () => {
        let errors = [];

        // Check Umsatz
        kennzahlenData.umsatz.forEach((item) => {
            if (item.value < 100000) {
                errors.push(`Der Umsatz für ${item.year} muss mindestens 100.000 EUR betragen.`);
            }
        });

        // Check EBIT
        kennzahlenData.ebit.forEach((item) => {
            if (item.value < 50000) {
                errors.push(`Das EBIT für ${item.year} muss mindestens 50.000 EUR betragen.`);
            }
        });

        // Check Gewinn
        kennzahlenData.gewinn.data.forEach((item) => {
            if (item.type === "") {
                const title = item.year === 2023 && prognose ? 'Prognose' : 'Gewinn';
                errors.push(`Bitte geben Sie für den Gewinntyp für ${title} ${item.year} an.`);
            }
        });

        dispatch(setError(errors));
        const valid = errors.length === 0;
        dispatch(setValidity(valid));
    };

    const handleCheckboxChange = () => {
        dispatch(setPrognose(!prognose));
        if (!prognose) {
            const newUmsatz = [...kennzahlenData.umsatz, prognose2023.umsatz];
            const newEbit = [...kennzahlenData.ebit, prognose2023.ebit];
            const newGewinnData = [...kennzahlenData.gewinn.data, prognose2023.gewinn];
            const initialGehalt = [...bereinigungData.gehalt, prognose2023.gehalt];
            const initialAnpassungEbit = [...bereinigungData.anpassungEbit, prognose2023.anpassungEbit];
            const initialBereinigungEbit = [...bereinigungData.bereinigungEbit, prognose2023.bereinigungEbit];
            dispatch(setUmsatz(newUmsatz));
            dispatch(setEbit(newEbit));
            dispatch(setGewinn({ ...kennzahlenData.gewinn, data: newGewinnData }));
            dispatch(setGehaltValue(initialGehalt));
            dispatch(setAnpassungEbitValue(initialAnpassungEbit));
            dispatch(setBereinigungEbitValue(initialBereinigungEbit));
            const averageUmsatz = calculateAverage(newUmsatz, 'umsatz');
            const averageEbit = calculateAverage(newEbit, 'ebit');
            dispatch(setAverageUmsatz(averageUmsatz));
            dispatch(setAverageEbit(averageEbit));
        } else {
            const newUmsatz = kennzahlenData.umsatz.filter((item) => item.year !== 2023);
            const newEbit = kennzahlenData.ebit.filter((item) => item.year !== 2023);
            const newGewinnData = kennzahlenData.gewinn.data.filter((item) => item.year !== 2023);
            const newGehalt = [...bereinigungData.gehalt.filter(item => item.year !== 2023)];
            const newAnpassungEbit = [...bereinigungData.anpassungEbit.filter(item => item.year !== 2023)];
            const newBereinigungEbit = [...bereinigungData.bereinigungEbit.filter(item => item.year !== 2023)];
            dispatch(setUmsatz(newUmsatz));
            dispatch(setEbit(newEbit));
            dispatch(setGewinn({ ...kennzahlenData.gewinn, data: newGewinnData }));
            dispatch(setGehaltValue(newGehalt));
            dispatch(setAnpassungEbitValue(newAnpassungEbit));
            dispatch(setBereinigungEbitValue(newBereinigungEbit));
            const averageUmsatz = calculateAverage(newUmsatz, 'umsatz');
            const averageEbit = calculateAverage(newEbit, 'ebit');
            dispatch(setAverageUmsatz(averageUmsatz));
            dispatch(setAverageEbit(averageEbit));
        }
    };

    const handleChange = (index, category, value) => {
        if (category === 'umsatz') {
            const newUmsatz = kennzahlenData.umsatz.map((item, i) =>
                i === index ? { ...item, value: value } : item
            );
            // console.log("newUmsatz:", newUmsatz);
            dispatch(setUmsatz(newUmsatz));
            const averageUmsatz = calculateAverage(newUmsatz, 'umsatz');
            // console.log("averageUmsatz:", averageUmsatz);
            dispatch(setAverageUmsatz(averageUmsatz));
        } else if (category === 'ebit') {
            const newEbit = kennzahlenData.ebit.map((item, i) =>
                i === index ? { ...item, value: value } : item
            );
            // console.log("newEbit:", newEbit);
            dispatch(setEbit(newEbit));
            const averageEbit = calculateAverage(newEbit, 'ebit');
            // console.log("averageEbit:", averageEbit);
            dispatch(setAverageEbit(averageEbit));
        } else if (category === 'gewinn') {
            const newGewinnData = kennzahlenData.gewinn.data.map((item, i) =>
                i === index ? { ...item, type: value.type, value: value.value } : item
            );
            // console.log("newGewinnData:", newGewinnData);
            dispatch(setGewinn({ ...kennzahlenData.gewinn, data: newGewinnData }));
        }
    };

    const calculateAverage = (data, type) => {
        if (data.length > 0) {
            const sum = data.reduce((total, item) => total + parseFloat(item.value), 0);
            const average = sum / data.length;
            if (type === 'umsatz') {
                return setFormattedValue(average);
            } else if (type === 'ebit') {
                return setFormattedValue(average);
            }
        }
        return 0;
    };

    const setFormattedValue = (value) => {
        return Math.round(value);
    };

    const handleWeiterClick = () => {
        if (!isValid) {
            return;
        }

        // Pass this info back to the parent when Weiter is clicked
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
                                            value={kennzahlenData.umsatz && kennzahlenData.umsatz[index]?.value}
                                            onChange={(e) => handleChange(index, 'umsatz', e.target.value)}
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
                                            value={kennzahlenData.ebit && kennzahlenData.ebit[index]?.value}
                                            onChange={(e) => handleChange(index, 'ebit', e.target.value)}
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
                            {kennzahlenData.gewinn.options.map((option, index) => (
                                <Segment key={index} textAlign="center">{option.type}</Segment>

                            ))}
                        </Segment.Group>
                        {kennzahlenData.gewinn.data.map((item, index) => (
                            <Segment.Group horizontal className="segment-group" key={item.title}>
                                <Segment>{item.title}</Segment>
                                {kennzahlenData.gewinn.options.map((option, i) => (
                                    <Segment textAlign="center" key={i}>
                                        <Form.Field>
                                            <Radio
                                                className="form-check-input"
                                                name={`gewinnYears[${index}]`}
                                                checked={item.type === option.type}
                                                onChange={() => handleChange(index, 'gewinn', option)}
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