const express = require('express')
const app = express()
const port = 3001
const path = require('path');
const ShortUniqueId = require('short-unique-id');
const uid = new ShortUniqueId({ length: 12 })
const process = require('process');

process.chdir("C:\\users\\bradr\\school\\modules\\module11\\verbose-fortnight\\public")

app.use(express.static('/public'))

// gets relevent HTML files to serve.
app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
  console.log("request made for root")
})

app.get('/notes', (req, res) => {
  res.sendFile(path.resolve('notes.html'))
  console.log("request made for notes")
})
// app.get('/api/notes', (req,res)=> {
//   // read the file and return the notes 
//   console.log("sent DB file")
// })

// logs the port. 
app.listen(port, () => {
  console.log(`note app listening on port ${port}`)
})