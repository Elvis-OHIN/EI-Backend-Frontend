import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'
const prisma = new PrismaClient()
const cors = require('cors');
const repository = require('./repository.ts')
const app = express()

app.use(cors());
app.use(express.json());

app.get('/api/tickets', async (req, res) => {
  const tickets = await repository.getTickets()
  res.json(tickets)
})
app.get(`/api/ticket/:id`, async (req, res) => {
  const { id } = req.params
  const result = await repository.getTicket(id)
  res.json(result)
})
app.post(`/api/ticket`, async (req, res) => {
  const result = await repository.addTicket(req.body)
  res.json(result)
})
app.put('/api/ticket/:id/update', async (req, res) => {
  const { id } = req.params
  const put = await repository.updateTicket(id,req.body)
  res.json(put)
})
app.delete(`/api/ticket/:id`, async (req, res) => {
  const { id } = req.params
  const result = await repository.deleteTicket(id)
  res.json(result)
})

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
