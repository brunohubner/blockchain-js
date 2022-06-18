import { Router } from "express"
import { blockchain } from "./blockchain.singleton.js"
import { p2pServer } from "./main.js"

const routes = Router()

routes.get("/blocks", (req, res) => {
    return res.json(blockchain.chain)
})

routes.post("/mine", (req, res) => {
    const block = blockchain.addBlock(req.body.data)
    console.log(`New Block added: ${block.toString()}`)

    p2pServer.syncChain()

    return res.redirect("/api/v1/blocks")
})

export { routes }
