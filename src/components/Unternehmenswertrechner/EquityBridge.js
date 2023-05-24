import React from 'react';
import { Grid, Header, Divider, Form, Input, Label, Message } from 'semantic-ui-react';

const EquityBridge = () => {
    return (
        <Grid padded className="shared-section kennzahlen">
            <Grid.Column>
                <Header as="h2">4. Equity Bridge</Header>
                <Divider />

                <Header as="h3">
                    Liquide Mittel &amp; Verbindlichkeiten
                    <Label color="red" horizontal>*</Label>
                </Header>

                <Form.Field>
                    <label>Aktueller Bargeldbestand (Bankkonten und andere bargeldähnliche Guthaben)</label>
                    <Input
                        type="number"
                        name="bargeldBestand"
                        required
                    />
                    <Message negative>
                        <Message.Header>Keine negativen Eingaben erlaubt.</Message.Header>
                    </Message>
                    <Message negative>
                        <Message.Header>Das ist ein Pflichtfeld</Message.Header>
                    </Message>
                </Form.Field>

                <Form.Field>
                    <label>Aktuelle Finanzschulden (ohne Hypotheken)</label>
                    <Input
                        type="number"
                        name="finanzSchulden"
                        required
                    />
                    <Message negative>
                        <Message.Header>Keine negativen Eingaben erlaubt.</Message.Header>
                    </Message>
                    <Message negative>
                        <Message.Header>Das ist ein Pflichtfeld</Message.Header>
                    </Message>
                </Form.Field>

            </Grid.Column>
        </Grid>
    );
};

export default EquityBridge;
