const { hash } = require("bcrypt")
const Model = require("../../models/GGUserSchema")

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
      const newUser = await Model.create({
        Email_utente: email,
        Pw_utente: hashedPassword,
        Nome_utente: username,
      });
      res.json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };

module.exports = registerUser