const helmet = require("helmet")
const {json} = require("express")
const {router} = require("./api/routeHandler")
const cors = require("cors")

function configServer(server) {
    server.use(helmet())
    server.use(json())
    server.use(cors())
    server.use("/api", router)
}

module.exports = configServer