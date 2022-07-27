import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


const CovidDetails = () => {
 const { item }=  useSelector((state) => state.items);
 
    return (
        <div className="detail-container">
            {item.map(({ id, country, flag, cases, deaths, population, 
            continent, casesPerOneMillion, deathsPerOneMillion, tests, 
            todayCases, todayDeaths, active, recovered, critical, updated, 
            testsPerOneMillion, }) => (
                <div key={id}>
                    <div className="detail-item">
                        <div className="detail-item-left">
                            <img src={flag} alt={country} />
                        </div>
                        <div className="detail-item-right">
                            <div className="detail-item-right-top">
                                <div className="detail-item-right-top-left">
                                    <h2>{country}</h2>
                                    <p>{continent}</p>
                                </div>
                                <div className="detail-item-right-top-right">
                                    <p>{cases}</p>

                                    <p>{todayCases}</p>
                                </div>
                            </div>
                            <div className="detail-item-right-bottom">
                                <div className="detail-item-right-bottom-left">
                                    <p>{deaths}</p>
                                    <p>{todayDeaths}</p>

                                </div>
                                <div className="detail-item-right-bottom-right">
                                    <p>{recovered}</p>
                                    <p>{active}</p>
                                    <p>{critical}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="detail-item-bottom">
                        <div className="detail-item-bottom-left">
                            <p>{population}</p>
                            <p>{continent}</p>
                        </div>
                        <div className="detail-item-bottom-right">
                            <p>{casesPerOneMillion}</p>
                            <p>{deathsPerOneMillion}</p>
                            <p>{tests}</p>
                            <p>{testsPerOneMillion}</p>
                        </div>
                    </div>
                </div>
            ))};
            <div className="showcase"></div>
        </div>
    );
};

export default CovidDetails;