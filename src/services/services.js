import http from './http';

const getCovidData = () => http.get('/countries');

export default getCovidData;
