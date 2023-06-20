const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors({
    origin: '*'
}));

app.use(express.json());

app.post('/send-email', (req, res) => {
    const { to, subject, body3 } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.ionos.de',
        auth: {
            user: 'solarrechner@sternsystems.de',
            pass: 'VIImudPnEhAgIIQ,UggDQ+926o1ZG0ir'
        }
    });

    // We need to format the attachments in the format that nodemailer expects
    // const formattedAttachments = attachments.map((attachment) => ({
    //     filename: attachment.filename,
    //     path: attachment.path,
    //     contentType: 'application/pdf',
    // }));

    const mailOptions = {
        from: 'solarrechner@sternsystems.de',
        to: to,
        subject: subject,
        text: body,
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
