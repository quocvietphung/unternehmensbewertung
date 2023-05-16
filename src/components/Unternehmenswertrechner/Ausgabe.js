import React from 'react';
import { Header, Icon, Segment, Message, Image, Button } from 'semantic-ui-react';

const Ausgabe = () => {
    return (
        <div className="Ausgabe">
            <div className="header-container">
                <Header as='h2'>vorläufiger Unternehmenswert</Header>
                <Icon name='caret down' size='big' />
            </div>
            <Segment>
                <div className="content-container">
                    <p>33.7 Mio EUR</p>
                    <Image src="https://everto-consulting.de/wp-content/plugins/everto-unternehmenswertrechner/assets/img/info-blue.svg" size='tiny' />
                </div>
                <Message warning>
                    <p>Das ist ein vorläufig berechneter Wert. Füllen Sie weitere Felder aus, um einen genaueren zu Wert zu erhalten.</p>
                </Message>
                <Message error>
                    <Message.Header>Wert ungültig</Message.Header>
                    <p>Ertragswert kann nicht berechnet werden</p>
                </Message>
            </Segment>
            <Message negative>
                <Message.Header>Bitte beachten Sie, dass unser Unternehmenswertrechner keine negativen Werte für dieses Feld erlaubt.</Message.Header>
                <p>Für eine individuelle Berechnung können Sie gern direkt Kontakt mit uns aufnehmen.</p>
                <Button as='a' href='mailto:info@everto-consulting.de' icon>
                    <Icon name='mail' />
                </Button>
            </Message>
            <Message negative style={{display: 'none'}}>
                <Message.Header>Die von Ihnen eingegeben Kennzahlen sind leider zu gering, um einen Unternehmenswert zu berechnen.</Message.Header>
                <p>Für eine individuelle Berechnung können Sie gern direkt Kontakt mit uns aufnehmen.</p>
                <Button as='a' href='mailto:info@everto-consulting.de' icon>
                    <Icon name='mail' />
                </Button>
            </Message>
        </div>
    );
};

export default Ausgabe;
