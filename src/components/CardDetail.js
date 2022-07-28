import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';
import './CardDetail.css';
import PropTypes from 'prop-types';

const CardDetail = (props) => {
  const {
    id, country, flag, population, cases, deaths, continent, todaysCases, todayDeaths, tests, updated,
  } = props;

  return (
    <div key={id} className="main-card-details-container">
      <div className="back-btn">
        <NavLink to="/"><BsArrowLeftCircle className="back-btn" /></NavLink>
      </div>
      <div className="main-card-body">
        <div className="head">
          <img className="card-img" src={flag} alt={country} />
          <div>
            <h2 className="card-title">{country}</h2>
            <h4>
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
                Today's Cases:
              </span>
              {todaysCases}
            </h4>
          </div>
          <div className="body-left">
            <h4 className="description">
              <span>
                today's Deaths:
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
            <div className="body-left">
              <h4 className="description">
                <span>
                  Last Updated:
                </span>
                {updated}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

CardDetail.PropTypes = {
  id: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  cases: PropTypes.number.isRequired,
  deaths: PropTypes.number.isRequired,
  continent: PropTypes.string.isRequired,
  todaysCases: PropTypes.number.isRequired,
  todayDeaths: PropTypes.number.isRequired,
  tests: PropTypes.number.isRequired,
  updated: PropTypes.number.isRequired,
};

export default CardDetail;
