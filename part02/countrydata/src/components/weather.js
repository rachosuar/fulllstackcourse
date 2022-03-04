import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";

const Weather = ({ city, promise }) => {
  const [data, setData] = useState([]);
  promise.then((response) => setData(response.data.current));

  return (
    <div>
      <h2>Weather in {city}</h2>

      <h4>temperature: {data.temperature}</h4>
      <img src={data.weather_icons} width="100" height="100" />
      <h4>
        Wind: {data.wind_speed} km/h direction {data.wind_dir}
      </h4>
    </div>
  );
};

export default Weather;
