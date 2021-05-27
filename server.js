// Setup empty JS object to act as endpoint for all routes
const projectData = {};

const APIKey = `38c452b47c3713431da7d44d1da6765a`;
var express = require("express");
// Start up an instance of app
var app = express();
/* Middleware*/
var bodyParser = require("body-parser");
var fetch = require("node-fetch");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
app.use(express.static("website"));

// Setup Server
const port = 8000;
app.listen(port, () => {
  console.log(`server running at port ${port}`);
});

app.get("/weather", function (req, res) {
  res.send(projectData);
});

let data = [];
app.post("/addWeather", addWeather);

function addWeather(req, res) {
  const weatherD = req.body;
  let newEntry = {
    Temperature: weatherD.Temperature,
    date: weatherD.date,
    feeling: weatherD.feeling,
  };
  data.push(newEntry);
  projectData["data"] = weatherD;
}
