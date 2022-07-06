import express from 'express'
import config from './src/config/config'
import { setupServer } from './src/server'

const app = express()

app.get('/', (req, res) => {
  res.send('Express on Vercel')
})

setupServer(app)

app.listen(config.server.port, async() => {
  console.log(`Server is running on port ${config.server.port}`)
})

export default app
