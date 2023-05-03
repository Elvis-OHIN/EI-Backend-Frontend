import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getTickets() {
  const tickets = await prisma.ticket.findMany()
  return tickets
}
export async function getTicket(id : number) {
  const result = await prisma.ticket.findUnique({
    where: {
      id: Number(id),
    },
  })
  return result
}
export async function addTicket(body : any) {
  const result = await prisma.ticket.create({
    data: {
        ...body
    },
  })
  return result
}
export async function updateTicket(id : number, body :  any) {
  const put = await prisma.ticket.update({
    where: { id: Number(id) },
    data: {
      ...body
    },
  })
  return put
}
export async function deleteTicket(id : number) {
  const result = await prisma.ticket.delete({
    where: {
      id: Number(id),
    },
  })
  return result
}


module.exports = {
  getTickets,
  getTicket,
  addTicket,
  updateTicket,
  deleteTicket,
}
