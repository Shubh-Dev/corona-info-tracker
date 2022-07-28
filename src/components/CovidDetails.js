import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCovidData } from '../redux/covidslice/covidSlice';
import CardDetail from './CardDetail';
import PropTypes from 'prop-types';

const CovidDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCovidData());
  }, []);

  const { items } = useSelector((state) => state.items);

  return (
    <div className="detail-container">
      {items.map(({
        id, country, flag, population, cases, deaths, continent, todaysCases, todayDeaths, tests, updated,
      }) => (
        <CardDetail
          key={id}
          country={country}
          flag={flag}
          population={population}
          cases={cases}
          deaths={deaths}
          continent={continent}
          todaysCases={todaysCases}
          todayDeaths={todayDeaths}
          tests={tests}
          updated={updated}
        />
      ))}
    </div>
  );
};

CovidDetails.propTypes = {
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

export default CovidDetails;
