import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The temperature in ${response.data.name} is ${response.data.main.temp}°F`
    );
  }

  let apiKey = "44f5d434a5d71346c2c2e5e6ee86e65a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

  let weatherData = {
    city: "New York",
    date: "Tuesday, July 21st 12:49PM",
    temperature: 33,
    imgUrl: "https://openweathermap.org/img/wn/01d@2x.png",
    description: "Clear",
    humidity: 73,
    wind: 10,
  };
  return (
    <div className="Weather">
      <div className="card-body">
        <form>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-2">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
            <div className="col-2">
              <input type="submit" value="📍" className="btn btn-success" />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-6">
            <h1>{weatherData.city}</h1>
            <h2>{weatherData.date}</h2>
            <h3>
              <div className="row">
                <div> {weatherData.temperature} </div>
                <div className="units">
                  <a href="/"> ºC </a>|<a href="/"> ºF</a>
                </div>
              </div>
            </h3>
          </div>
          <div className="col-6">
            <div className="card-text">
              <img
                className="card-img-top"
                src={weatherData.imgUrl}
                alt={weatherData.description}
              />
              <ul>
                <li>{weatherData.description}</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>
                  Wind: {weatherData.wind} m/s
                  <i className="fas fa-wind"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
