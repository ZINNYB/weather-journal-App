// "use strict";

/* Global Variables */
let baseUrl = `http://api.openweathermap.org/data/2.5/weather?`;
const APIKey = `38c452b47c3713431da7d44d1da6765a`;
const btn = document.querySelector("#generate");
const country = document.querySelector("#country");
const zip = document.querySelector("#zip");
const feelings = document.querySelector("#feelings");

// holder elements
const date = document.querySelector("#date");
const temp = document.querySelector("#temp");
const content = document.querySelector("#content");
let state, zipCode;
`http://api.openweathermap.org/data/2.5/weather?&`;

// Create a new date instance dynamically with J
const postData = async function (url = "", data = {}) {
  const response = await fetch("http://127.0.0.1:8000/addWeather", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    // Body data type must match "Content-Type" header
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

btn.addEventListener("click", retrieveData);

function retrieveData() {
  zip.classList.add("hidden");
  country.classList.add("hidden");
  feelings.classList.add("hidden");
  let zipCode = zip.value;
  let state = country.value;
  getWeather(
    `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&q=${state}&appid=${APIKey}`
  ).then(function (data) {
    console.log(data);
    const stamp = data.dt;
    let d = new Date(stamp * 1000);
    let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

    postData("/addWeather", {
      Temperature: data.main.temp,
      date: newDate,
      feeling: feelings.value,
    }).then(updateUI());
  });
}
const updateUI = async () => {
  const request = await fetch("http://127.0.0.1:8000/weather");
  try {
    const data = await request.json();
    console.log(data);
    console.log(data.data.Temperature);
    console.log(data.data.date);
    temp.innerHTML = `Temperature: ${data.data.Temperature} celsius`;
    content.innerHTML = feelings.value;
    date.innerHTML = data.data.date;
  } catch (error) {
    console.log("error", error);
  }
};
const getWeather = async function (url) {
  const res = await fetch(url);
  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};
