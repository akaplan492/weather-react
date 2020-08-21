import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The temperature in ${response.data.name} is ${response.data.main.temp}°F`
    );
  }

  let apiKey = "44f5d434a5d71346c2c2e5e6ee86e65a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

  return <h2>Hello from Weather</h2>;
}
