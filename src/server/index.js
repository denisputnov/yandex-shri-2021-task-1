const path = require('path');
const express = require('express');
const { RequestError } = require('cacheable-request');

const PORT = process.env.PORT ?? 8080
const app = express()

app.use(express.static(path.resolve(__dirname, './../../assets')));
app.use(express.static(path.resolve(__dirname, './../../build')));
console.log(path.resolve(__dirname, './../../build'));

app.get('/', (request, responce) => {
  responce.sendFile(path.resolve(__dirname, './../index.html'))
})

app.listen(PORT, () => {
  console.log(`Server has been started on localhost:${PORT}...`)
})