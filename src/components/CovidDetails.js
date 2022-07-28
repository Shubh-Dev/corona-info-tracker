import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCovidData } from '../redux/covidslice/covidSlice';
import CardDetail from './CardDetail';

const CovidDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCovidData());
  }, []);

  const { items } = useSelector((state) => state.items);

  return (
    <div className="detail-container">
      {items.map(({
        id, country, flag, population, cases, deaths, continent,
        todaysCases, todayDeaths, tests, updated, active, recovered,
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
          active={active}
          recovered={recovered}
        />
      ))}
    </div>
  );
};

export default CovidDetails;
