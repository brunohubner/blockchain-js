import express from "express"
import { middlewares } from "./middlewares.js"

const httpServer = express()
httpServer.use(middlewares)

export { httpServer }
