import { render, screen } from '@testing-library/react';
import Reservation from './Reservation';
import {initializeTimes, updateTimes} from './Main';

test('Renders the Reservation heading', () => {
    render(<Reservation availableTimes={[]} />);
    const headingElement = screen.getByText("RESERVE A TABLE");
    expect(headingElement).toBeInTheDocument();
})

test('initializeTimes', () => {
  const test = initializeTimes()
  expect(test).toEqual(["x","y"]);
})

test('updateTimes', () => {
  const test = updateTimes()
  expect(test).toEqual(["x","y","z"]);
})
