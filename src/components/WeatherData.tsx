import "./WeatherData.css";
import { IWeatherData } from "../IWeatherData";
import { LatInput, LonInput, SwitchToggle, SubmitButton } from "./Form";
import { useState } from "react";
import Api from "../api";

const defaultFormData = {
  latitude: "",
  longitude: "",
  alternativeSource: false,
};

const defaultWeather: IWeatherData = {
  temperature: undefined,
  pressure: undefined,
  humidity: undefined,
};

export default function WeatherData() {
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

    callApi();
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData(formData);

    callApi();
  };

  const callApi = () => {
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
      <div className="container">
        <h1>Weather App</h1>
        <br />
        <h3>Input latitude and longitude</h3>
        <hr />
        <form className="form" onSubmit={onSubmit}>
          <div className="inputs">
            <LatInput value={latitude} onChange={onChange}></LatInput>
            <LonInput value={longitude} onChange={onChange}></LonInput>
          </div>
          <div>
            <SwitchToggle
              onChange={handleChange}
              checked={checked}
            ></SwitchToggle>
          </div>
          <SubmitButton></SubmitButton>
        </form>
        <br />
        <div className="weather-display">
          <p>Temperature: {weather && weather.temperature}°C</p>
          <p>Pressure: {weather && weather.pressure}hPa</p>
          <p>Humidity: {weather && weather.humidity}%</p>
        </div>
      </div>
    </>
  );
}
