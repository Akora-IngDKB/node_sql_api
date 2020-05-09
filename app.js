const express = require('express')
const fetch = require('./sql_demo')
const app = express()

app.get('/api/customers', (req, res) => {

})

app.get('/api/country', (req, res) => {
    console.log(req.query)

    fetch(req.query.name, (err, result) => {
        if (err) return console.log(err)

        res.json(result)
    })
    // res.json({
    //     name: "DKB",
    //     class: "Primary 5"
    // })
})

app.listen(3000, () => {
    console.log('Server is up and listening')
})