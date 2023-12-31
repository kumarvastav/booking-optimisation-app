import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils';
import App from './App';

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

test('Validate the usage premium for 7 premium and 5 economy', async() => {
   act(()=>{
    render(<App />);
   })
   const inputElements = screen.getAllByRole('spinbutton');
   act(()=>{
    userEvent.type(inputElements[0], '7')
    userEvent.type(inputElements[1], '5')
    userEvent.click(screen.getByText('Calculate Occupancy'))
   })

    expect(screen.getByText('Usage Premium: 7 (EUR 1153)')).toBeInTheDocument();
    expect(screen.getByText('Usage Economy: 3 (EUR 90)')).toBeInTheDocument();
});

test('Validate the usage premium for 2 premium and 7 economy', async() => {
   act(()=>{
    render(<App />);
   })
   const inputElements = screen.getAllByRole('spinbutton');
   act(()=>{
    userEvent.type(inputElements[0], '2')
    userEvent.type(inputElements[1], '7')
    userEvent.click(screen.getByText('Calculate Occupancy'))
   })

    expect(screen.getByText('Usage Premium: 2 (EUR 583)')).toBeInTheDocument();
    expect(screen.getByText('Usage Economy: 4 (EUR 189)')).toBeInTheDocument();
});

test('Validate the usage premium for 7 premium and 1 economy', async() => {
   act(()=>{
    render(<App />);
   })
   const inputElements = screen.getAllByRole('spinbutton');
   act(()=>{
    userEvent.type(inputElements[0], '7')
    userEvent.type(inputElements[1], '1')
    userEvent.click(screen.getByText('Calculate Occupancy'))
   })

    expect(screen.getByText('Usage Premium: 7 (EUR 1153)')).toBeInTheDocument();
    expect(screen.getByText('Usage Economy: 1 (EUR 45)')).toBeInTheDocument();
});


//Additional tests
test('Validate the usage premium for 0 premium and 0 economy', async() => {
   act(()=>{
    render(<App />);
   })
   const inputElements = screen.getAllByRole('spinbutton');
   act(()=>{
    userEvent.type(inputElements[0], '0')
    userEvent.type(inputElements[1], '0')
    userEvent.click(screen.getByText('Calculate Occupancy'))
   })

    expect(screen.getByText('Usage Premium: 0 (EUR 0)')).toBeInTheDocument();
    expect(screen.getByText('Usage Economy: 0 (EUR 0)')).toBeInTheDocument();
});

test('Validate the usage premium for 10 premium and 0 economy', async() => {
   act(()=>{
    render(<App />);
   })
   const inputElements = screen.getAllByRole('spinbutton');
   act(()=>{
    userEvent.type(inputElements[0], '10')
    userEvent.type(inputElements[1], '0')
    userEvent.click(screen.getByText('Calculate Occupancy'))
   })

    expect(screen.getByText('Usage Premium: 7 (EUR 1153)')).toBeInTheDocument();
    expect(screen.getByText('Usage Economy: 0 (EUR 0)')).toBeInTheDocument();
});

test('Validate the usage premium for 0 premium and 10 economy', async() => {
   act(()=>{
    render(<App />);
   })
   const inputElements = screen.getAllByRole('spinbutton');
   act(()=>{
    userEvent.type(inputElements[0], '0')
    userEvent.type(inputElements[1], '10')
    userEvent.click(screen.getByText('Calculate Occupancy'))
   })

    expect(screen.getByText('Usage Premium: 0 (EUR 0)')).toBeInTheDocument();
    expect(screen.getByText('Usage Economy: 4 (EUR 189)')).toBeInTheDocument();
});