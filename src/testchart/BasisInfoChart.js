import React from 'react';
import { BarChart, Bar, YAxis, XAxis, CartesianGrid, Legend, Tooltip } from 'recharts';

const BasisInfoChart = () => {
    const basisInfos = {
        branchOptions: [
            {
                key: "bau",
                ebitValue: 4.8,
                umsatzValue: 0.63,
                text: "Bau und Handwerk"
            },
            {
                key: "beratung",
                ebitValue: 5.0,
                umsatzValue: 0.85,
                text: "Beratende Dienstleistung"
            },
            {
                key: "chemie",
                ebitValue: 5.9,
                umsatzValue: 1.1,
                text: "Chemie, Kunststoffe, Papier"
            },
            {
                key: "elektrotechnik",
                ebitValue: 5.4,
                umsatzValue: 0.84,
                text: "Elektrotechnik"
            },
            {
                key: "fahrzeugbau",
                ebitValue: 5.15,
                umsatzValue: 0.72,
                text: "Fahrzeugbau und -zubehör"
            },
            {
                key: "handel",
                ebitValue: 5.55,
                umsatzValue: 0.73,
                text: "Handel und E-Commerce"
            },
            {
                key: "maschinenbau",
                ebitValue: 5.6,
                umsatzValue: 0.85,
                text: "Maschinen- und Anlagenbau"
            },
            {
                key: "medien",
                ebitValue: 5.3,
                umsatzValue: 1.16,
                text: "Medien"
            },
            {
                key: "nahrungs",
                ebitValue: 5.45,
                umsatzValue: 1.11,
                text: "Nahrungs- und Genussmittel"
            },
            {
                key: "pharma",
                ebitValue: 6.5,
                umsatzValue: 1.64,
                text: "Pharma, Bio- und Medizintechnik"
            },
            {
                key: "software",
                ebitValue: 5.65,
                umsatzValue: 1.56,
                text: "Software"
            },
            {
                key: "telekommunikation",
                ebitValue: 5.65,
                umsatzValue: 1.05,
                text: "Telekommunikation"
            },
            {
                key: "textilien",
                ebitValue: 4.5,
                umsatzValue: 0.81,
                text: "Textilien und Bekleidung"
            },
            {
                key: "transport",
                ebitValue: 4.85,
                umsatzValue: 0.64,
                text: "Transport, Logistik und Touristik"
            },
            {
                key: "umwelttechnik",
                ebitValue: 5.6,
                umsatzValue: 0.85,
                text: "Umwelttechnik"
            },
            {
                key: "versorgungswirtschaft",
                ebitValue: 5.6,
                umsatzValue: 0.85,
                text: "Versorgungswirtschaft"
            }
        ],
        lageOptions: [
            {
                key: "städtisch",
                value: 1,
                text: "städtisch"
            },
            {
                key: "ländlich",
                value: 0.8,
                text: "ländlich"
            }
        ]
    };

    return (
        <div
            style={{
                background: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <div style={{ height: '80vh' }}>
                <h2 style={{ justifyContent: 'center', display: 'flex' }}>Basis Info Chart</h2>
                <div>
                    <BarChart width={1500} height={1000} data={basisInfos.branchOptions} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="text" type="category" allowDataOverflow={true} width={200} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="umsatzValue" fill="#ffc658" name="Umsatz" barSize={20} />
                        <Bar dataKey="ebitValue" fill="#82ca9d" name="EBIT" barSize={20} />
                        <XAxis type="number" label={{ angle: -90, position: 'insideLeft', offset: -10 }}>
                            <Bar dataKey="umsatzValue" fill="#ffc658" name="Umsatz" barSize={20} />
                            <Bar dataKey="ebitValue" fill="#82ca9d" name="EBIT" barSize={20} />
                        </XAxis>
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default BasisInfoChart;
