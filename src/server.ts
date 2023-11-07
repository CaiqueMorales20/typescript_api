// Imports
import { DatabaseMemory } from "./db/database-memory"
const express = require('express')
const app = express()
app.use(express.json())

// Database
const database = new DatabaseMemory()

// Types
import { Request, Response } from "express"

// Routes
app.get('/users', async (req: Request, res: Response) => {
  const search = req.query.search

  const users = await database.list(search)

  return res.send(users)
})

app.post('/users', async (req: Request, res: Response) => {
  const {name, age, email, cpf}: userType = req.body

  await database.create({
    name,
    age,
    email,
    cpf
  })

  return res.status(204).send('Usuário criado.')

})

app.put('/users/:id', async (req: Request, res: Response) => {
  const {name, age, email, cpf}: userType = req.body
  const {id} = req.params
  
  await database.update(id, {
    name,
    age,
    email,
    cpf
  })

  return res.status(200).send('Usuário atualizado.')
})

app.delete('/users/:id', async (req: Request, res: Response) => {
  const {id} = req.params

  await database.delete(id)

  return res.status(200).send('Usuário excluído')
})


// Ports
app.listen(process.env.PORT ?? 3333)