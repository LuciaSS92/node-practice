const express = require("express");
const https = require("node:https");
const bodyParser = require("body-parser");

const app = express();

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const query = req.body.cityName;
//   const apiKey = 
  const units = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&units=" +
    units +
    "&appid=" +
    apiKey;

  https.get(url, function (response) {
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temperature = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imgURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write(
        "<h1>The weather in " + query + " is currently " + description + "</h1>"
      );
      res.write("<img src=" + imgURL + ">");
      res.write(
        "<h2>The temperature is " + temperature + " degrees Celcius.</h2>"
      );
      res.send();
    });
  });
});
