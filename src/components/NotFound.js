import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const NotFound = () => {
  return (
    <div className="NotFoundWrapper ResultFadeIn">
      <sapn className="span2">
        <FontAwesomeIcon icon={faFrown} />
      </sapn>
      <sapn className="span3">Sorry, the specified city was not found..</sapn>
    </div>
  );
};

export default NotFound;
