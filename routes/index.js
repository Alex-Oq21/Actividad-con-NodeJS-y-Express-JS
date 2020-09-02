const express = require('express');
const router = express.Router()

router.get('/', (req, res, next) => {
    res.send('Hola desde La carpeta routes');
})
router.get('/home', (req, res, next) => {
    res.render('home', null)
})
router.get('/json', (req, res, next) => {
    res.json({
        saludo: 'Hola a todos!, desde la carpeta routes'
    })
})
module.exports = router