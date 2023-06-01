const kennzahlen = [
    {
        umsatz: [
            {
                year: 2020,
                value: 25000000
            },
            {
                year: 2021,
                value: 25000000
            },
            {
                year: 2022,
                value: 25000000
            }
        ],
        ebit: [
            {
                year: 2020,
                value: 5000000
            },
            {
                year: 2021,
                value: 5000000
            },
            {
                year: 2022,
                value: 5000000
            }
        ],
        gewinnTypisch: [
            {
                year: 2020,
                value: "ganz untypisch"
            },
            {
                year: 2021,
                value: "eher untypisch"
            },
            {
                year: 2022,
                value: "typisch"
            }
        ]
    }
];

const kennzahlen = {
    years: ["2020", "2021", "2022"].concat(checked ? ["2023"] : []),
    options: ['ganz untypisch', 'eher untypisch', 'nur teilweise typisch', 'eher typisch', 'typisch']
};
