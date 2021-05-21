// "use strict";

// const { default: fetch } = require("node-fetch");

/* Global Variables */
const apiKey = `38c452b47c3713431da7d44d1da6765a`;
const btn = document.querySelector("#generate");
const country = document.querySelector("#country");
const zip = document.querySelector("#zip");
const feelings = document.querySelector("#feelings");
const date = document.querySelector("#date");
const temp = document.querySelector("#temp");
const content = document.querySelector("#content");

// const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&q=${state}&appid=${apiKey}`;

// Create a new date instance dynamically with JS

// btn.addEventListener("click", function () {
//   const state = country.value;
//   const zipCode = zip.value;
//   zip.classList.add("hidden");
//   country.classList.add("hidden");
//   feelings.classList.add("hidden");

//   const retriveValue = async function () {
//     const response = await fetch(
//       `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&q=${state}&appid=${apiKey}`
//     );
//     const data = await response.json();
//     const tempValue =
//       (temp.textContent = `Temperature: ${data.main.temp}celsius`);
//     const contentValue =
//       (content.textContent = `description: ${data.weather[0].description}`);
//     console.log(tempValue);
//     console.log(contentValue);
//     console.log(data);
//     const stamp = data.dt;
//     console.log(stamp);
//     let d = new Date(stamp * 1000);
//     let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();
//     console.log((date.textContent = newDate));
//   };
//   console.log(retriveValue());
// });

// const postFeelings = async function (url = "", data = {}) {
//   console.log(data);
//   const res = await fetch(url, {
//     method: "POST",
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   try {
//     const newData = await res.json();
//     console.log(newData);
//     return newData;
//   } catch (error) {
//     console.log("error", error);
//   }
// };
// postFeelings("/weather", { zipCode: 900281 });
const postData = async (url = "", data = {}) => {
  console.log(data);
  const response = await fetch(url, {
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

postData("/add", { answer: 42 });

/**
 *fetch data from the api
 * receive the values from the frontend
 * use the values to fetch the specific data needed
 * receive response for the temp, date and content
 * display these data when the genarate button is clicked.
 */
/**
 * Take whatever the user writes in feeling and post it to the apps endpoint
 */
