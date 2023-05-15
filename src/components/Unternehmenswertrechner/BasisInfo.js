import React, {Component} from "react";
import {Header, Form, Grid, Select, Radio, Button, Divider} from "semantic-ui-react";

class BasisInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            branche: "",
            lage: "",
            alter: 0,
            isValid: false,
        };
    }

    handleChange = (event, {name, value}) => {
        if (name === "alter" && (value === "+" || value === "-")) {
            const currentValue = this.state.alter;
            const newValue =
                value === "+"
                    ? currentValue + 1
                    : currentValue > 0
                        ? currentValue - 1
                        : 0;
            this.setState({alter: newValue}, this.checkValidity);
        } else {
            this.setState({[name]: value}, this.checkValidity);
        }
    };

    checkValidity = () => {
        const {branche, lage, alter} = this.state;
        if (branche && lage && alter >= 0) {
            this.setState({isValid: true});
        } else {
            this.setState({isValid: false});
        }
    };

    handleWeiterClick = () => {
        this.props.onWeiterClick(this.props.sectionName);  // Gọi hàm xử lý khi người dùng nhấp vào nút "Weiter"
    };

    render() {
        const {branche, lage, alter} = this.state;

        const branchOptions = [
            {key: "bau", value: "4.8, 0.63", text: "Bau und Handwerk"},
            {key: "beratung", value: "5.0, 0.85", text: "Beratende Dienstleistung"},
            {key: "chemie", value: "5.9, 1.1", text: "Chemie, Kunststoffe, Papier"},
            {key: "elektrotechnik", value: "5.4, 0.84", text: "Elektrotechnik"},
            {key: "fahrzeugbau", value: "5.15, 0.72", text: "Fahrzeugbau und -zubehör"},
            {key: "handel", value: "5.55, 0.73", text: "Handel und E-Commerce"},
            {key: "maschinenbau", value: "5.6, 0.85", text: "Maschinen- und Anlagenbau"},
            {key: "medien", value: "5.3, 1.16", text: "Medien"},
            {key: "nahrungs", value: "5.45, 1.11", text: "Nahrungs- und Genussmittel"},
            {key: "pharma", value: "6.5, 1.64", text: "Pharma, Bio- und Medizintechnik"},
            {key: "software", value: "5.65, 1.56", text: "Software"},
            {key: "telekommunikation", value: "5.65, 1.05", text: "Telekommunikation"},
            {key: "textilien", value: "4.5, 0.81", text: "Textilien und Bekleidung"},
            {key: "transport", value: "4.85, 0.64", text: "Transport, Logistik und Touristik"},
            {key: "umwelttechnik", value: "5.60, 0.85", text: "Umwelttechnik"},
            {key: "versorgungswirtschaft", value: "5.60, 0.85", text: "Versorgungswirtschaft"},
        ];

        return (
            <Grid padded className="shared-section basis-info">
                <Grid.Column>
                    <Header as="h2">1. Basisinformationen zum Unternehmen</Header>
                    <Divider/>
                    <Form>
                        <Grid columns={2} stackable>
                            <Grid.Column>
                                <Form.Field>
                                    <label>Branche*</label>
                                    <Select
                                        className="wideSelect"
                                        options={branchOptions}
                                        name="branche"
                                        value={branche}
                                        onChange={this.handleChange}
                                        placeholder="Branche auswählen"
                                        required
                                    />
                                </Form.Field>
                                <Form.Group inline>
                                    <label>Lage*</label>
                                    <Form.Field>
                                        <Radio
                                            name="lage"
                                            value="städtisch"
                                            label="städtisch"
                                            checked={lage === "städtisch"}
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Radio
                                            name="lage"
                                            value="ländlich"
                                            label="ländlich"
                                            checked={lage === "ländlich"}
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </Form.Field>
                                </Form.Group>
                                <Form.Group className="input-group">
                                    <Form.Field>
                                        <label>Alter der Firma in Jahren*</label>
                                    </Form.Field>
                                </Form.Group>
                                <Form.Group className="input-container">
                                    <Button
                                        icon="minus"
                                        data-type="minus"
                                        data-field="alter"
                                        onClick={(event) => this.handleChange(event, { name: "alter", value: "-" })}
                                    />
                                    <input
                                        type="number"
                                        name="alter"
                                        className="form-control input-number-plusminus"
                                        min="0"
                                        value={alter}
                                        onChange={(event) => this.handleChange(event, { name: "alter", value: event.target.value })}
                                        required
                                    />
                                    <Button
                                        icon="plus"
                                        data-type="plus"
                                        data-field="alter"
                                        onClick={(event) => this.handleChange(event, { name: "alter", value: "+" })}
                                    />
                                </Form.Group>
                            </Grid.Column>
                        </Grid>
                        <p>* Diese Eingaben sind Pflichtfelder</p>
                        <div className="button-container">
                            <Button type="submit" primary onClick={this.handleWeiterClick}>
                                Weiter
                            </Button>
                        </div>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
}

export default BasisInfo;
