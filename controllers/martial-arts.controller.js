const { callGetMartialArts } = require("../services/martial-arts.service")

const handleGetMartialArts = async (req, res) => {

    const martialArts = await callGetMartialArts()

    if (martialArts) {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(JSON.stringify(martialArts))
    }
}

module.exports = { handleGetMartialArts }