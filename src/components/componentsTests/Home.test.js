import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Home.js';

it('Home rendering', () => {
  const { queryByText } = render(<Home />);
  expect(queryByText('Welcome to our page!')).toBeTruthy();
});

