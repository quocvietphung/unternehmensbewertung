import React, { useState } from 'react';
import { Grid, Form, Button } from 'semantic-ui-react';
import './Test.scss';

const Test = () => {
    const unternehmenswert = 'Der Wert Ihres Unternehmens beträgt:';
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = () => {
        // Xử lý dữ liệu khi form được submit
        console.log(`Name: ${name}`);
        console.log(`Age: ${age}`);
    };

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={10}>
                    <h2 className="heading-title">{unternehmenswert}</h2>
                </Grid.Column>
                <Grid.Column>
                    <Form onSubmit={handleSubmit}>
                        <Form.Input
                            label="Name"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Form.Input
                            label="Age"
                            placeholder="Enter your age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                        <Button type="submit" primary>
                            Submit
                        </Button>
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default Test;