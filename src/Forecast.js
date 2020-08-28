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
    let apiKey = "a083ecce5acb267afcb5fd06c5491ba5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);
    return null;
  }
}
