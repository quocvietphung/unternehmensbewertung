import React, { useEffect } from 'react';
import { Grid, Header, Divider, Form, Input, Label, Button } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { setValidity, setError } from '../../redux/reducers';
import { setBargeldBestand, setFinanzSchulden } from '../../redux/equityBridgeSlice';

const EquityBridge = (props) => {
    const dispatch = useDispatch();
    const isValid = useSelector(state => state.validation.isValid);
    const equityBridgeData = useSelector((state) => state.equityBridge.equityBridgeData);

    useEffect(() => {
        console.log(equityBridgeData);
       checkValidity();
    }, [equityBridgeData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'bargeldBestand') {
            dispatch(setBargeldBestand(value));
        } else if (name === 'finanzSchulden') {
            dispatch(setFinanzSchulden(value));
        }
    };

    const checkValidity = () => {
        let errors = [];

        if (equityBridgeData.bargeldBestand < 0) {
            errors.push('Keine negativen Eingaben für Bargeldbestand erlaubt.');
        }

        if (equityBridgeData.bargeldBestand === '') {
            errors.push('Bargeldbestand ist ein Pflichtfeld.');
        }

        if (equityBridgeData.finanzSchulden < 0) {
            errors.push('Keine negativen Eingaben für Finanzschulden erlaubt.');
        }

        if (equityBridgeData.finanzSchulden === '') {
            errors.push('Finanzschulden ist ein Pflichtfeld.');
        }

        dispatch(setError(errors));

        const valid = errors.length === 0;
        dispatch(setValidity(valid));
    };

    const handleWeiterClick = () => {
        if (!isValid) {
            return;
        }

        // Pass this info back to the parent when Weiter is clicked
        props.onWeiterClick();
    };

    return (
        <Grid padded className="shared-section equity">
            <Grid.Column>
                <Header as="h2">4. Equity Bridge</Header>
                <Divider />
                <Form>
                    <Header as="h3">
                        Liquide Mittel &amp; Verbindlichkeiten
                        <Label color="red" horizontal className="required-label">*</Label>
                    </Header>

                    <Form.Field className="form-field">
                        <label className="form-label">
                            Aktueller Bargeldbestand (Bankkonten und andere bargeldähnliche Guthaben)
                        </label>
                        <Input
                            type="number"
                            name="bargeldBestand"
                            value={equityBridgeData.bargeldBestand}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                        {equityBridgeData.bargeldBestand < 0 && <p className="error-message">Keine negativen Eingaben erlaubt.</p>}
                        {equityBridgeData.bargeldBestand === '' && <p className="error-message">Das ist ein Pflichtfeld</p>}
                    </Form.Field>

                    <Form.Field className="form-field">
                        <label className="form-label">Aktuelle Finanzschulden (ohne Hypotheken)</label>
                        <Input
                            type="number"
                            name="finanzSchulden"
                            value={equityBridgeData.finanzSchulden}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                        {equityBridgeData.finanzSchulden < 0 && <p className="error-message">Keine negativen Eingaben erlaubt.</p>}
                        {equityBridgeData.finanzSchulden === '' && <p className="error-message">Das ist ein Pflichtfeld</p>}
                    </Form.Field>

                    <Form.Field>
                        <p className="required-fields-hint">
                            <span className="required">*</span>Diese Eingaben sind Pflichtfelder
                        </p>
                    </Form.Field>

                    <Form.Field>
                        <div className="button-container">
                            <Button className="click-back" onClick={props.onZuruckClick}>
                                Zurück
                            </Button>
                            <Button className="click-continue" primary type="submit" onClick={handleWeiterClick}>
                                Weiter
                            </Button>
                        </div>
                    </Form.Field>
                </Form>
            </Grid.Column>
        </Grid>
    );
};

export default EquityBridge;
