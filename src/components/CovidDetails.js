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
          <div className="detail-item">
            <div className="detail-item-left">
              <img src={flag} alt={country} />
            </div>
            <div className="detail-item-right">
              <div className="detail-item-right-top">
                <div className="detail-item-right-top-left">
                  <h2>
                      Country:{country}
                    </h2>
                  <p>
                      Continent:{continent}
                    </p>
                </div>
                <div className="detail-item-right-top-right">
                  <p>
                      Cases:{cases}
                    </p>

                  <p>
                      Today's Case:{todayCases}
                    </p>
                </div>
              </div>
              <div className="detail-item-right-bottom">
                <div className="detail-item-right-bottom-left">
                  <p>
                      Deaths:{deaths}
                    </p>
                  <p>
                      Today's Death:{todayDeaths}
                    </p>

                </div>
                <div className="detail-item-right-bottom-right">
                  <p>
                      Recovered:{recovered}
                    </p>
                  <p>
                      Active Cases:{active}
                    </p>
                  <p>
                      Critical:{critical}
                    </p>
                </div>
              </div>
            </div>
          </div>
          <div className="detail-item-bottom">
            <div className="detail-item-bottom-left">
              <p>
                Population:
{population}
              </p>
              <p>
                Continent:
{continent}
              </p>
            </div>
            <div className="detail-item-bottom-right">
              <p>
                Case Per Million:
{casesPerOneMillion}
              </p>
              <p>
                Death Per Million:
{deathsPerOneMillion}
              </p>
              <p>
                Tests:
{tests}
              </p>
              <p>
                Test Per Million:
{testsPerOneMillion}
              </p>
            </div>
          </div>
        </div>
      ))}
      ;
      <div className="showcase" />
    </div>
  );
};

export default CovidDetails;
