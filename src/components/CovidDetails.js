import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const CovidDetails = () => {
  const { items } = useSelector((state) => state.items);

  return (
    <div className="detail-container">
      {items.map(({
        id, country, flag, cases, deaths, population,
        continent, casesPerOneMillion, deathsPerOneMillion, tests,
        todayCases, todayDeaths, active, recovered, critical, updated,
        testsPerOneMillion,
      }) => (
        <div key={id}>
          <h2>{country}</h2>
         
        </div>
      ))}
      ;
    </div>
  );
};

export default CovidDetails;
