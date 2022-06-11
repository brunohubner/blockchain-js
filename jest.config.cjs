const { resolve } = require("path")
const root = resolve(__dirname)

module.exports = {
    clearMocks: true,
    collectCoverageFrom: ["<rootDir>/src/**/*.js", "!<rootDir>/src/config/**"],
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    moduleNameMapper: {
        "@/tests/(.*)": "<rootDir>/tests/$1",
        "@/(.*)": "<rootDir>/src/$1"
    },
    rootDir: root,
    roots: ["<rootDir>/tests"],
    setupFilesAfterEnv: ["<rootDir>/tests/jest.setup.cjs"],
    testEnvironment: "node"
}
