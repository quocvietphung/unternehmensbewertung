import React, { useEffect } from 'react';
import { Grid, Header, Icon, Message, Button } from 'semantic-ui-react';
import { useSelector } from "react-redux";
import { setUnternehmensbewertung } from '../../redux/reducers'; // Import action setUnternehmensbewertung
import { useDispatch } from "react-redux";

const Ausgabe = () => {
    const isValid = useSelector((state) => state.validation.isValid);
    const errors = useSelector((state) => state.validation.error);
    const unternehmensbewertung = useSelector((state) => state.validation.unternehmensbewertung);

    const formatUmsatValue = (value) => {
        const valueInMillion = value / 1e6; // Chuyển đổi từ đơn vị "một" sang đơn vị "triệu"
        const roundedValue = Math.round(valueInMillion * 10) / 10; // Làm tròn số thập phân đến 1 chữ số
        const formattedValue = roundedValue.toFixed(1); // Thay dấu chấm bằng dấu phẩy
        return formattedValue + " Mio EUR";
    };

    const resultContent = isValid ? (
        <Grid.Column className="default">
            <p className="ertragswert">{formatUmsatValue(unternehmensbewertung)}</p>
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
            {errors && errors.map((error, index) => <p className="error-ertragswert" key={index}>{error || "Ertragswert kann nicht berechnet werden"}</p>)}
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
