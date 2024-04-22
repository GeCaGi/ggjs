const helmet = require("helmet")
const {json} = require("express")
const {router} = require("./api/routeHandler")


function configServer(server) {
    server.use(helmet())
    server.use(json())
    server.use("/api", router)
}

module.exports = configServer