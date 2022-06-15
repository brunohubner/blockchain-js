import SHA256 from "crypto-js/sha256.js"

export class Block {
    constructor({ data, hash, lastHash, timestamp }) {
        this.data = data
        this.hash = hash
        this.lastHash = lastHash
        this.timestamp = timestamp
    }

    toString() {
        return `
            Block =
            Timestamp = ${this.timestamp}
            LastHash = ${this.lastHash.substring(0, 10)}
            Hash = ${this.hash.substring(0, 10)}
            Data = ${this.data}
        `
    }

    static genesis() {
        return new Block({
            data: "Genesis",
            hash: "-",
            lastHash: "-",
            timestamp: "-"
        })
    }

    static mine(lastBlock, data) {
        const timestamp = Date.now()
        const lastHash = lastBlock.hash
        const hash = Block.hash({ timestamp, lastHash, data })
        return new Block({ data, hash, lastHash, timestamp })
    }

    static hash({ timestamp, lastHash, data }) {
        return SHA256(`${timestamp}${lastHash}${data}`).toString()
    }
}
