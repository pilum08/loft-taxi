import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render} from '@testing-library/react';
import LoginPage from './login';

const mockStore = {
  getState: () => ({
    user: {
      isLoggedIn: false,
      loadingSignIn: false,
      errorSignIn: false,
    },
  }),
  subscribe: () => {},
  dispatch: () => {

  },
}

describe('Login Page', () => {
  it('Renders correctly', () => {
    const { queryByTestId, queryAllByText } = render(
      <BrowserRouter>
        <Provider store={mockStore}>
          <LoginPage />
        </Provider>
      </BrowserRouter>
    );

    expect(queryByTestId('login-form')).toBeTruthy();
    expect(queryAllByText('Войти')).toBeTruthy();
  })

})
