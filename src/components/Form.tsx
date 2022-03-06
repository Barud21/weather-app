import { ChangeEventHandler, SyntheticEvent } from "react";
import "./Form.css";
import Switch from "react-switch";

const LatInput: React.FC<{
  value: number | string | undefined;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}> = ({ value, onChange }) => {
  return (
    <>
      <div>
        <label htmlFor="latitude">LAT:</label>
        <input
          type="number"
          id="latitude"
          value={value}
          min={-90}
          max={90}
          step={0.01}
          onChange={onChange}
          required
        />
      </div>
    </>
  );
};

const LonInput: React.FC<{
  value: number | string | undefined;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}> = ({ value, onChange }) => {
  return (
    <>
      <div>
        <label htmlFor="longitude">LON:</label>
        <input
          type="number"
          id="longitude"
          value={value}
          min={-180}
          max={180}
          step={0.01}
          onChange={onChange}
          required
        />
      </div>
    </>
  );
};

const SwitchToggle: React.FC<{
  onChange: (
    checked: boolean,
    event: MouseEvent | SyntheticEvent<MouseEvent | KeyboardEvent, Event>,
    id: string
  ) => void;
  checked: boolean;
}> = ({ onChange, checked }) => {
  return (
    <>
      <div className="container__switch">
        Weatherbit
        <Switch
          onChange={onChange}
          checked={checked}
          uncheckedIcon={false}
          checkedIcon={false}
        />
        DarkSky
      </div>
    </>
  );
};

const SubmitButton: React.FC<{}> = () => {
  return (
    <>
      <button type="submit">Display weather</button>
    </>
  );
};

export { LatInput, LonInput, SwitchToggle, SubmitButton };
