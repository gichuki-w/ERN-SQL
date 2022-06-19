const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'addptest'
})
app.post('/create', (req, res) => {
    // console.log(req.body)
    const name = req.body.name
    const email = req.body.email
    const post = req.body.post
    db.query('INSERT INTO `addptest`.`test` (`name`, `email`, `post`) VALUES (?,?,?)', [name, email, post], (err, result) => {
        if (err)
            console.log('ERRRRRRRROR' + err)
        else {
            res.json('Input Recorded')
        }
    })
})
app.get('/people', (req, res) => {
    db.query('SELECT * FROM `test`', (err, result) => {
        if (err)
            console.log('ERRRRRRRROR' + err)
        else {
            res.json(result)
        }
    })
})
app.listen('5500', () => { console.log('Your server is running') })