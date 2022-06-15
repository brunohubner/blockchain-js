import { env } from "../config/env.js"
import { server } from "./server.js"

server.listen(env.PORT, () =>
    console.log(`Listening in http://localhost:${env.PORT}`)
)
