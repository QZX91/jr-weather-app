import "./SearchCity.css";
import { fetchWeatherByCity } from "../../../services/weatherService";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SearchCity = (props) => {
  const [city, setCity] = useState("");
  const [aqi, setAqi] = useState("no");

  const onSearchButtonClick = async (event) => {
    event.preventDefault();
    props.setLoading(true);
    try {
      const weatherData = await fetchWeatherByCity(city, aqi);
      props.search(weatherData);
    } catch (error) {
      console.error('Failed to fetch city weather due to error: ', error)
    } finally {
      props.setLoading(false);
    }
  };

  const onCityInputChange = (event) => {
    setCity(event.target.value);
  };

  const onAirQualityCheckboxChange = (event) => {
    console.log(event);
    if (event.target.checked === true) {
      setAqi("yes")
    } else if (event.target.checked === false) {
      setAqi("no")
    }
  }

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
        label="Show air quality data" 
        className="air-quality" 
        value={aqi}
        onChange={onAirQualityCheckboxChange}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default SearchCity;
