import React from 'react';
import { Container, Header, Icon, Message, Segment, Button, Image } from 'semantic-ui-react';

const Ausgabe = () => {
    return (
        <Container className="result-outter-wrapper">
            <Header as='h2' className="intro">Individuelle Einschätzung Ihres Unternehmens</Header>
            <Segment textAlign='center' className="result-inner-wrapper text-center warning-active">
                <Header as='h3' className="title">vorläufiger Unternehmenswert</Header>
                <Icon name='arrow down' size='big' className="icon icon-white" />
                <Container className="result">
                    <Segment className="default">
                        <p className="ertragswert">33.4 Mio EUR</p>
                        <p className="ertragswert-hidden-full d-none">33.431.660</p>
                        <p className="ertragswert-hidden-formatted d-none">33.4 Mio</p>
                        <Image className="mobile-more-info inaccurate" src="path/to/your/image/info-blue.svg" alt="info-blue" />
                        <Message warning className="warning innacurate-calculation">
                            <p className="my-0">Das ist ein vorläufig berechneter Wert. Füllen Sie weitere Felder aus, um einen genaueren zu Wert zu erhalten.</p>
                        </Message>
                    </Segment>
                    <Segment className="input-error">
                        <p><strong>Wert ungültig</strong></p>
                        <p>Ertragswert kann nicht berechnet werden</p>
                    </Segment>
                </Container>
                <Message negative className="error-message negative-entry">
                    <Container className="text">
                        <p>Bitte beachten Sie, dass unser Unternehmenswertrechner keine negativen Werte für dieses Feld erlaubt. Für eine individuelle Berechnung können Sie gern direkt Kontakt mit uns aufnehmen.</p>
                    </Container>
                    <Button icon href="mailto:info@everto-consulting.de" title="Jetzt Kontakt aufnehmen">
                        <Icon name='mail' />
                    </Button>
                </Message>
                <Message className="error-message small-entry" style={{display: 'none'}}>
                    <Container className="text">
                        <p>Die von Ihnen eingegeben Kennzahlen sind leider zu gering, um einen Unternehmenswert zu berechnen. Für eine individuelle Berechnung können Sie gern direkt Kontakt mit uns aufnehmen.</p>
                    </Container>
                    <Button icon href="mailto:info@everto-consulting.de" title="Jetzt Kontakt aufnehmen">
                        <Icon name='mail' />
                    </Button>
                </Message>
            </Segment>
        </Container>
    );
}

export default Ausgabe;
