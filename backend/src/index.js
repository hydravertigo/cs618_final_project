import { app } from './app.js'

import dotenv from 'dotenv'
dotenv.config()

import { initDatabase } from './db/init.js'

const PORT = process.env.PORT

await initDatabase()
app.listen(PORT)

console.info(`express server running on http://localhost:${PORT}`)
