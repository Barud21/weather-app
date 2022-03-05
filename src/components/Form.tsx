import { useState } from "react";
import "./Form.css";
import Switch from "react-switch";

const defaultFormData = {
  latitude: "",
  longitude: "",
  alternativeSource: false,
};

export default function Form() {
  const [formData, setFormData] = useState(defaultFormData);
  const { latitude, longitude, alternativeSource } = formData;
  const [checked, setChecked] = useState(alternativeSource);

  return (
    <>
      <h2>Provide latitude and longitude</h2>
      <form>
        <label htmlFor="latitude">LAT:</label>
        <input
          type="number"
          id="latitude"
          value={latitude}
          min={-90}
          max={90}
        />
        <br />
        <label htmlFor="longitude">LON:</label>
        <input
          type="number"
          id="longitude"
          value={longitude}
          min={-180}
          max={180}
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
    </>
  );
}
