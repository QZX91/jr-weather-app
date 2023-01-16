import "./Weather.css";
import WeatherResult from "./WeatherResult/WeatherResult";
import { useState } from "react";
import SearchCity from "./SearchCity/SearchCity";
import Card from "react-bootstrap/Card";
import Spinner from "../Spinner/Spinner"

const Weather = () => {
  const [weather, setWeather] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const onSearch = (weatherData) => {
    setWeather(weatherData);
    console.log(weatherData.current)
  };

  const onSetLoading = (loading) =>{
    setLoading(loading);
  }

  return (
      <Card className="text-center weather-container">
        <Card.Header>
          <h1>React Weather App</h1>
        </Card.Header>
        <Card.Body>
          <SearchCity search={onSearch} setLoading={onSetLoading}/>
          {loading ? <Spinner/> : (weather && <WeatherResult weather={weather} />)}
          
        </Card.Body>
        <Card.Footer className="text-muted">By Roy</Card.Footer>
      </Card>
  );
};

export default Weather;
