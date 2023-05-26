import React from 'react';
import {Grid, Header, Divider, Form, Radio, Button} from 'semantic-ui-react';

const Anlass = (props) => {
    const radioOptions = [
        "Unternehmensverkauf",
        "Unternehmenskauf",
        "Nachfolgeplanung",
        "Aus Interesse / Akademische Nutzung"
    ];

    const hiddenInputs = {
        anlass: "",
        submissionDate: "2023-05-24",
        ertragswertHiddenFullInput: "22.743.294",
        ertragswertHiddenFormattedInput: "22.7 Mio",
        submissionKey: "33cfe8bd63690b5aeb560f364f1d6ef03fa5b82f6447e3f13d3a274fadfd238f"
    };

    return (
        <Grid padded className="shared-section anlass">
            <Grid.Column>
                <Header as="h2">6. Anlass für den Unternehmenswertrechner</Header>
                <Divider />
                <Form>
                    <Header as="h3">
                        Bitte wählen Sie den Anlass der Bewertung aus:
                        <span className="required-mark">*</span>
                    </Header>
                    <Form.Field className="anlass-wrapper">
                        {radioOptions.map((option) => (
                            <Form.Field key={option}>
                                <Radio
                                    label={option}
                                    name="anlass"
                                    value={option}
                                    required
                                />
                            </Form.Field>
                        ))}
                    </Form.Field>
                    {Object.entries(hiddenInputs).map(([name, value]) => (
                        <input
                            type="hidden"
                            name={name}
                            value={value}
                            className="d-none"
                            key={name}
                        />
                    ))}

                    <Form.Field>
                        <p className="required-fields-hint">
                            <span className="required">*</span>Diese Eingaben sind Pflichtfelder
                        </p>
                    </Form.Field>

                    <Form.Field>
                        <div className="button-container">
                            <Button className="click-back" onClick={props.onZuruckClick}>Zurück</Button>
                            <Button primary type="submit">
                                Bewertung abschließen
                            </Button>
                        </div>
                    </Form.Field>

                </Form>
            </Grid.Column>
        </Grid>
    );
};

export default Anlass;