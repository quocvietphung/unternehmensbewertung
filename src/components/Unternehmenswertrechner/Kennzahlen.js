import React, { Component } from "react";
import { Checkbox, Input, Label, Grid, Header, Segment, Form, Divider, Button } from "semantic-ui-react";

class Kennzahlen extends Component {
    render() {
        return (
            <Grid padded className="kennzahlen">
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h2'>2. Finanzwirtschaftliche Kennzahlen</Header>
                        <Divider />
                        <Form>
                            <Form.Field>
                                <Checkbox label='Möchten Sie eine Prognose für das aktuelle Kalenderjahr angeben?' toggle />
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
                                        <Input label={{ basic: true, content: 'Umsatz 2020' }} labelPosition='right' type='number' placeholder='Umsatz 2020' />
                                    </Form.Field>
                                    <Form.Field>
                                        <Input label={{ basic: true, content: 'Umsatz 2021' }} labelPosition='right' type='number' placeholder='Umsatz 2021' />
                                    </Form.Field>
                                    <Form.Field>
                                        <Input label={{ basic: true, content: 'Umsatz 2022' }} labelPosition='right' type='number' placeholder='Umsatz 2022' />
                                    </Form.Field>
                                    <Form.Field>
                                        <Input disabled label={{ basic: true, content: 'Prognose 2023' }} labelPosition='right' type='number' placeholder='Prognose 2023' />
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
                                        <Input label={{ basic: true, content: 'EBIT 2020' }} labelPosition='right' type='number' placeholder='EBIT 2020' />
                                    </Form.Field>
                                    <Form.Field>
                                        <Input label={{ basic: true, content: 'EBIT 2021' }} labelPosition='right' type='number' placeholder='EBIT 2021' />
                                    </Form.Field>
                                    <Form.Field>
                                        <Input label={{ basic: true, content: 'EBIT 2022' }} labelPosition='right' type='number' placeholder='EBIT 2022' />
                                    </Form.Field>
                                    <Form.Field>
                                        <Input disabled label={{ basic: true, content: 'Prognose 2023' }} labelPosition='right' type='number' placeholder='Prognose 2023' />
                                    </Form.Field>
                                </Form.Group>
                            </Segment>
                            <Form.Field>
                                <Checkbox label='Möchten Sie eine Prognose für das folgende Jahr angeben?' toggle />
                            </Form.Field>
                            <Form.Field>
                                <Button primary type='submit'>Submit</Button>
                            </Form.Field>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Kennzahlen;

