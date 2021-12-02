import './App.css';
import {Route, Switch} from 'react-router-dom';
import Landing from './components/Landing';
import Home from './components/Home';
import Details from './components/Details';
import RecipeCreate from './components/Create';
import { useEffect } from "react";
import React from 'react';
import {useDispatch} from 'react-redux';
import {getDiets, getRecipes} from './actions/index';

function App() {
  const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(getRecipes())
    },[dispatch])

    useEffect(()=>{
      dispatch(getDiets())
  },[dispatch])

  return (
    <div className="App">
      <Switch> 
        <Route path='/' exact>
          <Landing/>
        </Route>
        <Route path='/create' exact>
          <RecipeCreate/>
        </Route>
        <Route path='/home' exact>
          <Home/>
        </Route>
        <Route path='/details/:id' exact>
          <Details/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
