import React from 'react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import CovidList from '../components/CovidList';
import store from '../redux/configureStore';

it('CovidList render correctly', () => {
  const Tree = TestRenderer.create(
    <Provider store={store}>
      <CovidList />
    </Provider>,
  );
  expect(Tree).toMatchSnapshot();
});
