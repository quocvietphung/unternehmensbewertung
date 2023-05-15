import React, {useState} from "react";
import {Checkbox, Label, Grid, Header, Segment, Form, Divider, Button} from "semantic-ui-react";

const Kennzahlen = () => {
    const [checked, setChecked] = useState(false);
    const [umsatz2020, setUmsatz2020] = useState(25000000); // 25M as default value
    const [umsatz2021, setUmsatz2021] = useState(25000000);
    const [umsatz2022, setUmsatz2022] = useState(25000000);
    const [prognose2023, setPrognose2023] = useState(25000000);
    const [ebit2020, setEbit2020] = useState(5000000);
    const [ebit2021, setEbit2021] = useState(5000000);
    const [ebit2022, setEbit2022] = useState(5000000);
    const [ebitPrognose2023, setEbitPrognose2023] = useState(5000000);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    return (
        <Grid padded className="shared-section kennzahlen">
            <Grid.Column>
                <Header as="h2">2. Finanzwirtschaftliche Kennzahlen</Header>
                <Divider/>
                <Form>
                    <Form.Field>
                        <Checkbox label="Möchten Sie eine Prognose für das aktuelle Kalenderjahr angeben?" toggle
                                  onChange={handleCheckboxChange}/>
                    </Form.Field>
                    <Header as="h3">Umsatz der letzten Jahre*</Header>
                    <Label>
                        Sie können Ihre Kennzahlen über den Schieberegler anpassen oder direkt über die
                        Zahleneingabe eintragen.
                        <br/>
                        Bitte beachten Sie, dass ein Unternehmenswert erst ab einem Umsatz von 100.000 EUR
                        berechnet werden kann.
                    </Label>
                    <Segment>
                        <Form>
                            <Form.Group widths={[3, 6, 3]} className="form-group-3-6-3">
                                <Form.Field width={3}>
                                    <label>Umsatz 2020</label>
                                </Form.Field>
                                <Form.Field width={6}>
                                    <input
                                        type="range"
                                        min="100000"
                                        max="50000000"
                                        step="50000"
                                        value={umsatz2020}
                                        onChange={(e) => setUmsatz2020(e.target.value)}
                                    />
                                </Form.Field>
                                <Form.Field width={3}>
                                    <input type="text" value={umsatz2020} readOnly />
                                </Form.Field>
                            </Form.Group>

                            <Form.Group widths={[3, 6, 3]} className="form-group-3-6-3">
                                <Form.Field width={3}>
                                    <label>Umsatz 2021</label>
                                </Form.Field>
                                <Form.Field width={6}>
                                    <input
                                        type="range"
                                        min="100000"
                                        max="50000000"
                                        step="50000"
                                        value={umsatz2021}
                                        onChange={(e) => setUmsatz2021(e.target.value)}
                                    />
                                </Form.Field>
                                <Form.Field width={3}>
                                    <input type="text" value={umsatz2021} readOnly />
                                </Form.Field>
                            </Form.Group>

                            <Form.Group widths={[3, 6, 3]} className="form-group-3-6-3">
                                <Form.Field width={3}>
                                    <label>Umsatz 2022</label>
                                </Form.Field>
                                <Form.Field width={6}>
                                    <input
                                        type="range"
                                        min="100000"
                                        max="50000000"
                                        step="50000"
                                        value={umsatz2022}
                                        onChange={(e) => setUmsatz2022(e.target.value)}
                                    />
                                </Form.Field>
                                <Form.Field width={3}>
                                    <input type="text" value={umsatz2022} readOnly />
                                </Form.Field>
                            </Form.Group>

                            <Form.Group widths={[3, 6, 3]} className="form-group-3-6-3">
                                <Form.Field width={3}>
                                    <label>Prognose 2023</label>
                                </Form.Field>
                                <Form.Field width={6}>
                                    <input
                                        type="range"
                                        disabled={!checked}
                                        min="100000"
                                        max="50000000"
                                        step="50000"
                                        value={prognose2023}
                                        onChange={(e) => setPrognose2023(e.target.value)}
                                    />
                                </Form.Field>
                                <Form.Field width={3}>
                                    <input
                                        type="text"
                                        value={prognose2023}
                                        disabled={!checked}
                                        readOnly
                                    />
                                </Form.Field>
                            </Form.Group>
                        </Form>
                    </Segment>
                    <Header as="h3">EBIT (Gewinn vor Zinsen und Steuern) der letzten Jahre*</Header>
                    <Label>
                        Sie können Ihre Kennzahlen über den Schieberegler anpassen oder direkt über die
                        Zahleneingabe eintragen.
                        <br/>
                        Bitte beachten Sie, dass ein Unternehmenswert erst ab einem EBIT von 50.000 EUR
                        berechnet werden kann.
                    </Label>
                    <Segment>
                        <Form>
                            <Form.Group widths={[3, 6, 3]}>
                                <Form.Field width={3}>
                                    <label>EBIT 2020</label>
                                </Form.Field>
                                <Form.Field width={6}>
                                    <input
                                        type="range"
                                        min="0"
                                        max="10000000"
                                        step="1000"
                                        value={ebit2020}
                                        onChange={(e) => setEbit2020(e.target.value)}
                                    />
                                </Form.Field>
                                <Form.Field width={3}>
                                    <input type="text" value={ebit2020} readOnly />
                                </Form.Field>
                            </Form.Group>

                            <Form.Group widths={[3, 6, 3]}>
                                <Form.Field width={3}>
                                    <label>EBIT 2021</label>
                                </Form.Field>
                                <Form.Field width={6}>
                                    <input
                                        type="range"
                                        min="0"
                                        max="10000000"
                                        step="1000"
                                        value={ebit2021}
                                        onChange={(e) => setEbit2021(e.target.value)}
                                    />
                                </Form.Field>
                                <Form.Field width={3}>
                                    <input type="text" value={ebit2021} readOnly />
                                </Form.Field>
                            </Form.Group>

                            <Form.Group widths={[3, 6, 3]}>
                                <Form.Field width={3}>
                                    <label>EBIT 2022</label>
                                </Form.Field>
                                <Form.Field width={6}>
                                    <input
                                        type="range"
                                        min="0"
                                        max="10000000"
                                        step="1000"
                                        value={ebit2022}
                                        onChange={(e) => setEbit2022(e.target.value)}
                                    />
                                </Form.Field>
                                <Form.Field width={3}>
                                    <input type="text" value={ebit2022} readOnly />
                                </Form.Field>
                            </Form.Group>

                            <Form.Group widths={[3, 6, 3]}>
                                <Form.Field width={3}>
                                    <label>Prognose 2023</label>
                                </Form.Field>
                                <Form.Field width={6}>
                                    <input
                                        type="range"
                                        disabled={!checked}
                                        min="0"
                                        max="10000000"
                                        step="1000"
                                        value={ebitPrognose2023}
                                        onChange={(e) => setEbitPrognose2023(e.target.value)}
                                    />
                                </Form.Field>
                                <Form.Field width={3}>
                                    <input
                                        type="text"
                                        value={ebitPrognose2023}
                                        disabled={!checked}
                                        readOnly
                                    />
                                </Form.Field>
                            </Form.Group>
                        </Form>
                    </Segment>
                    <Form.Field>
                        <div className="button-container">
                            <Button primary type="submit">
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

