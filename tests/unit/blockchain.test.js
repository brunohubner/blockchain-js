import { Block } from "../../src/blockchain/block"
import { Blockchain } from "../../src/blockchain/blockchain"

describe("Blockchain", () => {
    let blockchain
    let blockchain2

    beforeEach(() => {
        blockchain = new Blockchain()
        blockchain2 = new Blockchain()
    })

    it("should starts with genesis block", () => {
        expect(blockchain.chain[0]).toEqual(Block.genesis())
    })

    it("should adds a new block", () => {
        const data = "block-data"
        blockchain.addBlock(data)
        expect(blockchain.chain[blockchain.chain.length - 1].data).toEqual(data)
    })

    it("should validate a valid chain", () => {
        blockchain2.addBlock("500$")
        expect(blockchain.isValidChain(blockchain2.chain)).toBe(true)
    })

    it("should invalidates a chain with a corrupted genesis block", () => {
        blockchain2.chain[0].data = "corrupted-data"
        expect(blockchain.isValidChain(blockchain2.chain)).toBe(false)
    })

    it("should invalidates a corrupted chain", () => {
        blockchain2.addBlock("200$")
        blockchain2.chain[1].data = "0$"
        expect(blockchain.isValidChain(blockchain2.chain)).toBe(false)
    })

    it("should replace the chain with a valid chain", () => {
        blockchain2.addBlock("600$")
        blockchain.replaceChain(blockchain2.chain)
        expect(blockchain.chain).toEqual(blockchain2.chain)
    })

    it("should does not replace the chain with one of less length", () => {
        blockchain.addBlock("159$")
        blockchain.replaceChain(blockchain2.chain)
        expect(blockchain.chain).not.toEqual(blockchain2.chain)
    })

    it("should does not replace the chain with one of equal length", () => {
        blockchain.addBlock("745$")
        blockchain2.addBlock("965$")
        blockchain.replaceChain(blockchain2.chain)
        expect(blockchain.chain).not.toEqual(blockchain2.chain)
    })
})
