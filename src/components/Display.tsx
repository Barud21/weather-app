import React from "react";
import "./Display.css";

const Display: React.FC<{
  temperature: number | undefined;
  pressure: number | undefined;
  humidity: number | undefined;
}> = ({ temperature, pressure, humidity }) => {
  if (temperature === undefined) {
    document.getElementById("display-container")?.classList.add("transparent");
  } else {
    document
      .getElementById("display-container")
      ?.classList.remove("transparent");
  }

  return (
    <>
      <div className="container-display transparent" id="display-container">
        <div className="container-temp">
          <div className="temp">
            <p id="temp">{temperature}</p>°C
          </div>
          <div>Temperature</div>
        </div>
        <div className="container-pres-hum">
          <div className="container-temp">
            <div className="pressure">
              <p id="pressure">{pressure}</p>hPa
            </div>
            <div>Pressure</div>
          </div>
          <div className="container-temp">
            <div className="humidity">
              <p id="humidity">{humidity}</p>%
            </div>
            <div>Humidity</div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Display };
