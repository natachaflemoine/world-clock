function updateTime() {
// New York City
let newYorkCityElement = document.querySelector("#new-york-city");
let newYorkCityDateElement = newYorkCityElement.querySelector(".date");
let newYorkCityTimeElement = newYorkCityElement.querySelector(".time");
let newYorkCityTime = moment().tz("America/New_York");

newYorkCityDateElement.innerHTML = newYorkCityTime.format("MMMM Do YYYY");
newYorkCityTimeElement.innerHTML = newYorkCityTime.format(
  "h:mm:ss [<small>]A[</small>]");

// Sydney
let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");
let sydneyTime = moment().tz("Australia/Sydney");
sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
sydneyTimeElement.innerHTML = sydneyTime.format(
  "h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);