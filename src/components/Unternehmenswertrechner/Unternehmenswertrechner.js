import React, { Component } from 'react';
import { Form, Header, Radio, Select, Button, Grid } from 'semantic-ui-react';
import './Unternehmenswertrechner.scss';

class Unternehmenswertrechner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            branche: '',
            lage: '',
            alter: 0,
            isValid: false
        };
    }

    handleChange = (event, { name, value }) => {
        if (name === "alter" && (value === "+" || value === "-")) {
            const currentValue = this.state.alter;
            const newValue = value === "+" ? currentValue + 1 : currentValue - 1;
            this.setState({ alter: newValue }, this.checkValidity);
        } else {
            this.setState({ [name]: value }, this.checkValidity);
        }
    };

    checkValidity = () => {
        const { branche, lage, alter } = this.state;
        if (branche && lage && alter) {
            this.setState({ isValid: true });
        } else {
            this.setState({ isValid: false });
        }
    };

    render() {
        const { branche, lage, alter, isValid } = this.state;

        const branchOptions = [
            { key: 'bau', value: '4.8, 0.63', text: 'Bau und Handwerk' },
            { key: 'beratung', value: '5.0, 0.85', text: 'Beratende Dienstleistung' },
        ];

        return (
            <div className="Unternehmenswertrechner">
                <div className="unternehmenswertrechner-container">
                    <div className="welcome-column">
                        <Header as="h1" className="header-green">Willkommen beim Unternehmenswertrechner</Header>
                        <Form>
                            <Header as="h2">1. Basisinformationen zum Unternehmen</Header>
                            <Grid columns={2} stackable>
                                <Grid.Column>
                                    <Form.Field>
                                        <label>Branche*</label>
                                        <Select
                                            options={branchOptions}
                                            name="branche"
                                            value={branche}
                                            onChange={this.handleChange}
                                            placeholder="Branche auswählen"
                                            required
                                        />
                                    </Form.Field>
                                    <Form.Group inline>
                                        <label>Lage*</label>
                                        <Form.Field>
                                            <Radio
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
                                        <div className="input-group">
                                            <Button
                                                icon="minus"
                                                data-type="minus"
                                                data-field="alter"
                                                onClick={(event) => this.handleChange(event, { name: 'alter', value: '-' })}
                                            />
                                            <input
                                                type="number"
                                                name="alter"
                                                className="form-control input-number-plusminus"
                                                min="0"
                                                value={alter}
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <Button
                                                icon="plus"
                                                data-type="plus"
                                                data-field="alter"
                                                onClick={(event) => this.handleChange(event, { name: 'alter', value: '+' })}
                                            />
                                        </div>
                                    </Form.Field>
                                </Grid.Column>
                            </Grid>
                            <p>* Diese Eingaben sind Pflichtfelder</p>
                            <Button type="submit" primary disabled={!isValid}>
                                Weiter
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Unternehmenswertrechner;
