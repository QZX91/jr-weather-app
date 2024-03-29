const API_KEY = "fff25134fefa416faed80500231501";
const FETCH_CITY_WEATHER_URL = "https://api.weatherapi.com/v1/forecast.json";

export const fetchWeatherByCity = async (city, aqi) => {
  const url = new URL(FETCH_CITY_WEATHER_URL);

  url.searchParams.append("key", API_KEY);
  url.searchParams.append("q", city);
  url.searchParams.append("aqi", aqi);
  url.searchParams.append("alerts", "no");
  url.searchParams.append("days", "8");


  const response = await fetch(url);
  const data = await response.json();

  return data;
};
