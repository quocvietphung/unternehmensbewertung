import React from 'react';
import { Header } from 'semantic-ui-react';
import './Test.css'; // Import file CSS

const Test = () => {
    const unternehmenswert = 'Der Wert Ihres Unternehmens beträgt:';

    return (
        <Header as="h2" className="heading-title">
            {unternehmenswert}
        </Header>
    );
};

export default Test;