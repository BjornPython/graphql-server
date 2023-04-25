const { getMartialArts } = require("../models/martial-arts.model")

const callGetMartialArts = async () => {
    const martialArts = await getMartialArts()
    return martialArts
}

module.exports = { callGetMartialArts }