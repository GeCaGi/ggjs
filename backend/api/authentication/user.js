const { findOne } = require("../../models/GGUserSchema")
const { compare } = require("bcrypt")

async function GetUser(req, res)
{
    const {email, password} = req.query
    
    var result = await findOne({Email_utente: email})

    if(!result)
        return res.json({found: 0})

    var comparison = await compare(password, result.Pw_utente)

    if(comparison == false)
        return res.json({found: 0})

    return res.json(result)
}

module.exports = GetUser