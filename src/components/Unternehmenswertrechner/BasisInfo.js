import React, { useState, useEffect } from "react";
import { Header, Form, Grid, Select, Radio, Button, Divider } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { setBranche, setLage, setAlter } from '../../redux/basisInfoSlice';
import { setValidity, setError, setUnternehmensbewertung } from '../../redux/reducers';

const BasisInfo = (props) => {
    const branche = useSelector(state => state.basisInfo.branche);
    const lage = useSelector(state => state.basisInfo.lage);
    const alter = useSelector(state => state.basisInfo.alter);
    const isValid = useSelector(state => state.validation.isValid);
    const dispatch = useDispatch();

    const branchOptions = [
        {
            key: "",
            ebitValue: 0,
            umsatzValue: 0,
            text: "Branche auswählen"
        },
        {
            key: "bau",
            ebitValue: 4.8,
            umsatzValue: 0.63,
            text: "Bau und Handwerk"
        },
        {
            key: "beratung",
            ebitValue: 5.0,
            umsatzValue: 0.85,
            text: "Beratende Dienstleistung"
        },
        {
            key: "chemie",
            ebitValue: 5.9,
            umsatzValue: 1.1,
            text: "Chemie, Kunststoffe, Papier"
        },
        {
            key: "elektrotechnik",
            ebitValue: 5.4,
            umsatzValue: 0.84,
            text: "Elektrotechnik"
        },
        {
            key: "fahrzeugbau",
            ebitValue: 5.15,
            umsatzValue: 0.72,
            text: "Fahrzeugbau und -zubehör"
        },
        {
            key: "handel",
            ebitValue: 5.55,
            umsatzValue: 0.73,
            text: "Handel und E-Commerce"
        },
        {
            key: "maschinenbau",
            ebitValue: 5.6,
            umsatzValue: 0.85,
            text: "Maschinen- und Anlagenbau"
        },
        {
            key: "medien",
            ebitValue: 5.3,
            umsatzValue: 1.16,
            text: "Medien"
        },
        {
            key: "nahrungs",
            ebitValue: 5.45,
            umsatzValue: 1.11,
            text: "Nahrungs- und Genussmittel"
        },
        {
            key: "pharma",
            ebitValue: 6.5,
            umsatzValue: 1.64,
            text: "Pharma, Bio- und Medizintechnik"
        },
        {
            key: "software",
            ebitValue: 5.65,
            umsatzValue: 1.56,
            text: "Software"
        },
        {
            key: "telekommunikation",
            ebitValue: 5.65,
            umsatzValue: 1.05,
            text: "Telekommunikation"
        },
        {
            key: "textilien",
            ebitValue: 4.5,
            umsatzValue: 0.81,
            text: "Textilien und Bekleidung"
        },
        {
            key: "transport",
            ebitValue: 4.85,
            umsatzValue: 0.64,
            text: "Transport, Logistik und Touristik"
        },
        {
            key: "umwelttechnik",
            ebitValue: 5.6,
            umsatzValue: 0.85,
            text: "Umwelttechnik"
        },
        {
            key: "versorgungswirtschaft",
            ebitValue: 5.6,
            umsatzValue: 0.85,
            text: "Versorgungswirtschaft"
        }
    ];

    const lageOptions = [
        {
            key: 'städtisch',
            value: 1,
            text: 'städtisch'
        },
        {
            key: 'ländlich',
            value: 0.8,
            text: 'ländlich'
        }
    ];

    useEffect(() => {
        // Check validity
        console.log("Checking validity...");
        checkValidity();
        console.log("Brache", branche);
        console.log("Lage", lage);
        console.log("Valid", isValid)
    }, [branche, lage, alter]);

    const handleChange = (event, { name, value }) => {
        console.log(`Handle change for ${name} with value: ${value}`); // Log the name and value

        if (name === "alter") {
            if (value === "+") {
                dispatch(setAlter(alter + 1));
            } else if (value === "-" && alter > 0) {
                dispatch(setAlter(alter - 1));
            } else if (!isNaN(value)) {
                dispatch(setAlter(parseInt(value)));
            }
        } else if (name === "branche") {
            console.log("Value for branche:", value); // Log the value for branche
            const selectedBranch = branchOptions.find(option => option.key === value);
            console.log("Selected Branch:", selectedBranch); // Log selected branch
            if (selectedBranch) { // Ensure selectedBranch is not undefined
                dispatch(setBranche(selectedBranch));
            } else {
                dispatch(setBranche({})); // Set branche to empty object if no branch is selected
            }
        } else if (name === "lage") {
            const selectedLage = lageOptions.find(option => option.key === value);
            console.log("Selected Lage:", selectedLage); // Log selected lage
            dispatch(setLage(selectedLage));

            // Recalculate bewertung
            const bewertung = 0;
            console.log("Unternehmensbewertung:", bewertung);
            dispatch(setUnternehmensbewertung(bewertung));
        }
    };

    const checkValidity = () => {
        let errors = [];
        if (!branche || branche.key === "") {
            errors.push("Bitte wählen Sie eine Branche aus.");
        }
        if (!lage || (lage.key !== "städtisch" && lage.key !== "ländlich")) {
            errors.push("Bitte wählen Sie eine Lage aus.");
        }
        if (!alter || alter <= 0) {
            errors.push("Der Minimalwert für dieses Eingabefeld wurde erreicht.");
        }

        dispatch(setError(errors));

        const valid = errors.length === 0;
        dispatch(setValidity(valid));
    };

    const handleMinusClick = () => {
        if (alter > 1) {
            setAlter(prevAlter => prevAlter - 1);
        } else {
            window.alert("Der Minimalwert für dieses Eingabefeld wurde erreicht."); // Show alert when trying to decrement from 1
        }
    };

    const handleWeiterClick = () => {
        console.log('isValid:', isValid); // Log the value of isValid
        if (!isValid) {
            return;
        }

        // Pass this info back to the parent when Weiter is clicked
        props.onWeiterClick();
    };

    return (
        <Grid padded className="shared-section basis-info">
            <Grid.Column>
                <Header as="h2">1. Basisinformationen zum Unternehmen</Header>
                <Divider />
                <Form>
                    <Grid columns={2} stackable>
                        <Grid.Column>
                            <Form.Field>
                                <label>Branche*</label>
                                <Select
                                    className="wideSelect"
                                    options={branchOptions.map(option => ({ value: option.key, text: option.text }))}
                                    name="branche"
                                    onChange={(event, { name, value }) => handleChange(event, { name, value })}
                                    placeholder="Branche auswählen"
                                    required
                                />
                            </Form.Field>

                            <Form.Group inline>
                                <label>Lage*</label>
                                {lageOptions.map(option => (
                                    <Form.Field key={option.key}>
                                        <Radio
                                            className={lage?.value === option.value ? "radio-selected" : ""}
                                            name="lage"
                                            value={option.key}
                                            label={option.text}
                                            checked={lage?.value === option.value}
                                            onChange={(event, { name, value }) => handleChange(event, { name, value })}
                                            required
                                        />
                                    </Form.Field>
                                ))}
                            </Form.Group>
                            <Form.Group className="input-group">
                                <Form.Field>
                                    <label>Alter der Firma in Jahren*</label>
                                </Form.Field>
                            </Form.Group>

                            <Form.Group className="input-container">
                                <Button
                                    icon="minus"
                                    data-type="minus"
                                    data-field="alter"
                                    onClick={handleMinusClick}
                                />
                                <input
                                    type="number"
                                    name="alter"
                                    className="form-control input-number-plusminus"
                                    min="1"
                                    value={alter}
                                    onChange={(event) => handleChange(event, { name: "alter", value: event.target.value })}
                                    required
                                />
                                <Button
                                    icon="plus"
                                    data-type="plus"
                                    data-field="alter"
                                    onClick={(event) => handleChange(event, { name: "alter", value: "+" })}
                                />
                            </Form.Group>
                        </Grid.Column>
                    </Grid>

                    <Form.Field>
                        <p className="required-fields-hint">
                            <span className="required">*</span>Diese Eingaben sind Pflichtfelder
                        </p>
                    </Form.Field>

                    <Form.Field>
                        <div className="button-container">
                            <Button className="click-continue" primary type="submit" onClick={handleWeiterClick}>
                                Weiter
                            </Button>
                        </div>
                    </Form.Field>

                </Form>
            </Grid.Column>
        </Grid>
    );
}

export default BasisInfo;
