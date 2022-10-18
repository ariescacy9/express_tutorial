const { response } = require('express')
const { request } = require('express')
const express = require('express')
const app = express()

app.use(express.json())

app.get("/", (request, response) => {
  response.send('hola mundo')
})

app.get("/boton", (request, response) => {
  response.send('<button>SOY BOTON</button>')
})

app.post("/suma", (request, response) => {
  const {numero1, numero2} = request.body
  const resultado = numero1 + numero2;
  response.send({message: resultado})
})

app.post("/resta", (request, response) => {
  const {numero1, numero2} = request.body
  const resultado = numero1 - numero2;
  response.send({message: resultado})
})

app.post("/multiplicacion", (request, response) => {
  const {numero1, numero2} = request.body
  const resultado = numero1 * numero2;
  response.send({message: resultado})
})

app.post("/division", (request, response) => {
  const {numero1, numero2} = request.body
  const resultado = numero1 / numero2;
  response.send({message: resultado})
})

app.listen(5000, () => {
  console.log('Servidor corriendo en localhost:5000...')
})