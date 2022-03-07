import React from "react";
import "./Display.css";

const Display: React.FC<{
  temperature: number | undefined;
  pressure: number | undefined;
  humidity: number | undefined;
}> = ({ temperature, pressure, humidity }) => {
  return (
    <>
      <div className="container">
        <div className="container-temp">
          <div className="temp">
            <p>{temperature}</p>°C
          </div>
          <div>Temperature</div>
        </div>
        <div className="container-pres-hum">
          <div className="container-temp">
            <div className="pressure">
              <p>{pressure}</p>hPa
            </div>
            <div>Pressure</div>
          </div>
          <div className="container-temp">
            <div className="humidity">
              <p>{humidity}</p>%
            </div>
            <div>Humidity</div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Display };
