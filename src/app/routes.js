import { Router } from "express"
import { Blockchain } from "../blockchain/blockchain.js"

const routes = Router()
const blockchain = new Blockchain()

routes.get("/blocks", (req, res) => {
    return res.json(blockchain.chain)
})

routes.post("/mine", (req, res) => {
    const block = blockchain.addBlock(req.body.data)
    console.log(`New Block added: ${block.toString()}`)

    return res.redirect("/api/v1/blocks")
})

export { routes }
