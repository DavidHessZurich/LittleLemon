import { fireEvent, render, screen } from '@testing-library/react';
import Reservation from './Reservation';
import {initializeTimes, updateTimes} from './Main';

test('renders the Reservation heading', () => {
    render(<Reservation availableTimes={[]} updateTimes={()=>[]} />);
    const headingElement = screen.getByText("RESERVE A TABLE");
    expect(headingElement).toBeInTheDocument();
})

test('initializeTimes', () => {
  const test = initializeTimes()
  expect(test.length).toBeGreaterThan(0);
})

test('updateTimes', () => {
  const test = updateTimes('', new Date());
  expect(test.length).toBeGreaterThan(0);
})

test('form validation', () => {
  render(<Reservation availableTimes={["17:00"]} updateTimes={()=>["17:00"]} />);
  expect(screen.getByDisplayValue("Make your reservation").hasAttribute('disabled')).toBe(true);
  fireEvent.change(screen.getByLabelText("Number of guests"), {
    target: { value: 5 },
  })
  expect(screen.getByLabelText("Number of guests").getAttribute('value')).toBe("5");
  expect(screen.getByDisplayValue("Make your reservation").hasAttribute('disabled')).toBe(true);
  fireEvent.change(screen.getByLabelText("Choose time"), {
    target: { value: "17:00" },
  })
  expect(screen.getByDisplayValue("Make your reservation").hasAttribute('disabled')).toBe(true);
  fireEvent.change(screen.getByLabelText("Occasion"), {
    target: { value: "birthday" },
  })
  expect(screen.getByDisplayValue("Make your reservation").hasAttribute('disabled')).toBe(false);
})
