import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Tuesday, July 21 12:49PM",
      temperature: response.data.main.temp,
      imgUrl: "https://openweathermap.org/img/wn/01d@2x.png",
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
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
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </div>
              <div className="col-2">
                <button type="submit" className="btn btn-success">
                  <i class="fas fa-location-arrow"></i>
                </button>
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col-6">
              <h1>{weatherData.city}</h1>
              <h2>{weatherData.date}</h2>
              <h3>
                <div className="row">
                  <div>{Math.round(weatherData.temperature)} </div>
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
                  <li className="text-capitalize">{weatherData.description}</li>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>
                    Wind: {Math.round(weatherData.wind)} m/s
                    <i className="fas fa-wind"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "7c52c9751339516d5f3a613ae8cd33f4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
