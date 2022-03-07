import "./WeatherData.css";
import { IWeatherData } from "../interfaces/IWeatherData";
import { LatInput, LonInput, SwitchToggle, SubmitButton } from "./Form";
import { useState } from "react";
import Api from "../api";
import { Display } from "./Display";

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
  };

  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
    formData.alternativeSource = !formData.alternativeSource;

    if (weather.temperature !== undefined) {
      callApi();
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData(formData);

    callApi();
  };

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === "Enter") {
      callApi();
    }
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
      <div className="container-weather-data">
        <h1>Weather App</h1>
        <br />
        <h3>Input latitude and longitude</h3>
        <hr />
        <form className="form" onSubmit={onSubmit} onKeyPress={handleKeyPress}>
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
          <Display
            temperature={weather.temperature}
            pressure={weather.pressure}
            humidity={weather.humidity}
          />
        </div>
      </div>
    </>
  );
}
