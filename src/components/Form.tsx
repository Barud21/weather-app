import { useState } from "react";
import "./Form.css";
import Switch from "react-switch";

import Api from "../api";
import { IWeatherData } from "../IWeatherData";

const defaultFormData = {
  latitude: "",
  longitude: "",
  alternativeSource: false,
};

const defaultWeather: IWeatherData = {
  temperature: NaN,
  pressure: NaN,
  humidity: NaN,
};

export default function Form() {
  const [formData, setFormData] = useState(defaultFormData);
  const { latitude, longitude, alternativeSource } = formData;
  const [checked, setChecked] = useState(alternativeSource);
  const [weather, setWeather] = useState(defaultWeather);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
    console.log(formData);
  };

  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
    formData.alternativeSource = !formData.alternativeSource;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData(formData);

    const api = new Api();
    const fetchApi = async () => {
      const weatherData = await api.fetchAxios(
        formData.latitude,
        formData.longitude,
        formData.alternativeSource
      );
      setWeather(weatherData);
    };
    fetchApi();
  };

  return (
    <>
      <h2>Provide latitude and longitude</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="latitude">LAT:</label>
        <input
          type="number"
          id="latitude"
          value={latitude}
          min={-90}
          max={90}
          step={0.01}
          onChange={onChange}
        />
        <br />
        <label htmlFor="longitude">LON:</label>
        <input
          type="number"
          id="longitude"
          value={longitude}
          min={-180}
          max={180}
          step={0.01}
          onChange={onChange}
        />
        <br />
        <Switch
          onChange={handleChange}
          checked={checked}
          uncheckedIcon={false}
          checkedIcon={false}
        />
        <button type="submit">Display weather</button>
      </form>

      <div>
        <p>Temperature: {weather.temperature}°C</p>
        <p>Pressure: {weather.pressure}hPa</p>
        <p>Humidity: {weather.humidity}%</p>
      </div>
    </>
  );
}
