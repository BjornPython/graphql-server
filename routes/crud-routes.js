const { handleGetMartialArts } = require("../controllers/martial-arts.controller")


const handleCrudRequests = (req, res) => {
    const { url, method } = req

    if (url === "/graphql/martial-arts" && method === "GET") { handleGetMartialArts(req, res) }

}

module.exports = { handleCrudRequests }