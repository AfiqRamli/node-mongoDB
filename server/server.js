const express = require('express')
const bodyParser = require('body-parser')

const {mongoose} = require('./db/mongoose')
const {Todo} = require('./models/todo')
// const {User} = require('./models/user')

const app = express()

//setup middleware
app.use(bodyParser.json())

//configure routes
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    })
    todo.save().then((doc) => {
        res.send(doc)
    }), (e) => {res.status(400).send(e)}
})

app.listen(3000, () => {
    console.log('Started at port 3000')
})