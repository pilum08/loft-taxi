import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render} from '@testing-library/react';
import RegisterPage from './Registration';

const mockStore = {
  getState: () => ({
    user: {
      isLoggedIn: false,
      loadingSignIn: false,
    },
  }),
  subscribe: () => {},
  dispatch: () => {

  },
}

describe('Register Page', () => {
  it('Renders correctly', () => {
    const { queryByTestId, queryAllByText } = render(
      <BrowserRouter>
        <Provider store={mockStore}>
          <RegisterPage />
        </Provider>
      </BrowserRouter>
    );

    expect(queryByTestId('register-form')).toBeTruthy();
    expect(queryAllByText('Войти')).toBeTruthy();
  })

})