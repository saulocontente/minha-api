const express = require('express')
const server = express()
const data = require('./data.json')
const resourceEndpoint = '/client'
const param = '/:id'

server.use(express.json())

server.get(resourceEndpoint, function(request, response){
    response.json(data)
})

server.get(resourceEndpoint+param, function(request, response){
    const { id } = request.params
    const client = data.find(foundClient => foundClient.id == id )

    if(!client) return response.status(204).json()
    
    response.json(client)
})

server.post(resourceEndpoint, function(request, response){
    const {  id  ,  first_name  } = request.body

    //Salvar

    response.status(201).json({  id  ,  first_name  })
    console.log(`POST {id : ${id} first_name : ${first_name}}`)
})

server.put(resourceEndpoint+param, function(request, response){
const { id } = request.params
const client = data.find(foundClient => foundClient.id == id)

if(!client) return response.status(204).json()

const {  first_name  } = request.body

client.first_name = first_name
response.json(client)
console.log(`PUT CLIENT ID: ${client.id}`)
})

server.delete(resourceEndpoint+param, function(request, response){
    const { id } = request.params
    const clientsFiltered = data.filter(client => client.id != id)

    if(!clientsFiltered) return response.status(204).json()

    response.json(clientsFiltered)
})


server.listen(3000, function(){
    console.log('Server is running')
})
