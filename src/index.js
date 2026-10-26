function updateTime() {
  // Port-au-Prince
  let portAuPrinceElement = document.querySelector("#port-au-prince");
  if (portAuPrinceElement) {
    let portAuPrinceDateElement = portAuPrinceElement.querySelector(".date");
    let portAuPrinceTimeElement = portAuPrinceElement.querySelector(".time");
    let portAuPrinceTime = moment().tz("America/Port-au-Prince");
    portAuPrinceDateElement.innerHTML = portAuPrinceTime.format("MMMM Do YYYY");
    portAuPrinceTimeElement.innerHTML = portAuPrinceTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }

  // London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }

  // Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");
    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_"," ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML =
    `<div class="city">
       <div>
       <h2>${cityName}</h2>
       <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
       </div>
       <div class="time">${cityTime.format("h:mm:ss")} 
       <small>${cityTime.format("A")  
       } 
       </small>
       </div>
    </div>
    </br>
    <a href="/">Back to Homepage</a>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);