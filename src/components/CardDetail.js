import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';
import './CardDetail.css';
import PropTypes from 'prop-types';

const CardDetail = (props) => {
  const {
    id, country, flag, population, cases, deaths, continent,
    todayDeaths, tests, recovered, active,
  } = props;

  return (
    <div key={id} className="main-card-details-container">
      { console.log('card-test', { id })}
      <div className="back-btn">
        <NavLink to="/"><BsArrowLeftCircle className="back-btn" /></NavLink>
      </div>
      <div className="main-card-body">
        <div className="head">
          <img className="card-img" src={flag} alt={country} />
          <div>
            <h2 className="card-title color-white">{country}</h2>
            <h4 className="color-white">
              {cases}
              {' '}
              Cases
            </h4>
          </div>
        </div>
        <div className="body">
          <div className="body-left">
            <h4 className="description">
              <span>
                Population:
              </span>
              {population}
            </h4>
          </div>
          <div className="body-left">
            <h4 className="description">
              <span>
                Cases:
              </span>
              {cases}
            </h4>
          </div>
          <div className="body-left">
            <h4 className="description">
              <span>
                Deaths:
              </span>
              {deaths}
            </h4>
          </div>
          <div className="body-left">
            <h4 className="description">
              <span>
                continent:
              </span>
              {continent}
            </h4>
          </div>
          <div className="body-left">
            <h4 className="description">
              <span>
                active:
              </span>
              {active}
            </h4>
          </div>
          <div className="body-left">
            <h4 className="description">
              <span>
                today&apos;s Deaths:
              </span>
              {todayDeaths}
            </h4>
          </div>
          <div className="body-left">
            <h4 className="description">
              <span>
                Tests:
              </span>
              {tests}
            </h4>
          </div>
          <div>
            <div className="body-left">
              <h4 className="description">
                <span>
                  Recovered:
                </span>
                {recovered}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

CardDetail.propTypes = {
  id: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  cases: PropTypes.number.isRequired,
  deaths: PropTypes.number.isRequired,
  continent: PropTypes.string.isRequired,
  active: PropTypes.number.isRequired,
  todayDeaths: PropTypes.number.isRequired,
  tests: PropTypes.number.isRequired,
  recovered: PropTypes.number.isRequired,
};

export default CardDetail;
