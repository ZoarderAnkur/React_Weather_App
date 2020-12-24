import React from 'react';

import PropTypes from 'prop-types';

import './style.css';


const ForecastHour = props => {
  const { temp, month, day, hour, icon } = props;
  const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;

  return (
    <div className="ForecastW">
      <span className="span1">
        {month}.{day}
      </span>
      <span className="span1">{hour}:00</span>
      <img className="WeatherIcon"  src={iconUrl} />
      <h4>
        {temp}&#176;
      </h4>
    </div>
  );
};

ForecastHour.propTypes = {
  temp: PropTypes.number.isRequired,
  month: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ForecastHour;
