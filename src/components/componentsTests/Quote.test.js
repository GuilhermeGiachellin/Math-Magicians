import React from 'react';
import { render } from '@testing-library/react';
import Quote from '../Quote.js';

it('Quote rendering', () => {
  const { queryByText } = render(<Quote />);
  expect(queryByText('At last I will devote myself sincerely and without reservation to the general demolition of my opinions. ― Rene Descartes')).toBeTruthy();
});
