import "./SearchCity.css";
import { fetchWeatherByCity } from "../../../services/weatherService";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SearchCity = (props) => {
  const [city, setCity] = useState("");
  const [aqi, setAqi] = useState("no");
  const [isForecast, setIsForecast] = useState(false);
  const [validInput, setValidInput] = useState(false);

  const onSearchButtonClick = async (event) => {
    event.preventDefault();
    props.setLoading(true);
    try {
      const weatherData = await fetchWeatherByCity(city, aqi);
      props.search(weatherData, isForecast);
    } catch (error) {
      alert("Failed to fetch city weather data");
    } finally {
      props.setLoading(false);
    }
  };

  const onCityInputChange = (event) => {
    const value = event.target.value;
    setCity(value);
    if (value.length >= 2) {
      setValidInput(true);
    } else {
      setValidInput(false);
    }
  };

  const onAirQualityCheckboxChange = (event) => {
    if (event.target.checked === true) {
      setAqi("yes");
    } else if (event.target.checked === false) {
      setAqi("no");
    }
  };

  const onForecastCheckboxChange = (event) => {
      setIsForecast(event.target.checked);
  };

  return (
    <Form onSubmit={onSearchButtonClick}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={onCityInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          label="Show current air quality data"
          className="checkbox"
          value={aqi}
          onChange={onAirQualityCheckboxChange}
        />
        <Form.Check
          type="checkbox"
          label="Show 7 days weather forecast"
          className="checkbox"
          value={isForecast}
          onChange={onForecastCheckboxChange}
        />
      </Form.Group>
      {validInput ? (
        <Button variant="primary" type="submit">
          Search
        </Button>
      ) : (
        <Button variant="primary" type="submit" disabled>
          Search
        </Button>
      )}
    </Form>
  );
};

export default SearchCity;
