const { hash } = require("bcrypt");
const Model = require("../../models/GGUserSchema");
const nodemailer = require("nodemailer");

// Configura il trasportatore di nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

// Memorizzazione temporanea dei codici di verifica
let verificationCodes = {};

const registerUser = async (req, res) => {
    console.log("Request Body:", req.body);
    try {
        const { email, username, password } = req.body;
        console.log("Password:", password);
        if (!password) {
            return res.status(400).json({ error: "Password mancante" });
        }
        const saltRounds = 10;
        const hashedPassword = await hash(password, saltRounds);

        // Genera un codice di verifica a 6 cifre
        const verificationCode = Math.floor(100000 + Math.random() * 900000);
        verificationCodes[email] = {
            username,
            hashedPassword,
            code: verificationCode,
            verified: false
        };

        // Invia l'email di verifica
        const mailOptions = {
            from: 'your-email@gmail.com',
            to: email,
            subject: 'Email Verification',
            text: `Your verification code is: ${verificationCode}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).send('Error sending email');
            }
            res.status(200).send('Verification email sent');
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

// Verifica del codice di verifica
const verifyEmail = async (req, res) => {
    const { email, code } = req.body;
    const userData = verificationCodes[email];

    if (userData && userData.code == code) {
        userData.verified = true;
        // Crea l'utente nel database
        const newUser = await Model.create({
            Email_utente: email,
            Pw_utente: userData.hashedPassword,
            Nome_utente: userData.username,
        });
        // Rimuove il codice di verifica
        delete verificationCodes[email];
        res.status(200).json(newUser);
    } else {
        res.status(400).send('Invalid verification code');
    }
};

module.exports = { registerUser, verifyEmail };
