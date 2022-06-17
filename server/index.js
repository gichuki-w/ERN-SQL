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
    database: 'kaykilo'
})

app.post('/create', (req, res) => {
    console.log(req.body)
    const name = req.body.Name
    const age = req.body.Age
    const country = req.body.Country
    const wage = req.body.Wage
    const school = req.body.School

    db.query('INSERT INTO `kaykilo`.`people` (`name`, `age`, `country`, `wage`, `school`) VALUES (?,?,?,?,?)', [name, age, country, wage, school], (err, result) => {
        if (err)
            console.log('ERRRRRRRROR' + err)
        else {
            res.json('values inserted')
        }
    })
})

app.get('/people', (req, res) => {
    db.query('SELECT * FROM `people`', (err, result) => {
        if (err)
            console.log('ERRRRRRRROR' + err)
        else {
            res.json(result)
        }
    })

})

app.listen('5500', () => { console.log('Your server is running') })