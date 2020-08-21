import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
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
        <form className="form-inline">
          <div className="form-group mx-xl-3 mb-2">
            <label className="sr-only">search city</label>
            <input
              type="city"
              className="form-control"
              placeholder="Search City"
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            <i className="fas fa-search"></i>
          </button>
          <div>
            <button type="button" className="btn btn-success mb-2">
              Use Current Location
            </button>
          </div>
        </form>
        <br />
        <div className="row">
          <div className="col-6">
            <h1>{weatherData.city}</h1>
            <h2>{weatherData.date}</h2>
            <br />
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
            <img
              className="card-img-top"
              src={weatherData.imgUrl}
              alt={weatherData.description}
            />
            <div className="card-body">
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
