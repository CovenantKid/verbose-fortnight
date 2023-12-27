const express = require('express')
const app = express()
const port = 3001
const path = require('path');
const filePath = path.resolve(__dirname, 'index.html');

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
  console.log("request made for root")
})

app.get('/notes', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'notes.html'))
  console.log("request made for notes")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})