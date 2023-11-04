import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

test('renders calculate occupancy link', () => {
  render(<App />);
  const linkElement = screen.getByText('Calculate Occupancy');
  expect(linkElement).toBeInTheDocument();
});

test('renders premium rooms label', () => {
  render(<App />);
  const labelElement = screen.getByText('Premium Rooms:');
  expect(labelElement).toBeInTheDocument();
});

test('renders economy rooms label', () => {
  render(<App />);
  const labelElement = screen.getByText('Economy Rooms:');
  expect(labelElement).toBeInTheDocument();
});

test('renders default input values', () => {
  render(<App />);
  const inputElements = screen.getAllByRole('spinbutton');
  expect(inputElements[0]).toHaveValue(0);
  expect(inputElements[1]).toHaveValue(0);
});
