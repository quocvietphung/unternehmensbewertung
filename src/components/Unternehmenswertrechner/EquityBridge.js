import React, { useState } from 'react';
import {Grid, Header, Divider, Form, Input, Label, Button} from 'semantic-ui-react';

const EquityBridge = (props) => {
    const [bargeldBestand, setBargeldBestand] = useState('');
    const [finanzSchulden, setFinanzSchulden] = useState('');

    const handleBargeldBestandChange = (e) => {
        setBargeldBestand(e.target.value);
    };

    const handleFinanzSchuldenChange = (e) => {
        setFinanzSchulden(e.target.value);
    };

    const handleWeiterClick = () => {
        props.onWeiterClick();
    };

    return (
        <Grid padded className="shared-section equity">
            <Grid.Column>
                <Header as="h2">4. Equity Bridge</Header>
                <Divider/>
                <Form>
                    <Header as="h3">
                        Liquide Mittel &amp; Verbindlichkeiten
                        <Label color="red" horizontal className="required-label">*</Label>
                    </Header>

                    <Form.Field className="form-field">
                        <label className="form-label">Aktueller Bargeldbestand (Bankkonten und andere bargeldähnliche Guthaben)</label>
                        <Input
                            type="number"
                            name="bargeldBestand"
                            value={bargeldBestand}
                            onChange={handleBargeldBestandChange}
                            required
                            className="form-input"
                        />
                        {bargeldBestand < 0 && <p className="error-message">Keine negativen Eingaben erlaubt.</p>}
                        {bargeldBestand === '' && <p className="error-message">Das ist ein Pflichtfeld</p>}
                    </Form.Field>

                    <Form.Field className="form-field">
                        <label className="form-label">Aktuelle Finanzschulden (ohne Hypotheken)</label>
                        <Input
                            type="number"
                            name="finanzSchulden"
                            value={finanzSchulden}
                            onChange={handleFinanzSchuldenChange}
                            required
                            className="form-input"
                        />
                        {finanzSchulden < 0 && <p className="error-message">Keine negativen Eingaben erlaubt.</p>}
                        {finanzSchulden === '' && <p className="error-message">Das ist ein Pflichtfeld</p>}
                    </Form.Field>

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

export default EquityBridge;
