import express from "express"
import { routes } from "./routes.js"

const middlewares = express()

middlewares.use(express.json())
middlewares.use(express.urlencoded({ extended: true }))
middlewares.use("/api/v1", routes)

export { middlewares }
