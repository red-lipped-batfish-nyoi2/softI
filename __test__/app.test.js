import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import Login from '../client/components/Login.jsx';
import App from '../client/App.jsx'
import {renderWithProviders} from '../testing-utils/renderWithProviders'

describe('App', () => {
    
    test('App loads', () => {

    renderWithProviders(<App/>)
    
    expect(screen.getByText('Please Log In')).toBeInTheDocument();
    screen.debug();
    // fireEvent.click(screen.getByRole('button', { name: 'Login' }));
    // expect(screen.getByText('Press "Start" to begin interview session.')).toBeInTheDocument();
    })
    
});

 // it('should send a dispatch on click and log us in', () => {
  //   const result = render(<Provider store={store}><Login /></Provider>);
  //   fireEvent(result.getByText('Login'),
  //     new MouseEvent('click')
  //   );
  //   expect(store.isLoggedIn).toEqual(true);
  // })