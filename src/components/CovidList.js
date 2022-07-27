import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { generate } from 'randomized-string';
import { fetchCovidData } from '../redux/covidslice/covidSlice';
import Covid from './Covid';
import './CovidList.css';

const CovidList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCovidData());
  }, []);

  const { items } = useSelector((state) => state.items);

  return (
    <div>
      <header className="header">
        <h1>Covid 19 data</h1>
        <input className="searchbar" type="searchbar" placeholder="Search.." />
      </header>
      <div className="main-container">
        {{items}.isFailed? <div>Failed to load data</div> : {items}.isLoading? <div>Loading...</div> :
        items.map(({
          id, country, flag, cases, deaths,
          population,
          continent,
        }) => (
            <Covid
              key={id}
              country={country}
              flag={flag}
              cases={cases}
              deaths={deaths}
              population={population}
              continent={continent}
            />
        ))}
      </div>
    </div>
  );
};

CovidList.prototype = {
  id: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  cases: PropTypes.number.isRequired,
  todayCases: PropTypes.number.isRequired,
  deaths: PropTypes.number.isRequired,
  todayDeaths: PropTypes.number.isRequired,
  recovered: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
  critical: PropTypes.number.isRequired,
  population: PropTypes.number.isRequired,
  continent: PropTypes.string.isRequired,
  casesPerOneMillion: PropTypes.number.isRequired,
  deathsPerOneMillion: PropTypes.number.isRequired,
  tests: PropTypes.number.isRequired,
  testsPerOneMillion: PropTypes.number.isRequired,
  updated: PropTypes.string.isRequired,
};

export default CovidList;
