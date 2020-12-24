import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from '@fortawesome/free-solid-svg-icons';

import ForecastHour from './ForecastHour';

const Result = ({ weather }) => {
  const {
    city,
    country,
    date,
    description,
    main,
    temp,
    sunset,
    sunrise,
    humidity,
    wind,
    highestTemp,
    lowestTemp,
    forecast,
  } = weather;

  const forecasts = forecast.map(item => (
    <ForecastHour
      key={item.dt}
      temp={Math.floor(item.main.temp * 1) / 1}
      icon={item.weather[0].icon}
      month={item.dt_txt.slice(5, 7)}
      day={item.dt_txt.slice(8, 10)}
      hour={item.dt_txt.slice(11, 13) * 1}
    />
  ));

  let weatherIcon = null;

  if (main === 'Thunderstorm') {
    weatherIcon = <FontAwesomeIcon icon={faBolt} />;
  } else if (main === 'Drizzle') {
    weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
  } else if (main === 'Rain') {
    weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
  } else if (main === 'Snow') {
    weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
  } else if (main === 'Clear') {
    weatherIcon = <FontAwesomeIcon icon={faSun} />;
  } else if (main === 'Clouds') {
    weatherIcon = <FontAwesomeIcon icon={faCloud} />;
  } else {
    weatherIcon = <FontAwesomeIcon icon={faSmog} />;
  }

  return (
    <div className="Results ResultFadeIn">
      <div className="LocationWrapper">
        <h2>
          {city}, {country}
        </h2>
        <h4 className="b">{date}</h4>
      </div>
      <div className="CurrentWeatherWrapper">
        <div className="WeatherIcon1">{weatherIcon}</div>
        <div>
          <div className="Temperature">{Math.floor(temp)}&#176;</div>
          <h4 className="b">
            {description}
          </h4>
        </div>
      </div>
      <div className="WeatherDetailsWrapper">
        <div className="WeatherDetail">
          <h4 >
            {Math.floor(highestTemp)}&#176;
          </h4>
          <span className="span1">Hight</span>
        </div>
        <div className="WeatherDetail">
          <h4>
            {wind}mph
          </h4>
          <span className="span1">Wind</span>
        </div>
        <div className="WeatherDetail">
          <h4>
            {sunrise}
          </h4>
          <span className="span1">Sunrise</span>
        </div>
        <div className="WeatherDetail">
          <h4>
            {Math.floor(lowestTemp)}&#176;
          </h4>
          <span className="span1">Low</span>
        </div>
        <div className="WeatherDetail">
          <h4>
            {humidity}%
          </h4>
          <span className="span1">Rain</span>
        </div>
        <div className="WeatherDetail">
          <h4>
            {sunset}
          </h4>
          <span className="span1">Sunset</span>
        </div>
      </div>
      <div className="ForecastWrapper">
        <h3>Forecast</h3>
        <div className="Forecast">{forecasts}</div>
      </div>
    </div>
  );
};

Result.propTypes = {
  weather: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    main: PropTypes.string,
    temp: PropTypes.number,
    sunrise: PropTypes.string,
    sunset: PropTypes.string,
    humidity: PropTypes.number,
    wind: PropTypes.number,
    highestTemp: PropTypes.number,
    lowestTemp: PropTypes.number,
    forecast: PropTypes.array,
  }).isRequired,
};

export default Result;
