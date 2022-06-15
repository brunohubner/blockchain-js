import express from "express"
import { middlewares } from "./middlewares.js"

const server = express()
server.use(middlewares)

export { server }
