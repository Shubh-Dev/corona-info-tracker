import React from 'react';
import './Covid.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCovidData } from '../redux/covidslice/covidSlice';
import { generate } from 'randomized-string';


const Covid = (props) => {
  const {
    id, country, population, cases, flag, deaths, continent,
  } = props;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch()
  };

  return (
    <div key={id} className="card-container">
      <button className="show-btn" type="button" onClick={handleClick}>Show Details</button>
      <div className="card">
        <h2>{country}</h2>
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
};

Covid.propTypes = {
  country: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  cases: PropTypes.number.isRequired,
  flag: PropTypes.string.isRequired,
  deaths: PropTypes.number.isRequired,
  continent: PropTypes.string.isRequired,
};

export default Covid;
