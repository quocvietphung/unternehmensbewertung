import React, { useState } from "react";
import { Checkbox, Label, Grid, Header, Segment, Form, Divider, Button } from "semantic-ui-react";

const Kennzahlen = () => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    return (
        <Grid padded className="kennzahlen">
            <Grid.Row>
                <Grid.Column>
                    <Header as='h2'>2. Finanzwirtschaftliche Kennzahlen</Header>
                    <Divider />
                    <Form>
                        <Form.Field>
                            <Checkbox label='Möchten Sie eine Prognose für das aktuelle Kalenderjahr angeben?' toggle onChange={handleCheckboxChange} />
                        </Form.Field>
                        <Header as='h3'>Umsatz der letzten Jahre*</Header>
                        <Label>
                            Sie können Ihre Kennzahlen über den Schieberegler anpassen oder direkt über die
                            Zahleneingabe eintragen.
                            <br />
                            Bitte beachten Sie, dass ein Unternehmenswert erst ab einem Umsatz von 100.000 EUR
                            berechnet werden kann.
                        </Label>
                        <Segment>
                            <Form.Group widths='equal'>
                                <Form.Field>
                                    <label>Umsatz 2020</label>
                                    <input type='range' min='100000' max='50000000' step='50000' onChange={(e) => console.log(e.target.value)} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Umsatz 2021</label>
                                    <input type='range' min='100000' max='50000000' step='50000' onChange={(e) => console.log(e.target.value)} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Umsatz 2022</label>
                                    <input type='range' min='100000' max='50000000' step='50000' onChange={(e) => console.log(e.target.value)} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Prognose 2023</label>
                                    <input type='range' disabled={!checked} min='100000' max='50000000' step='50000' onChange={(e) => console.log(e.target.value)} />
                                </Form.Field>
                            </Form.Group>
                        </Segment>
                        <Header as='h3'>EBIT (Gewinn vor Zinsen und Steuern) der letzten Jahre*</Header>
                        <Label>
                            Sie können Ihre Kennzahlen über den Schieberegler anpassen oder direkt über die
                            Zahleneingabe eintragen.
                            <br />
                            Bitte beachten Sie, dass ein Unternehmenswert erst ab einem EBIT von 50.000 EUR
                            berechnet werden kann.
                        </Label>
                        <Segment>
                            <Form.Group widths='equal'>
                                <Form.Field>
                                    <label>EBIT 2020</label>
                                    <input type='range' min='0' max='50000' step='1000' onChange={(e) => console.log(e.target.value)} />
                                </Form.Field>
                                <Form.Field>
                                    <label>EBIT 2021</label>
                                    <input type='range' min='0' max='50000' step='1000' onChange={(e) => console.log(e.target.value)} />
                                </Form.Field>
                                <Form.Field>
                                    <label>EBIT 2022</label>
                                    <input type='range' min='0' max='50000' step='1000' onChange={(e) => console.log(e.target.value)} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Prognose 2023</label>
                                    <input type='range' disabled={!checked} min='0' max='50000' step='1000' onChange={(e) => console.log(e.target.value)} />
                                </Form.Field>
                            </Form.Group>
                        </Segment>
                        <Form.Field>
                            <div className="button-container">
                                <Button primary type='submit'>Submit</Button>
                            </div>
                        </Form.Field>
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default Kennzahlen;

