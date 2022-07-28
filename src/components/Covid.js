import React from 'react';
import { NavLink } from 'react-router-dom';
import './Covid.css';
import PropTypes from 'prop-types';
// import { generate } from 'randomized-string';
import { BiRightArrowCircle } from 'react-icons/bi';

const Covid = (props) => {
  const {
    id, country, cases, flag,
  } = props;
  return (
    <div key={id} className="card-container">
      <div className="card">
        <div className="country-and-arrow">
          <h2 className="country-name">{country}</h2>
          <NavLink to={`/covidDetails/${id}`}>
            <BiRightArrowCircle className="arrow" />
          </NavLink>
          {/* <AiOutlineArrowRight className="arrow" /> */}
        </div>
        <img className="flag" src={flag} alt="Flag" />
        <p>
          Country:
          {' '}
          {country}
        </p>
        <p>
          Cases:
          {' '}
          {cases}
        </p>
      </div>
    </div>
  );
};

Covid.propTypes = {
  id: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  cases: PropTypes.number.isRequired,
  flag: PropTypes.string.isRequired,
};

export default Covid;
