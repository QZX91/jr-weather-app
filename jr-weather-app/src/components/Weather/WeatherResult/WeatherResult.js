import Forecast from "../Forecast/Forecast";
import "./WeatherResult.css";

const options = {
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
};

const WeatherResult = (props) => {
  const location = props.weather.location;
  const weather = props.weather.current;
  const dateTime = new Date(location.localtime);

  return (
    <div className="weather-result">
      <div>
        <h2>
          {location.name}, {location.region}
        </h2>
        <p>{dateTime.toLocaleDateString("en-AU", options)}</p>
      </div>

      <ul className="weather-info">
        <li>
          <img src={weather.condition.icon} alt="weather condition icon" />
          <p>{weather.condition.text}</p>
        </li>
        <li>
          <p>Temp: {weather.temp_c} &deg;C</p>
        </li>
        <li>
          <p>Wind: {weather.wind_kph} km/h</p>
        </li>
        <li>
          {weather.air_quality && (
            <div className="aqi-info">
              <h3>Air Quality Data</h3>

              <p>
                PM2.5: {parseFloat(weather.air_quality.pm2_5).toFixed(2)}{" "}
                (μg/m3)
              </p>
              <p>
                PM10: {parseFloat(weather.air_quality.pm10).toFixed(2)} (μg/m3)
              </p>

              <p>CO: {parseFloat(weather.air_quality.co).toFixed(2)} (mg/m3)</p>
              <p>
                NO2: {parseFloat(weather.air_quality.no2).toFixed(2)} (μg/m3)
              </p>

              <p>O3: {parseFloat(weather.air_quality.o3).toFixed(2)} (μg/m3)</p>
              <p>
                SO2: {parseFloat(weather.air_quality.so2).toFixed(2)} (μg/m3)
              </p>
            </div>
          )}
        </li>
        {props.isForecast && (props.weather && <Forecast weather={props.weather}/>)}
      </ul>
    </div>
  );
};

export default WeatherResult;
