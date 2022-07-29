import React, { useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { fetchCovidData } from '../redux/covidslice/covidSlice';
import './DetailPage.css';

const DetailPage = () => {
  const { countryName } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCovidData());
  }, [dispatch]);

  const { items } = useSelector((state) => state.items);

  return (
    <div>
      {items.map((country) => (
        <div key={country.id}>
          {country.country === countryName && (
            <div key={country.id} className="main-card-details-container">
              <div className="back-btn">
                <NavLink to="/"><BsArrowLeftCircle className="back-btn" /></NavLink>
              </div>
              <div className="main-card-body">
                <div className="head">
                  <img className="card-img" src={country.flag} alt={country.country} />
                  <div>
                    <h2 className="card-title color-white">{country.country}</h2>
                    <h4 className="color-white">
                      {country.cases}
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
                      {country.population}
                    </h4>
                  </div>
                  <div className="body-left">
                    <h4 className="description">
                      <span>
                        Cases:
                      </span>
                      {country.cases}
                    </h4>
                  </div>
                  <div className="body-left">
                    <h4 className="description">
                      <span>
                        Deaths:
                      </span>
                      {country.deaths}
                    </h4>
                  </div>
                  <div className="body-left">
                    <h4 className="description">
                      <span>
                        continent:
                      </span>
                      {country.continent}
                    </h4>
                  </div>
                  <div className="body-left">
                    <h4 className="description">
                      <span>
                        active:
                      </span>
                      {country.active}
                    </h4>
                  </div>
                  <div className="body-left">
                    <h4 className="description">
                      <span>
                        today&apos;s Deaths:
                      </span>
                      {country.todayDeaths}
                    </h4>
                  </div>
                  <div className="body-left">
                    <h4 className="description">
                      <span>
                        Tests:
                      </span>
                      {country.tests}
                    </h4>
                  </div>
                  <div>
                    <div className="body-left">
                      <h4 className="description">
                        <span>
                          Recovered:
                        </span>
                        {country.recovered}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DetailPage;
