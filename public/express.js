const express = require('express')
const app = express()
const port = 3001
const path = require('path');
const ShortUniqueId = require('short-unique-id');
const uid = new ShortUniqueId({ length: 12 })



app.use(express.static('public'))

// gets relevent HTML files to serve.
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
  console.log("request made for root")
})

app.get('/notes', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'notes.html'))
  console.log("request made for notes")
})


// logs the port. 
app.listen(port, () => {
  console.log(`note app listening on port ${port}`)
})