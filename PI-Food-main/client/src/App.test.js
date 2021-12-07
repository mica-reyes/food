import { render, screen } from '@testing-library/react';
import { getDiets } from './actions';
import App from './App';

import reducer from './reducer/index'

/*  test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});  */

describe("reducer", () => {
  it("Deberia retornar el estado inicial", () => {
    expect(reducer(undefined, {})).toEqual({
      recipes:[],
      diets:[],
      filteredRecipes:[],
      loading:false});
  });
})

import {sortName, SORT_NAME, sortScore, SORT_SCORE } from "../src/actions/index";

describe("Action Creators", () => {
  it('Debería retornar una action con las propiedades type SORT_NAME y payload:"A_Z"', () => {
    const payload = 'A_Z';
    expect(sortName(payload)).toEqual({
      type: SORT_NAME,
      payload: 'A_Z'
    });
  });
  it('Debería retornar una action con las propiedades type SORT_SCORE y payload:"100-0"', () => {
    const payload = '100-0';
    expect(sortScore(payload)).toEqual({
      type: SORT_SCORE,
      payload: '100-0'
    });
  });
});


