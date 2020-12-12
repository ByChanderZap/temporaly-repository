// Include Dependencies
const express = require('express');
const cors = require('cors');

// Start Up An Instance Of An App
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('website'));

// Port And Server
const port = 8080;
const server = app.listen(port, () => {console.log(`running on localhost: ${port}`)}) ;

// Endpoint Object
const data = [];

// GET req.body
app.get('/addColor', (req, res) => {
  console.log(req.body)
});

// POST data
app.post('/addColor', addColor);

function addColor (req,res){
    data.push(req.body);
    console.log(req.body);
    res.status(200).json({
      message: data
    })
};

app.get('/addColor', (req,res) => res.send(data));
