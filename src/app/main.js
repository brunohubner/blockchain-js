import { env } from "../config/env.js"
import { httpServer } from "./http.server.js"
import { P2PServer } from "./p2p.server.js"
import { blockchain } from "./blockchain.singleton.js"

export const p2pServer = new P2PServer(blockchain)

httpServer.listen(env.HTTP_PORT, () =>
    console.log(`HTTP Server listening on port ${env.HTTP_PORT}`)
)

p2pServer.listen(env.P2P_PORT, () => {
    console.log(`Peer-to-Peer Server listening on port ${env.P2P_PORT}`)
})
