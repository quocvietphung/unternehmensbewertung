import React, { useState } from 'react';
import { Grid, Header, Divider, Form, Radio, Button, Icon } from 'semantic-ui-react';

const Anlass = (props) => {
    const radioOptions = [
        {
            value: "Unternehmensverkauf",
            icon: "dollar sign",
            label: "Unternehmensverkauf"
        },
        {
            value: "Unternehmenskauf",
            icon: "shopping cart",
            label: "Unternehmenskauf"
        },
        {
            value: "Nachfolgeplanung",
            icon: "users",
            label: "Nachfolgeplanung"
        },
        {
            value: "Aus Interesse / Akademische Nutzung",
            icon: "graduation cap",
            label: "Aus Interesse / Akademische Nutzung"
        }
    ];

    const [selectedOption, setSelectedOption] = useState('');

    const handleRadioChange = (e, { value }) => setSelectedOption(value);

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can work with selectedOption here
        console.log(selectedOption);
    }

    return (
        <Grid padded className="shared-section anlass">
            <Grid.Column>
                <Header as="h2">6. Anlass für den Unternehmenswertrechner</Header>
                <Divider />
                <Form onSubmit={handleSubmit}>
                    <Header as="h3">
                        Bitte wählen Sie den Anlass der Bewertung aus:
                        <span className="required-mark">*</span>
                    </Header>
                    <Form.Field className="anlass-wrapper">
                        <Grid columns={2}>
                            <Grid.Row>
                                {radioOptions.map((option) => (
                                    <Grid.Column key={option.value}>
                                        <Button
                                            fluid
                                            icon
                                            labelPosition="left"
                                            className={`option-button ${selectedOption === option.value ? 'selected-option' : ''}`}
                                            onClick={() => handleRadioChange(null, { value: option.value })}
                                        >
                                            <Icon name={option.icon} />
                                            {option.label}
                                        </Button>
                                    </Grid.Column>
                                ))}
                            </Grid.Row>
                        </Grid>
                        <p className="required-fields-hint">
                            <span className="required">*</span>Diese Eingaben sind Pflichtfelder
                        </p>

                        <div className="button-container">
                            <Button className="click-back" onClick={props.onZuruckClick}>
                                Zurück
                            </Button>
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