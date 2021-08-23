import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import Calculator from '../components/Calculator';
import App from '../App';
import Home from '../components/Home';
import Quote from '../components/Quote';

describe('Calculator', () => {
  test('renders App component', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole('button', { name: 2 }));
    // expect(screen.getByDisplayValue("1")).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveValue('2');
    // screen.debug();

    // expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
    // expect(screen.getByText("Welcome to our page!")).toBeInTheDocument();
  });
});

it('renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

// import Home from "../components/Home";

// describe("Home", () => {
//   test("renders App component", () => {
//     render(<Home />);

//     // screen.debug();

//     expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
//     // expect(screen.getByText("Welcome to our page!")).toBeInTheDocument();
//   });
// });
