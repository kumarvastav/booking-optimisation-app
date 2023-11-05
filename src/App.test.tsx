import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils';
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

test('premium/economy rooms value can be modified', async() => {

   act(()=>{
       render(<App />);
   })

   const inputElements = screen.getAllByRole('spinbutton');
   act(()=>{
    userEvent.type(inputElements[0], '123')
    userEvent.type(inputElements[1], '99')
    })

    expect(inputElements[0]).toHaveValue(Number('123'))
    expect(inputElements[1]).toHaveValue(Number('99'))
});

test('Validate the usage premium for 3 premium and 3 economy', async() => {
   act(()=>{
    render(<App />);
   })
   const inputElements = screen.getAllByRole('spinbutton');
   act(()=>{
    userEvent.type(inputElements[0], '3')
    userEvent.type(inputElements[1], '3')
    userEvent.click(screen.getByText('Calculate Occupancy'))
   })

    expect(screen.getByText('Usage Premium: 3 (EUR 738)')).toBeInTheDocument();
    expect(screen.getByText('Usage Economy: 3 (EUR 167)')).toBeInTheDocument();
});
