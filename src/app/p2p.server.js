import Websocket, { WebSocketServer } from "ws"
import { env } from "../config/env.js"

export class P2PServer {
    constructor(blockchain) {
        this.blockchain = blockchain
        this.sockets = []
    }

    listen(port, callback) {
        const server = new WebSocketServer({ port })
        server.on("connection", socket => this.connectSocket(socket))
        this.connectToPeers()
        callback()
    }

    connectSocket(socket) {
        this.sockets.push(socket)
        console.log("Socket connected")

        this.messageHandler(socket)
        this.sendChain(socket)
    }

    sendChain(socket) {
        console.log("this.blockchain", this.blockchain)
        socket.send(JSON.stringify(this.blockchain.chain))
    }

    messageHandler(socket) {
        socket.on("message", message => {
            const data = JSON.parse(message)
            this.blockchain.replaceChain(data)
        })
    }

    connectToPeers() {
        env.PEERS.forEach(peer => {
            const socket = new Websocket(peer)
            socket.on("open", () => this.connectSocket(socket))
        })
    }

    syncChain() {
        this.sockets.forEach(this.sendChain)
    }
}
