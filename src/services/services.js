import http from "./http";

const getCovidData = () => http.get('/cases');