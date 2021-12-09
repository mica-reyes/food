/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
  name: 'Milanea a la napolitana',
  summary: 'carne + pan + huevo'
};

describe('Recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Recipe.sync({ force: true })
  .then(() => Recipe.create(recipe)));
  describe('GET /recipes', () => {
    it('should get 200', () =>
    agent.get('/recipes').expect(200)
    );
  });
});

describe('Diets routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  describe('GET /diets', () => {
    it('should get 200', () =>
    agent.get('/diets').expect(200)
    .expect(function(res) {
      expect(res.body[0].name).equal('gluten free');
    })    
    );
  });
});

