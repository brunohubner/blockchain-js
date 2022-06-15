import "dotenv/config.js"

const env = Object.freeze({
    PORT: process.env.PORT || 3333
})

export { env }
