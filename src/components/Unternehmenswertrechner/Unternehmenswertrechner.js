import React, {Component} from 'react';
import {Form, Header, Radio, Input, Button} from 'semantic-ui-react';
import './Unternehmenswertrechner.scss';

class Unternehmenswertrechner extends Component {
    state = {
        branche: 'Telekommunikation',
        lage: '',
        alter: '',
        isValid: false
    };

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value}, this.checkValidity);
    }

    checkValidity = () => {
        const {branche, lage, alter} = this.state;
        if (branche && lage && alter) {
            this.setState({isValid: true});
        } else {
            this.setState({isValid: false});
        }
    }

    render() {
        const {branche, lage, alter, isValid} = this.state;

        return (
            <div className="Unternehmenswertrechner">
                <div className="unternehmenswertrechner-container">
                    <div className="welcome-column">
                        <Header as="h1">Willkommen beim Unternehmenswertrechner</Header>
                        <Form>
                            <Header as="h2">1. Basisinformationen zum Unternehmen</Header>
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
                            <Button type="submit" primary>
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
