import React, { Component } from 'react';

class Unternehmenswertrechner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            branche: 'Telekommunikation',
            lage: '',
            alter: '',
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
            <div>
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
                        <label htmlFor="lage">Lage*</label>
                        <div>
                            <input
                                type="radio"
                                id="staedtisch"
                                name="lage"
                                value="städtisch"
                                onChange={this.handleChange}
                                required
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
                </form>
            </div>
        );
    }
}

export default Unternehmenswertrechner;
