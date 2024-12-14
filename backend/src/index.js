import express from 'express'
import { PORT } from './config/serverConfig.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.get('/', (req, res) => {
  return res.json({ message: 'Hii' })
})

app.listen(PORT, () => {
  console.log('Server started on PORT - ' + PORT)
})