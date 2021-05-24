// Setup empty JS object to act as endpoint for all routes
const projectData = {};

var express = require("express");
// Start up an instance of app
var app = express();
/* Middleware*/
var bodyParser = require("body-parser");
var fetch = require("node-fetch");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
app.use(express.static("website"));

app.get("/weather", function (req, res) {
  res.send(projectData);
});

// Setup Server
const port = 8000;
app.listen(port, () => {
  console.log(`server running at port ${port}`);
});

let dataArray = [];
const weather = function (req, res) {
  dataArray.push(req.body);
  newEntry = {
    zip: req.body.zip,
    country: req.body.country,
    feelings: req.body.feelings,
  };
  console.log(dataArray);
  projectData.data1 = newEntry;
  console.log(projectData);
};

// create a post route for the endpoint
console.log(dataArray);
app.post("/add", weather);
