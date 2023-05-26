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

        // Tính toán Unternehmensbewertung
        const bewertung = calculateUnternehmensbewertung(branche, lage, alter);
        dispatch(setUnternehmensbewertung(bewertung));
    };

    const calculateUnternehmensbewertung = (branche, lage, alter) => {
        let unternehmensbewertung = 0;

        if (branche === "bau") {
            // Tính toán cho ngành bau
            if (lage === "städtisch") {
                unternehmensbewertung = alter * 10000; // Ví dụ đơn giản: alter * 10,000
            } else if (lage === "ländlich") {
                unternehmensbewertung = alter * 8000; // Ví dụ đơn giản: alter * 8,000
            }
        } else if (branche === "beratung") {
            // Tính toán cho ngành beratung
            if (lage === "städtisch") {
                unternehmensbewertung = alter * 15000; // Ví dụ đơn giản: alter * 15,000
            } else if (lage === "ländlich") {
                unternehmensbewertung = alter * 12000; // Ví dụ đơn giản: alter * 12,000
            }
        }

        return unternehmensbewertung;
    };

    useEffect(() => {
        console.log("Checking validity...");
        checkValidity();
    }, [branche, lage, alter]);

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

    const branchOptions = [
        { key: "auswählen", value: "", text: "Branche auswählen" },
        { key: "bau", value: "4.8, 0.63", text: "Bau und Handwerk" },
        { key: "beratung", value: "5.0, 0.85", text: "Beratende Dienstleistung" },
        { key: "chemie", value: "5.9, 1.1", text: "Chemie, Kunststoffe, Papier" },
        { key: "elektrotechnik", value: "5.4, 0.84", text: "Elektrotechnik" },
        { key: "fahrzeugbau", value: "5.15, 0.72", text: "Fahrzeugbau und -zubehör" },
        { key: "handel", value: "5.55, 0.73", text: "Handel und E-Commerce" },
        { key: "maschinenbau", value: "5.6, 0.85", text: "Maschinen- und Anlagenbau" },
        { key: "medien", value: "5.3, 1.16", text: "Medien" },
        { key: "nahrungs", value: "5.45, 1.11", text: "Nahrungs- und Genussmittel" },
        { key: "pharma", value: "6.5, 1.64", text: "Pharma, Bio- und Medizintechnik" },
        { key: "software", value: "5.65, 1.56", text: "Software" },
        { key: "telekommunikation", value: "5.65, 1.05", text: "Telekommunikation" },
        { key: "textilien", value: "4.5, 0.81", text: "Textilien und Bekleidung" },
        { key: "transport", value: "4.85, 0.64", text: "Transport, Logistik und Touristik" },
        { key: "umwelttechnik", value: "5.60, 0.85", text: "Umwelttechnik" },
        { key: "versorgungswirtschaft", value: "5.60, 0.85", text: "Versorgungswirtschaft" },
    ];

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
