const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3001;

app.use(cors({
    origin: '*'
}));

app.use(express.json());

app.post('/send-email', (req, res) => {
    const { to, subject, body } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.ionos.de',
        auth: {
            user: 'solarrechner@sternsystems.de',
            pass: 'VIImudPnEhAgIIQ,UggDQ+926o1ZG0ir'
        }
    });

    const pdfPath = path.join(__dirname, '..', 'pdf', 'test.pdf');

    const mailOptions = {
        from: 'solarrechner@sternsystems.de',
        to: to,
        subject: subject,
        text: body,
        attachments: [
            {
                filename: 'test.pdf',
                path: pdfPath
            }
        ]
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Failed to send email' });
        } else {
            console.log('Email sent:', info.response);
            res.json({ message: 'Email sent successfully' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
