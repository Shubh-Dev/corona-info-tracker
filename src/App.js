import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import CovidList from './components/CovidList';
// import CovidDetails from './components/CovidDetails';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <CovidList />
    </Provider>
  );
}

export default App;
