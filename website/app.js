// "use strict";

/* Global Variables */
let baseUrl = `http://api.openweathermap.org/data/2.5/weather?`;
const apiKey = `38c452b47c3713431da7d44d1da6765a`;
const btn = document.querySelector("#generate");
const country = document.querySelector("#country");
const zip = document.querySelector("#zip");
const feelings = document.querySelector("#feelings");
const date = document.querySelector("#date");
const temp = document.querySelector("#temp");
const content = document.querySelector("#content");
let state, zipCode;

// Create a new date instance dynamically with JS

btn.addEventListener("click", UIGenerate);

function UIGenerate() {
  state = country.value;
  zipCode = zip.value;
  zip.classList.add("hidden");
  country.classList.add("hidden");
  feelings.classList.add("hidden");

  retriveValue(
    `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&q=${state}&appid=${apiKey}`
  );
}

// fetch API data
const retriveValue = async function (url) {
  const response = await fetch(url);

  try {
    const data = await response.json();
    // get temperature
    temp.textContent = `Temperature: ${data.main.temp} celsius`;

    //  get content
    content.textContent = feelings.value;

    // get date
    const stamp = data.dt;
    console.log(stamp);
    let d = new Date(stamp * 1000);
    let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();
    date.textContent = newDate;

    // feeling
  } catch (error) {
    console.log("error", error);
  }
};

const postData = async (url = "", data = {}) => {
  console.log(data);
  const response = await fetch("http://localhost:8000/add", {
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
    const feeling = feelings.value;
    console.log(feeling);
  } catch (error) {
    console.log("error", error);
  }
};

postData("/add", {
  zip: 900281,
  country: "Nigeria",
  feelings: "i feel good now",
});
