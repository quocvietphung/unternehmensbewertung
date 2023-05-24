import React, { useState } from 'react';
import { Grid, Header, Divider, Form, Input, Label } from 'semantic-ui-react';

const EquityBridge = () => {
    const [bargeldBestand, setBargeldBestand] = useState('');
    const [finanzSchulden, setFinanzSchulden] = useState('');

    const handleBargeldBestandChange = (e) => {
        setBargeldBestand(e.target.value);
    };

    const handleFinanzSchuldenChange = (e) => {
        setFinanzSchulden(e.target.value);
    };

    return (
        <Grid padded className="shared-section equity">
            <Grid.Column>
                <Header as="h2">4. Equity Bridge</Header>
                <Divider/>

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
            </Grid.Column>
        </Grid>
    );
};

export default EquityBridge;
