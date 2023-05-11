import React, { Component } from 'react';
import { Grid, Form, Header, Radio, Input, Button, Segment, Divider, Placeholder } from 'semantic-ui-react';
import './Unternehmenswertrechner.scss';

class Unternehmenswertrechner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            branche: 'Telekommunikation',
            lage: '',
            alter: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { branche, lage, alter } = this.state;

        return (
            <div className="Unternehmenswertrechner">
                <Grid className="unternehmenswertrechner-container">
                    <Grid.Column width={5} className="unternehmenswertrechner-info">
                        <Segment>
                            <Header as="h3">Individuelle Einschätzung Ihres Unternehmens</Header>
                            <Divider />
                            <Placeholder>
                                <Placeholder.Line />
                                <Placeholder.Line />
                            </Placeholder>
                            <p>Bitte füllen Sie weitere Felder des Unternehmenswertrechners aus, um ein Ergebnis zu erhalten.</p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <Header as="h1">Willkommen beim Unternehmenswertrechner</Header>
                        <Form>
                            <Header as="h3">1. Basisinformationen zum Unternehmen</Header>
                            <Form.Field>
                                <label>Branche*</label>
                                <Input
                                    type="text"
                                    id="branche"
                                    name="branche"
                                    value={branche}
                                    onChange={this.handleChange}
                                    required
                                />
                            </Form.Field>
                            <Form.Group grouped>
                                <label>Lage*</label>
                                <Form.Field>
                                    <Radio
                                        id="staedtisch"
                                        name="lage"
                                        value="städtisch"
                                        label="städtisch"
                                        checked={lage === 'städtisch'}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Radio
                                        id="laendlich"
                                        name="lage"
                                        value="ländlich"
                                        label="ländlich"
                                        checked={lage === 'ländlich'}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </Form.Field>
                            </Form.Group>
                            <Form.Field>
                                <label>Alter der Firma in Jahren*</label>
                                <Input
                                    type="number"
                                    id="alter"
                                    name="alter"
                                    value={alter}
                                    onChange={this.handleChange}
                                    required
                                />
                            </Form.Field>
                            <p>*Diese Eingaben sind Pflichtfelder</p>
                            <Button type="submit" primary>Submit</Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default Unternehmenswertrechner;
