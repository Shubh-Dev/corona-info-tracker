import React from 'react';
import { NavLink } from 'react-router-dom';
import './Covid.css';
import PropTypes from 'prop-types';
// import { generate } from 'randomized-string';
import { BiRightArrowCircle } from 'react-icons/bi';

const Covid = (props) => {
  const {
    country, cases, flag,
  } = props;
  return (

    <div className="card-container">
      <div className="card">
        <div className="country-and-arrow">
          <div className="country-name-holder">
            <h2 className="country-name">{country}</h2>
          </div>
          <NavLink to={`/covidDetails/${country}`}>
            <BiRightArrowCircle className="arrow" />
          </NavLink>
          {/* <AiOutlineArrowRight className="arrow" /> */}
        </div>
        <img className="flag" src={flag} alt="Flag" />
        <p className="homepage-para">
          Country:
          {' '}
          {country}
        </p>
        <p className="homepage-para">
          Cases:
          {' '}
          {cases}
        </p>
      </div>
    </div>
  );
};

Covid.propTypes = {
  // id: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  cases: PropTypes.number.isRequired,
  flag: PropTypes.string.isRequired,
};

export default Covid;
