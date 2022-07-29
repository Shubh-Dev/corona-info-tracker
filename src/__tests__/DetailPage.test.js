import React from 'react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import DetailPage from '../components/DetailPage';
import store from '../redux/configureStore';

it('Detailpage renders correctly', () => {
  const Tree = TestRenderer.create(
    <Provider store={store}>
      <DetailPage />
    </Provider>,
  );
  expect(Tree).toMatchSnapshot();
});
