import React, { Component } from "react";
import { Dropdown, Input, Button } from "semantic-ui-react";

class StepContent extends Component {
    render() {
        return (
            <div className="row step-content" id="content-basis" data-target="basis">
                <div className="col">
                    <div className="inner-step-wrapper">
                        <div className="title">
                            <h1>
                                Willkommen beim <br />
                                Unternehmenswertrechner
                            </h1>
                        </div>
                        <div className="subtitle">
                            <h2>1. Basisinformationen zum Unternehmen</h2>
                        </div>
                        {/* Form */}
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <label htmlFor="branche" className="form-label">
                                    Branche<span className="required-mark">*</span>{" "}
                                </label>
                                <Dropdown
                                    className="form-select"
                                    name="branche"
                                    placeholder="Branche auswählen"
                                    fluid
                                    selection
                                    required
                                    options={[
                                        {
                                            text: "Bau und Handwerk",
                                            value: "4.8, 0.63; Bau und Handwerk",
                                        },
                                        {
                                            text: "Beratende Dienstleistung",
                                            value: "5.0, 0.85; Beratende Dienstleistung",
                                        },
                                        {
                                            text: "Chemie, Kunststoffe, Papier",
                                            value: "5.9, 1.1; Chemie, Kunststoffe, Papier",
                                        },
                                        {
                                            text: "Elektrotechnik",
                                            value: "5.4, 0.84; Elektrotechnik",
                                        },
                                        {
                                            text: "Fahrzeugbau und -zubehör",
                                            value: "5.15, 0.72; Fahrzeugbau und -zubehör",
                                        },
                                        {
                                            text: "Handel und E-Commerce",
                                            value: "5.55, 0.73; Handel und E-Commerce",
                                        },
                                        {
                                            text: "Maschinen- und Anlagenbau",
                                            value: "5.6, 0.85; Maschinen- und Anlagenbau",
                                        },
                                        { text: "Medien", value: "5.3, 1.16; Medien" },
                                        {
                                            text: "Nahrungs- und Genussmittel",
                                            value: "5.45, 1.11; Nahrungs- und Genussmittel",
                                        },
                                        {
                                            text: "Pharma, Bio- und Medizintechnik",
                                            value: "6.5, 1.64; Pharma, Bio- und Medizintechnik",
                                        },
                                        { text: "Software", value: "5.65, 1.56; Software" },
                                        {
                                            text: "Telekommunikation",
                                            value: "5.65, 1.05; Telekommunikation",
                                        },
                                        {
                                            text: "Textilien und Bekleidung",
                                            value: "4.5, 0.81; Textilien und Bekleidung",
                                        },
                                        {
                                            text: "Transport, Logistik und Touristik",
                                            value: "4.85, 0.64; Transport, Logistik und Touristik",
                                        },
                                        {
                                            text: "Umwelttechnik",
                                            value: "5.60, 0.85; Umwelttechnik",
                                        },
                                        {
                                            text: "Versorgungswirtschaft",
                                            value: "5.60, 0.85; Versorgungswirtschaft",
                                        },
                                    ]}
                                />
                                <div className="invalid-feedback">Das ist ein Pflichtfeld</div>
                            </div>
                            <div className="col-xs-12 col-md-6">
                                <label className="form-label">
                                    Lage<span className="required-mark">*</span>{" "}
                                </label>
                                <div className="form-check orange">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="standort"
                                        id="städtisch"
                                        value="1.2; städtisch"
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="städtisch">
                                        städtisch
                                    </label>
                                </div>
                                <div className="form-check orange">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="standort"
                                        id="ländlich"
                                        value="0.7; ländlich"
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="ländlich">
                                        ländlich
                                    </label>
                                    <div className="invalid-feedback">
                                        Das ist ein Pflichtfeld
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <label htmlFor="alter" className="form-label">
                                    Alter der Firma in Jahren
                                    <span className="required-mark">*</span>{" "}
                                </label>
                                <div className="input-group">
                  <span className="input-group-btn">
                    <button
                        type="button"
                        className="btn btn-number"
                        data-type="minus"
                        data-field="alter"
                    >
                      <svg
                          width="24"
                          height="24"
                          xmlns="http://www.w3.org/2000/svg"
                          fillRule="evenodd"
                          clipRule="evenodd"
                      >
                        <path d="M0 12v1h23v-1h-23z"></path>
                      </svg>
                    </button>
                  </span>
                                    <Input
                                        type="text"
                                        name="alter"
                                        className="form-control input-number-plusminus"
                                        min="1"
                                        max=""
                                        value="0"
                                        required
                                    />
                                    <span className="input-group-btn">
                    <button
                        type="button"
                        className="btn btn-number"
                        data-type="plus"
                        data-field="alter"
                    >
                      <svg
                          width="24"
                          height="24"
                          xmlns="http://www.w3.org/2000/svg"
                          fillRule="evenodd"
                          clipRule="evenodd"
                      >
                        <path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z"></path>
                      </svg>
                    </button>
                  </span>
                                    <div className="invalid-feedback">
                                        Das ist ein Pflichtfeld
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="required-fields-hint">
                        <span className="required">*</span>Diese Eingaben sind Pflichtfelder
                    </p>
                    <div className="step-buttons">
                        <a
                            href="javascript:void(0);"
                            className="btn btn-secondary step-button next"
                            data-target="kennzahlen"
                        >
                            Weiter
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default StepContent;
