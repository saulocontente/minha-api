const express = require('express')
const server = express()
const data = require('./data.json')
const resourceEndpoint = '/client'
const param = '/:id'



server.listen(3000, function(){
    console.log('Server is running')
})
