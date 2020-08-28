import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <h2>
            <FormattedDate date={props.data.date} />
          </h2>
          <h3>
            <div className="row">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </h3>
        </div>
        <div className="col-6">
          <div className="card-text">
            <WeatherIcon code={props.data.icon} />
            <ul>
              <li className="text-capitalize">{props.data.description}</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>
                Wind: {Math.round(props.data.wind)} m/s
                <i className="fas fa-wind"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
