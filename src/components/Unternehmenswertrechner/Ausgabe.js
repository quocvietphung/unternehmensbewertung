import React from 'react';
import { Grid, Header, Icon, Message, Button } from 'semantic-ui-react';
import { useSelector } from "react-redux";

const Ausgabe = () => {
    const isValid = useSelector((state) => state.isValid);

    const resultContent = isValid ? (
        <Grid.Column className="default">
            <p className="ertragswert">33.4 Mio EUR</p>
            <Message warning className="warning innacurate-calculation">
                <p className="my-0">
                    Das ist ein vorläufig berechneter Wert. Füllen Sie weitere Felder aus, um einen genaueren zu Wert zu erhalten.
                </p>
            </Message>
        </Grid.Column>
    ) : (
        <Grid.Column className="input-error">
            <p>
                <strong>Wert ungültig</strong>
            </p>
            <p>Ertragswert kann nicht berechnet werden</p>
        </Grid.Column>
    );

    return (
        <Grid className="Ausgabe">
            <Grid.Row className="result-inner-wrapper text-center warning-active">
                <Grid.Column textAlign="center">
                    <Header as="h2" className="intro">Individuelle Einschätzung Ihres Unternehmens</Header>
                    <Header as="h3" className="title">
                        vorläufiger Unternehmenswert
                    </Header>
                    <Icon name="arrow down" size="big" className="icon icon-white" />
                    <Grid className="result">
                        {resultContent}
                    </Grid>
                    {!isValid ? (
                        <Message negative className="error-message negative-entry">
                            <p>
                                Bitte beachten Sie, dass unser Unternehmenswertrechner keine negativen Werte für dieses Feld erlaubt. Für eine individuelle
                                Berechnung können Sie gern direkt Kontakt mit uns aufnehmen.
                            </p>
                            <Button icon href="mailto:info@everto-consulting.de" title="Jetzt Kontakt aufnehmen">
                                <Icon name="mail" />
                            </Button>
                        </Message>
                    ) : (
                        <Message className="error-message small-entry">
                            <p>
                                Die von Ihnen eingegeben Kennzahlen sind leider zu gering, um einen Unternehmenswert zu berechnen. Für eine individuelle
                                Berechnung können Sie gern direkt Kontakt mit uns aufnehmen.
                            </p>
                            <Button icon href="mailto:info@everto-consulting.de" title="Jetzt Kontakt aufnehmen">
                                <Icon name="mail" />
                            </Button>
                        </Message>
                    )}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default Ausgabe;
