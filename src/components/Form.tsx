import { ChangeEventHandler, SyntheticEvent } from "react";
import "./Form.css";
import Switch from "react-switch";

const LatInput: React.FC<{
  value: number | string | undefined;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}> = ({ value, onChange }) => {
  return (
    <>
      <div className="input">
        <label htmlFor="latitude">LAT: </label>
        <input
          type="number"
          id="latitude"
          className="latitude"
          value={value}
          min={-90}
          max={90}
          step={0.01}
          maxLength={5}
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
      <div className="input">
        <label htmlFor="longitude">LON: </label>
        <input
          type="number"
          id="longitude"
          className="longitude"
          value={value}
          min={-180}
          max={180}
          step={0.01}
          maxLength={5}
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
  if (checked) {
    document.getElementById("alternative-source")?.classList.add("bold");
    document.getElementById("primary-source")?.classList.remove("bold");
  } else {
    document.getElementById("primary-source")?.classList.add("bold");
    document.getElementById("alternative-source")?.classList.remove("bold");
  }

  return (
    <>
      <div>
        <div className="container__switch">
          <p className="primary-source bold" id="primary-source">
            Weatherbit
          </p>
          <Switch
            className="btn-switch"
            onChange={onChange}
            checked={checked}
            uncheckedIcon={false}
            checkedIcon={false}
            onColor="#888"
            height={25}
            handleDiameter={23}
          />
          <p className="alternative-source" id="alternative-source">
            DarkSky
          </p>
        </div>
        <div className="source">Data source</div>
      </div>
    </>
  );
};

const SubmitButton: React.FC<{}> = () => {
  return (
    <>
      <button className="btn-submit" type="submit">
        Display weather
      </button>
    </>
  );
};

export { LatInput, LonInput, SwitchToggle, SubmitButton };
