import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCitySearch(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "7c52c9751339516d5f3a613ae8cd33f4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleCurrentLocation(event) {
    event.preventDefault();
    function showGeolocation(position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      const apiKey = "7c52c9751339516d5f3a613ae8cd33f4";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    }

    navigator.geolocation.getCurrentPosition(showGeolocation);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-8">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="form-control"
                  autoFocus="on"
                  onChange={handleCitySearch}
                />
              </div>
              <div className="col-2">
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </div>
              <div className="col-2">
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={handleCurrentLocation}
                >
                  <i className="fas fa-location-arrow"></i>
                </button>
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
          <Forecast city={weatherData.city} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
