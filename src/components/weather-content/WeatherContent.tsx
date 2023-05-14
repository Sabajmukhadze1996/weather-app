import React, { useState, useContext } from "react";
import { Translation } from "../../translation/TranslationContextProvider";
import "./weather-content.css";
import { WeatherContentProps } from "../../interfaces/WeatherContentProps";
import { ImLocation2 } from "react-icons/im";
import Switch from "@mui/material/Switch";
import TranslationComp from "../../translation/TranslationComponent";
import WeatherChart from "../chart/WeatherChart";

const WeatherContent: React.FC<WeatherContentProps> = ({
  country,
  location,
  degrees,
  feelsLike,
  icon,
  description,
  humidity,
  wind,
  visibility,
  seaLevel,
  checked,
  onToggle,
}): JSX.Element => {
  const [temperatureUnit, setTemperatureUnit] = useState("°C");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onToggle(event.target.checked);
    setTemperatureUnit(event.target.checked ? "°F" : "°C");
  };

  const { content } = useContext(Translation);

  return (
    <div className="weather-display">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TranslationComp />
        <div>
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <span>{checked ? "°F to °C" : "°C to °F"}</span>
        </div>
      </div>

      <div className="weather-location-title">
        <ImLocation2 fill="red" size={46} className="mb-3" />
        <p>{location}</p>
      </div>
      <div className="weather-current-temps-container">
        <div>
          <h2 className="weather-degrees fw-bold">
            {content?.current_temp}: &nbsp;{" "}
            <span style={{ fontWeight: "300" }}>
              {degrees} {temperatureUnit}
            </span>
          </h2>
          <h2 className="weather-degrees fw-bold">
            {content?.feels_like}: &nbsp;
            <span style={{ fontWeight: "300" }}>
              {feelsLike} {temperatureUnit}
            </span>
          </h2>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather-icon"
          className="weather-icon-img"
        />
      </div>
      <WeatherChart
        degrees={degrees}
        humidity={humidity}
        visibility={visibility}
        wind={wind}
      />
      <div className="weather-description">
        <div>
          <h4>
            {content?.weather_condition}: &nbsp;<span>{description}</span>
          </h4>
          <h4>
            {content?.humidity}: &nbsp;<span>{humidity}%</span>
          </h4>
          <h4>
            {content?.wind_speed}: &nbsp;<span>{wind} m/s</span>
          </h4>
          <h4>
            {content?.visibility}: &nbsp;
            <span>
              {visibility} {content?.meters}
            </span>
          </h4>
          <h4>
            {content?.sea_level}: &nbsp;
            <span>
              {seaLevel ? seaLevel : 480} {content?.meters}
            </span>
          </h4>
          <h4>
            {content?.country}: &nbsp;<span>{country}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default WeatherContent;
