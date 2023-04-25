const http = require("http")
const PORT = process.env.PORT || 3000

const server = http.createServer(async (req, res) => {
    const { url, method } = req

    if (url === "/" && method === "GET") { console.log("WORKS....") }






})


server.listen(PORT, () => { console.log(`SERVER RUNNING ON PORT ${PORT}...`); })