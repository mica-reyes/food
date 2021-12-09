import './App.css';
import {Route, Switch} from 'react-router-dom';
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import RecipeCreate from './components/Create/Create';
import { useEffect } from "react";
import React from 'react';
import {useDispatch} from 'react-redux';
import {getDiets, getRecipes} from './actions/index';
import { BrowserRouter } from 'react-router-dom';

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
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
