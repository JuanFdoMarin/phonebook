const express = require('express')
const dataPhonebook = require('./data-phonebook')
const app = express()
app.use(express.json())

app.get('/api/persons', (req, res) => {
    const phonebook = dataPhonebook
    res.send(phonebook)
})

app.listen('8080', () => {
    console.log('Server running', 8080);
})