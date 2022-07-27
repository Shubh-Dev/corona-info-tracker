import React from 'react';
import './Covid.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { generate } from 'randomized-string';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { fetchCovidData } from '../redux/covidslice/covidSlice';

const Covid = (props) => {
  const {
    id, country, population, cases, flag, deaths, continent,
  } = props;
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <div key={id} className="card-container">
      <div className="card">
        <div className="country-and-arrow">
          <h2 className="country-name">{country}</h2>
          <AiOutlineArrowRight className="arrow" onClick={handleClick} />
        </div>
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
