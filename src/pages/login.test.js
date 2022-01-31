import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render} from '@testing-library/react';
import initStore from '../../store';
import LoginPage from './login';
require('mutationobserver-shim');

describe('Login Page', () => {
  const store = initStore();
  const history = createMemoryHistory();

  it('Renders correctly', () => {
    const { queryByTestId, queryAllByText } = render(
      <Router history={history}>
        <Provider store={store}>
          <LoginPage />
        </Provider>
      </Router>
    );

    expect(queryByTestId('login-form')).toBeTruthy();
    expect(queryAllByText('Войти')).toBeTruthy();
  })

})
