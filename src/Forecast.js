import React, { useState } from "react";
import ForecastPreview from "./ForecastPreview";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="Forecast row">
        {forecast.list.slice(0, 6).map(function (forecastItem) {
          return <ForecastPreview data={forecastItem} />;
        })}
      </div>
    );
  } else {
    let apiKey = "7c52c9751339516d5f3a613ae8cd33f4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);
    return null;
  }
}
