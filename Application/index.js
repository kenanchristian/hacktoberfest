const express = require("express");
//Port number is constant and declared in here.
const port = 3000

// the below gives us a variable we can use to run all the methods that are in the express library
const app = express();

// the below code gives an output(i.e-title) when we go to https://localhost:3000/
app.set('title', 'hacktoberfest');

app.get('/', (req, res) => {
  res.send('hello world')
})

//Start server
app.listen(port, () => {
 //console.log() prints output
    console.log('Listening at port %d (http://localhost:%d)',port,port)
})

//get time
app.get('/time', (req, res) => {
  	res.send(Date.now())
})

//get year
app.get('/year', (req, res) => {
	const date = new Date()
  	res.send(date.getFullYear())
})
