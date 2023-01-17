import "./Forecast.css";
import Carousel from "react-bootstrap/Carousel";

const options = {
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
  // hour: "2-digit",
  // minute: "2-digit",
  // second: "2-digit",
  // hour12: false,
};

const Forecast = (props) => {
  const forecast = props.weather.forecast.forecastday.slice(1);
  console.log(forecast);

  return (
    <Carousel className="forecast-container" variant="dark">
      {forecast.map((day) => {
        const index = forecast.indexOf(day)
        return (
          <Carousel.Item className="forecast-item">
            <ul>
              <li>
                {new Date(forecast[index].date).toLocaleDateString(
                  "en-AU",
                  options
                )}
              </li>
              <li>
                <img
                  src={forecast[index].day.condition.icon}
                  alt="weather condition icon"
                />
              </li>
              <li>{forecast[index].day.condition.text}</li>
            </ul>
            <div className="forecast-data">
              <p>Max Temp: {forecast[index].day.maxtemp_c} &deg;C</p>
              <p>Min Temp: {forecast[index].day.mintemp_c} &deg;C</p>
              <p>Max Wind: {forecast[index].day.maxwind_kph} km/h</p>
              <p>Avg Humidity: {forecast[index].day.avghumidity} %</p>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Forecast;
