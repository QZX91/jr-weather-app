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
      </ul>
    </div>
  );
};

export default WeatherResult;
