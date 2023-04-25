const http = require("http")
const PORT = process.env.PORT || 3000

const { handleCrudRequests } = require("./routes/crud-routes")
const { handleFileRequests } = require("./routes/file-routes")


const server = http.createServer(async (req, res) => {
    const { url, method } = req

    if (url === "/" && method === "GET") { handleFileRequests(req, res) }

    else if (url.startsWith("/graphql")) { handleCrudRequests(req, res) }

})


server.listen(PORT, () => { console.log(`SERVER RUNNING ON PORT ${PORT}...`); })