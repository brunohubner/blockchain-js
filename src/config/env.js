import "dotenv/config.js"

const env = Object.freeze({
    HTTP_PORT: process.env.HTTP_PORT || 3000,
    P2P_PORT: process.env.P2P_PORT || 5000,
    PEERS: process.env.PEERS ? process.env.PEERS.split(",") : []
})

export { env }
