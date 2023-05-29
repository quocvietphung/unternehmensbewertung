import React, { useState, useEffect } from "react";
import { Header, Form, Grid, Select, Radio, Button, Divider } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { setValidity, setError, setUnternehmensbewertung } from '../../redux/reducers';

const BasisInfo = (props) => {
    const [branche, setBranche] = useState(props.basisInfo?.branche || "");
    const [lage, setLage] = useState(props.basisInfo?.lage || "städtisch");
    const [alter, setAlter] = useState(props.basisInfo?.alter || 1);
    const [isValid, setIsValid] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const bewertung = calculateUnternehmensbewertung(branche, lage, alter);
        console.log("Unternehmensbewertung:", bewertung);
        dispatch(setUnternehmensbewertung(bewertung));

        // Check validity
        console.log("Checking validity...");
        checkValidity();
    }, [branche, lage, alter]);

    const handleChange = (event, { name, value }) => {
        if (name === "alter") {
            if (value === "+") {
                setAlter((prevAlter) => prevAlter + 1);
            } else if (value === "-" && alter > 0) {
                setAlter((prevAlter) => prevAlter - 1);
            } else if (!isNaN(value)) {
                setAlter(parseInt(value));
            }
        } else if (name === "branche") {
            setBranche(value);
        } else if (name === "lage") {
            setLage(value);
        }
    };

    const branchOptions = [
        { key: 0, value: "", calculate: "", text: "Branche auswählen" },
        { key: 1, value: "bau", calculateToLage: { städtisch: 10000, ländlich: 8000 }, text: "Bau und Handwerk" },
        { key: 2, value: "beratung", calculateToLage: { städtisch: 5000, ländlich: 8500 }, text: "Beratende Dienstleistung" },
        { key: 3, value: "chemie", calculateToLage: { städtisch: 5900, ländlich: 11000 }, text: "Chemie, Kunststoffe, Papier" },
        { key: 4, value: "elektrotechnik", calculateToLage: { städtisch: 5400, ländlich: 8400 }, text: "Elektrotechnik" },
        { key: 5, value: "fahrzeugbau", calculateToLage: { städtisch: 5150, ländlich: 7200 }, text: "Fahrzeugbau und -zubehör" },
        { key: 6, value: "handel", calculateToLage: { städtisch: 5550, ländlich: 7300 }, text: "Handel und E-Commerce" },
        { key: 7, value: "maschinenbau", calculateToLage: { städtisch: 5600, ländlich: 8500 }, text: "Maschinen- und Anlagenbau" },
        { key: 8, value: "medien", calculateToLage: { städtisch: 5300, ländlich: 11600 }, text: "Medien" },
        { key: 9, value: "nahrungs", calculateToLage: { städtisch: 5450, ländlich: 11100 }, text: "Nahrungs- und Genussmittel" },
        { key: 10, value: "pharma", calculateToLage: { städtisch: 6500, ländlich: 16400 }, text: "Pharma, Bio- und Medizintechnik" },
        { key: 11, value: "software", calculateToLage: { städtisch: 5650, ländlich: 15600 }, text: "Software" },
        { key: 12, value: "telekommunikation", calculateToLage: { städtisch: 5650, ländlich: 10500 }, text: "Telekommunikation" },
        { key: 13, value: "textilien", calculateToLage: { städtisch: 4500, ländlich: 8100 }, text: "Textilien und Bekleidung" },
        { key: 14, value: "transport", calculateToLage: { städtisch: 4850, ländlich: 6400 }, text: "Transport, Logistik und Touristik" },
        { key: 15, value: "umwelttechnik", calculateToLage: { städtisch: 5600, ländlich: 8500 }, text: "Umwelttechnik" },
        { key: 16, value: "versorgungswirtschaft", calculateToLage: { städtisch: 5600, ländlich: 8500 }, text: "Versorgungswirtschaft" },
    ];

    const calculateUnternehmensbewertung = (branche, lage, alter) => {
        let unternehmensbewertung = 0;

        console.log("branche:", branche);
        console.log("lage:", lage);
        console.log("alter:", alter);

        const option = branchOptions.find((option) => option.value === branche);

        if (option) {
            const calculateToLage = option.calculateToLage;
            if (calculateToLage && calculateToLage.hasOwnProperty(lage)) {
                unternehmensbewertung = alter * calculateToLage[lage];
            }
        }

        console.log("Unternehmensbewertung:", unternehmensbewertung);
        return unternehmensbewertung;
    };

    const checkValidity = () => {
        let errors = [];
        if (!branche || branche === "auswählen") {
            errors.push("Bitte wählen Sie eine Branche aus.");
        }
        if (lage !== "städtisch" && lage !== "ländlich") {
            errors.push("Bitte wählen Sie eine Lage aus.");
        }
        if (alter <= 0) {
            errors.push("Der Minimalwert für dieses Eingabefeld wurde erreicht.");
        }

        dispatch(setError(errors));

        const valid = errors.length === 0;
        setIsValid(valid);
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
        if (!isValid) {
            return;
        }

        // Create an object with all the info you need
        const info = {
            branche,
            lage,
            alter
        }

        // Pass this info back to the parent when Weiter is clicked
        props.onWeiterClick(info);
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
                                    options={branchOptions}
                                    name="branche"
                                    value={branche}
                                    onChange={handleChange}
                                    placeholder="Branche auswählen"
                                    required
                                />
                            </Form.Field>
                            {/*{!isValid && !branche && <p style={{ color: "red" }}>Bitte wählen Sie eine Branche aus.</p>}*/}
                            <Form.Group inline>
                                <label>Lage*</label>
                                <Form.Field>
                                    <Radio
                                        className={lage === "städtisch" ? "radio-selected" : ""}
                                        name="lage"
                                        value="städtisch"
                                        label="städtisch"
                                        checked={lage === "städtisch"}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Radio
                                        className={lage === "ländlich" ? "radio-selected" : ""}
                                        name="lage"
                                        value="ländlich"
                                        label="ländlich"
                                        checked={lage === "ländlich"}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Field>
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
