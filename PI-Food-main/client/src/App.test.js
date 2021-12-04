import { render, screen } from '@testing-library/react';
import { getDiets } from './actions';
import App from './App';

import reducer from './reducer/index'

/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

describe("reducer", () => {
  it("Deberia retornar el estado inicial", () => {
    expect(reducer(undefined, {})).toEqual({recipes:[],
      diets:[],
      filteredRecipes:[],
      orderedRecipe:[]});
  });
})


