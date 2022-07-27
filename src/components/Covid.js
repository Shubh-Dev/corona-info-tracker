import React from 'react';
import './Covid.css';
import PropTypes from 'prop-types';

const Covid = ({
  country, population, cases, flag, deaths, continent,
}) => (

  <div className="card-container">
    <div className="card">
      <h1>{country}</h1>
      <img className="flag" src={flag} alt="Flag" />
      <p>
        Country:
        {country}
      </p>
      <p>
        Population:
        {population}
      </p>
      <p>
        Cases:
        {cases}
      </p>
      <p>
        Deaths:
        {deaths}
      </p>
      <p>
        Continent:
        {continent}
      </p>
    </div>
  </div>
);

Covid.propTypes = {
  country: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  cases: PropTypes.number.isRequired,
  flag: PropTypes.string.isRequired,
  deaths: PropTypes.number.isRequired,
  continent: PropTypes.string.isRequired,
};

export default Covid;
