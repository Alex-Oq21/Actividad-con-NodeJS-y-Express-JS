const express = require('express')
const app = express()
app.get('/', (req, res, next) => {
    res.send('Hola Mundo');
})

app.listen(3000)