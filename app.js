
const express = require('express')

const port = 9007

const app = express()

app.get('/profile', (peticion, respuesta) => {
    respuesta.json ({
        message: 'hola me estoy ejecutando desde la peticion get',
        name: 'josue',
        age: '36',
        country: 'Dominican Republic'
    })
})

app.post('/empresas', (peticion, respuesta) => {
    respuesta.json ([
        "Globan"
    ])
})

app.patch('/hobbies', (peticion, respuesta) => {
    respuesta.json ([
        "Baseball", "Basketball"
    ])
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})