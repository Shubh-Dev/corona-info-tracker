import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { generate } from 'randomized-string';
import { fetchCovidData } from '../redux/covidslice/covidSlice';
import Covid from './Covid';
import './CovidList.css';

const CovidList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCovidData());
  }, []);

  const { items } = useSelector((state) => state.items);

  /* eslint-disable */
  return (
    <div className="container">
      <header className="header">
        <h1 className="main-headline">Covid 19 Statistics</h1>
        <input
          className="searchbar"
          type="searchbar"
          placeholder="Search by country name.."
          onChange={(event) => { setSearchTerm(event.target.value); }}
        />
      </header>
      <div className="main-container">
        {items.filter((val) => {
          if (searchTerm === '') {
            return val;
          } if (val.country.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        }).map(({
           country, flag, cases,
        }) => (
          <Covid
            // key={generate()}
            country={country}
            flag={flag}
            cases={cases}
          />
        ))}
      </div>
    </div>
  );
};

export default CovidList;
