// imports
const express = require('express');
const app = express();
const path = require('path');
const ShortUniqueId = require('short-unique-id');
const uid = new ShortUniqueId({ length: 12 });
const process = require('process');
const fs = require('fs');
// set the directory to look for files and log it
process.chdir('public');
console.log('Currentdir ' + process.cwd());
app.use(express.static('public'))
// port to be used
const port = process.env.PORT || 3000

// gets relevent HTML files to serve.
app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
  console.log("request made for root")
})

app.get('/notes', (req, res) => {
  res.sendFile(path.resolve('notes.html'))
  console.log("request made for notes")
})

app.get('/assets/index.js', (req, res) => {
  res.sendFile(path.resolve('..\\public\\assets\\index.js'));
  console.log("request made for scripts")
})
app.get('/assets/styles.css', (req, res) => {
  res.sendFile(path.resolve('..\\public\\assets\\styles.css'));
  console.log("request made for styles")
})

// too be used to send JSONDB to client
 app.get('/api/notes', (req,res)=> {
  let JSONDB = getjson() 
  console.log("sent DB file")
  res.send(JSONDB)
 })

// logs the port being used. 
app.listen(port, () => {
  console.log(`note app listening on port ${port}`)
})


function getjson(){
 let Data = fs.readFileSync("..\\db\\db.json")
 JSON.stringify(Data)
 return Data
}