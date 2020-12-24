import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchCity = ({ submit, value, change, showResult }) => {
  return (
    <>
      <form showResult={showResult} onSubmit={submit}>
        <input type="text" value={value} placeholder="Enter city" onChange={change} />
        <span className="span4">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </form>
    </>
  );
};

SearchCity.propTypes = {
  submit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  showResult: PropTypes.bool.isRequired,
};

export default SearchCity;
