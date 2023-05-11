import React, { Component } from 'react';

const styles = {
    h1: {
        color: '#1a1a1a'
    },
    h2: {
        color: '#1a1a1a',
        marginBottom: '1rem'
    },
    form: {
        backgroundColor: '#f8f9fa',
        padding: '1.5rem',
        borderRadius: '5px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }
};

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
            <div className="container my-5">
                <h1 className="text-center mb-4" style={styles.h1}>
                    Willkommen beim Unternehmenswertrechner
                </h1>
                <form style={styles.form}>
                    <h2 style={styles.h2}>1. Basisinformationen zum Unternehmen</h2>
                    <div className="mb-3">
                        <label htmlFor="branche" className="form-label">
                            Branche*
                        </label>
                        <input
                            type="text"
                            id="branche"
                            name="branche"
                            value={branche}
                            onChange={this.handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lage" className="form-label">
                            Lage*
                        </label>
                        <div>
                            <input
                                type="radio"
                                id="staedtisch"
                                name="lage"
                                value="städtisch"
                                onChange={this.handleChange}
                                className="form-check-input"
                                required
                            />
                            <label htmlFor="staedtisch" className="form-check-label ms-2">
                                städtisch
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="laendlich"
                                name="lage"
                                value="ländlich"
                                onChange={this.handleChange}
                                className="form-check-input"
                                required
                            />
                            <label htmlFor="laendlich" className="form-check-label ms-2">
                                ländlich
                            </label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="alter" className="form-label">
                            Alter der Firma in Jahren*
                        </label>
                        <input
                            type="number"
                            id="alter"
                            name="alter"
                            value={alter}
                            onChange={this.handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <p className="text-muted">*Diese Eingaben sind Pflichtfelder</p>
                </form>
            </div>
        );
    }
}

export default Unternehmenswertrechner;
