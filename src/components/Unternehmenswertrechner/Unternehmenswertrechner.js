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
            <div className="unternehmenswertrechner-container"> {/* Use the matching class name */}
                <h1>Willkommen beim Unternehmenswertrechner</h1>
                <form>
                    <h2>1. Basisinformationen zum Unternehmen</h2>
                    <div>
                        <label htmlFor="branche">Branche*</label>
                        <input
                            type="text"
                            id="branche"
                            name="branche"
                            value={branche}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Lage*</label>
                        <div>
                            <input
                                type="radio"
                                id="staedtisch"
                                name="lage"
                                value="städtisch"
                                onChange={this.handleChange}
                                required
                                // eslint-disable-next-line
                            />
                            <label htmlFor="staedtisch">städtisch</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="laendlich"
                                name="lage"
                                value="ländlich"
                                onChange={this.handleChange}
                                required
                            />
                            <label htmlFor="laendlich">ländlich</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="alter">Alter der Firma in Jahren*</label>
                        <input
                            type="number"
                            id="alter"
                            name="alter"
                            value={alter}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <p>*Diese Eingaben sind Pflichtfelder</p>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Unternehmenswertrechner;
