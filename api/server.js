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
  console.log(process.cwd())
})

app.get('/notes', (req, res) => {
  res.sendFile(path.resolve('notes.html'))
  console.log("request made for notes")
  console.log(process.cwd())
})
// relevant scripts for html pages.
app.get('/index.js', (req, res) => {
  res.sendFile(path.resolve('..\\public\\index.js'));
  console.log("request made for scripts")
  console.log(process.cwd())
})
app.get('/styles.css', (req, res) => {
  res.sendFile(path.resolve('..\\public\\styles.css'));
  console.log("request made for styles")
  console.log(process.cwd())
})

app.post("/notes"), (req,res) => {
console.log("request for post to notes DB")
res.send(data)
data = getjson()
console.log(req.body)
}

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