const express = require('express')
const app = express() 

app.get('/', (req, res) => {
    res.send('my server')
})

app.listen(3000, () => {
    console.log('app running on port 3000')
})