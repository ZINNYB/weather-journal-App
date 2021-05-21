// Setup empty JS object to act as endpoint for all routes
const projectData = {};
const APIKey = `38c452b47c3713431da7d44d1da6765a`;
const zipCode = 94040;
const country = "us";

// const cityName = "Lagos";
const baseUrl = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&q=${country}&appid=${APIKey}`;
// Require Express to run server and routes
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var fetch = require("node-fetch");

// Start up an instance of app
// const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
app.use(express.static("website"));

// Main async function
const cityweather = async function (zipCode, country, APIKey) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&q=${country}&appid=${APIKey}`
  );
  console.log(response);
  const data = await response.json();
  console.log(data);
};
cityweather(94040, "usa", APIKey);
// app.get("/weather", function (req, res) {
//   res.send(projectData);
// });
// const getEndpoint = async function () {
//   const endData = fetch(projectData);
// };
// create a post route for the endpoint
let dataArray = [];
const weather = function (req, res) {
  dataArray.push(req.body);
  console.log(dataArray);
};
app.post("/add", weather);

// Setup Server
const port = 8000;
app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
