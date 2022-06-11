const { resolve } = require("path")
const root = resolve(__dirname)
const rootConfigPath = resolve(root, "jest.config.cjs")
const config = require(rootConfigPath)

config.testMatch = ["<rootDir>/tests/unit/**/*"]

module.exports = config
