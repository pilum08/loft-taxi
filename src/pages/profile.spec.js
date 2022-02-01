import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render} from '@testing-library/react';
import Profile from './Profile';

const mockStore = {
    getState: () => ({
        
        user:{
            card:{
                cardNumber: 123456,
                expiresInput: '',
                holderInput:'',
                cvcInput: ''
    
            },
            isLoggedIn:true
          },
          
    }),
    subscribe: () => {},
    dispatch: () => {},
  }

  describe('Profile Page', () => {
    it('Renders correctly', () => {
      const { queryByTestId, queryAllByText } = render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <Profile />
          </Provider>
        </BrowserRouter>
      );
  
      expect(queryByTestId('profile-form')).toBeTruthy();
      expect(queryAllByText('Профиль')).toBeTruthy();
    })
  
  })