const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3001;

app.use(cors({
    origin: '*'
}));

app.use(express.json({ limit: '1gb' }));
app.use(express.urlencoded({ limit: '1gb', extended: true }));

app.post('/send-email', (req, res) => {
    const { to, subject, body, attachments } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.ionos.de',
        auth: {
            user: 'solarrechner@sternsystems.de',
            pass: 'VIImudPnEhAgIIQ,UggDQ+926o1ZG0ir'
        }
    });

    const formattedAttachments = attachments.map((attachment) => {
        const filePath = path.join(__dirname, '..', 'components', 'Ergebnis', 'pdf', attachment.filename);
        return {
            filename: attachment.filename,
            path: filePath,
            contentType: 'application/pdf',
        };
    });

    const mailOptions = {
        from: 'solarrechner@sternsystems.de',
        to: to,
        subject: subject,
        text: body,
        attachments: formattedAttachments
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Failed to send email' });
        } else {
            console.log('Email sent:', info.response);

            // Attempt to delete the file after email has been sent successfully
            formattedAttachments.forEach((attachment) => {
                fs.unlink(attachment.path, (err) => {
                    if (err) {
                        console.error('Error:', err);
                    } else {
                        console.log('File deleted successfully:', attachment.path);
                    }
                });
            });

            // After all files have been deleted, attempt to delete the directory
            const dirPath = path.join(__dirname, '..', 'components', 'Ergebnis', 'pdf');
            fs.rm(dirPath, { recursive: true, force: true }, (err) => {
                if (err) {
                    console.error('Error:', err);
                } else {
                    console.log('Directory deleted successfully:', dirPath);
                }
            });

            res.json({ message: 'Email sent successfully' });
        }
    });
});

app.post('/save-pdf', (req, res) => {
    const { filename, pdfData } = req.body;
    const directoryPath = path.join(__dirname, '..', 'components', 'Ergebnis', 'pdf');

    // Ensure the directory exists as the first step
    if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
    }

    const filePath = path.join(directoryPath, filename);

    if (!pdfData) {
        console.error('Error: PDF data is missing');
        res.status(400).json({ error: 'PDF data is missing' });
        return;
    }

    // Assuming pdfData is a base64 string
    const data = pdfData.replace('data:application/pdf;base64,', '');
    fs.writeFile(filePath, data, 'base64', (error) => {
        if (error) {
            console.error('Error:', error.message);
            res.status(500).json({ error: 'Failed to save PDF' });
        } else {
            console.log('PDF saved:', filePath);
            res.json({ message: 'PDF saved successfully' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
