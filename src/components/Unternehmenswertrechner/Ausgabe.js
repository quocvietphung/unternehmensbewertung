import React, { useEffect } from 'react';
import { Grid, Header, Icon, Message, Button } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { setUnternehmenwert } from '../../redux/sectionsSlice';

const Ausgabe = () => {
    const dispatch = useDispatch();
    const isValid = useSelector((state) => state.validation.isValid);
    const errors = useSelector((state) => state.validation.error);
    const finishedSections = useSelector((state) => state.sections.sectionData.finishedSections);
    const basisInfoData = useSelector((state) => state.basisInfo.basisInfoData);
    const kennzahlenData = useSelector((state) => state.kennzahlen.kennzahlenData);
    const bereinigungData = useSelector((state) => state.bereinigung.bereinigungData);
    const unternehmenwert = useSelector((state) => state.sections.sectionData.unternehmenswert);

    useEffect(() => {
        const calculatedUnternehmenwert = calculateUnternehmenwert();
        console.log("unternehmenwert:", calculatedUnternehmenwert);
        dispatch(setUnternehmenwert(calculatedUnternehmenwert));
    }, [unternehmenwert, finishedSections, basisInfoData, kennzahlenData, bereinigungData]);

    const calculateUnternehmenwert = () => {
        const gewinnValues = kennzahlenData.gewinn.data.map((item) => item.value || 0);
        const gewinnSum = gewinnValues.reduce((total, value) => total + value, 0);
        const gewinnAverage = gewinnSum / gewinnValues.length;

        let unternehmenwert = 0;

        console.log("finishedSections:", finishedSections);

        if (finishedSections.includes('basis')) {
            const sumEbitUmsatzBasis = (kennzahlenData.averageValues.averageUmsatz * basisInfoData.branche.umsatzValue * basisInfoData.lage.value) +
                (kennzahlenData.averageValues.averageEbit * basisInfoData.branche.ebitValue * basisInfoData.lage.value);
            unternehmenwert = sumEbitUmsatzBasis * gewinnAverage;
            console.log("sumEbitUmsatzBasis:", sumEbitUmsatzBasis);
        }

        if (finishedSections.includes('kennzahlen')) {
            const sumEbitUmsatzKennzahlen = (kennzahlenData.averageValues.averageUmsatz * basisInfoData.branche.umsatzValue * basisInfoData.lage.value) +
                (bereinigungData.bereinigungEbitAverage * basisInfoData.branche.ebitValue * basisInfoData.lage.value);

            console.log("sumEbitUmsatzKennzahlen:", sumEbitUmsatzKennzahlen);

            unternehmenwert = sumEbitUmsatzKennzahlen * gewinnAverage;
            console.log("unternehmenwert (kennzahlen):", unternehmenwert);
        }

        console.log("unternehmenwert:", unternehmenwert);

        return unternehmenwert;
    };

    const formatValue = (value) => {
        const valueInMillion = value / 1e6;
        const roundedValue = Math.round(valueInMillion * 10) / 10;
        let formattedValue = roundedValue.toFixed(1);

        if (formattedValue.endsWith(".0")) {
            formattedValue = parseInt(formattedValue).toString();
        }

        return formattedValue + " Mio EUR";
    };

    const resultContent = isValid ? (
        <Grid.Column className="default">
            <p className="ertragswert">{formatValue(unternehmenwert)}</p>
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
