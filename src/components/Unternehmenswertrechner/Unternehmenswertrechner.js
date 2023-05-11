import React, { Component } from 'react';
import './Unternehmenswertrechner.scss'; // Import SCSS file

class Unternehmenswertrechner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            branche: 'Telekommunikation',
            lage: '',
            alter: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { branche, lage, alter } = this.state;
        return (
            <div className="unternehmenswertrechner-container">
                <h1>Willkommen beim Unternehmenswertrechner</h1>
                <form>
                    <h3>1. Basisinformationen zum Unternehmen</h3>
                    <div className="form-group">
                        <label htmlFor="branche">Branche*</label>
                        <input
                            type="text"
                            id="branche"
                            name="branche"
                            value={branche}
                            onChange={this.handleChange}
                            required
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Lage*</label>
                        <div className="form-check">
                            <input
                                type="radio"
                                id="staedtisch"
                                name="lage"
                                value="städtisch"
                                onChange={this.handleChange}
                                required
                                className="form-check-input"
                            />
                            <label htmlFor="staedtisch" className="form-check-label">städtisch</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                id="laendlich"
                                name="lage"
                                value="ländlich"
                                onChange={this.handleChange}
                                required
                                className="form-check-input"
                            />
                            <label htmlFor="laendlich" className="form-check-label">ländlich</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="alter">Alter der Firma in Jahren*</label>
                        <input
                            type="number"
                            id="alter"
                            name="alter"
                            value={alter}
                            onChange={this.handleChange}
                            required
                            className="form-control"
                        />
                    </div>
                    <p>*Diese Eingaben sind Pflichtfelder</p>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Unternehmenswertrechner;
