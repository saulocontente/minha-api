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
    const {  id  ,  name  } = request.body

    //Salvar

    response.status(201).json({  id  ,  name  })
})

server.put(resourceEndpoint+param, function(request, response){
const { id } = request.params
const client = data.find(foundClient => foundClient.id == id)

if(!client) return response.status(204).json()

const {  name  } = request.body

response.json({  id  ,  name  })

response.json(client)

})
server.delete(resourceEndpoint, function(request, response){})


server.listen(3000, function(){
    console.log('Server is running')
})
