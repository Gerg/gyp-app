const express = require('express')
const app = express()
const port = process.env.PORT

const db = require('better-sqlite3')('foobar.db', {});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

