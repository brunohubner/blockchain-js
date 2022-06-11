import { Block } from "../../src/block.js"

describe("Block", () => {
    let data
    let lastBlock
    let block

    beforeEach(() => {
        data = "data"
        lastBlock = Block.genesis()
        block = Block.mine(lastBlock, data)
    })

    it("should sets the 'data' to match the input", () => {
        expect(block.data).toEqual(data)
    })

    it("should sets the 'lastHash' to match the hash of the last Block", () => {
        expect(block.lastHash).toEqual(lastBlock.hash)
    })
})
