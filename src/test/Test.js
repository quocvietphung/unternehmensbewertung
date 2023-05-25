import React from 'react';
import { Grid, Header, Divider, Form, Radio } from 'semantic-ui-react';
import './Test.scss';

const Test = () => {
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
        <Grid padded className="Test">
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
                </Form>
            </Grid.Column>
        </Grid>
    );
};

export default Test;