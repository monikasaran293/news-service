const express = require('express')

const app = express()

//routes
const newsRouter  = require('./routes/news')
console.log(newsRouter);

app.use('/', newsRouter)

// listen on port 5000
app.listen(5000, () => console.log("Listening on port 5000"))