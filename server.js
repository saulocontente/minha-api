const express = require('express')
const app = express()
const data = require('./data.json')

app.use(express.json())

app.get('/client', function(request, response){
    response.json(data)
})
app.post('/client', function(request, response){})
app.put('/client', function(request, response){})
app.delete('/client', function(request, response){})


app.listen(3000, function(){
    console.log('Server is running')
})
