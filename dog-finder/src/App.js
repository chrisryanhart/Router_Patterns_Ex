import React, {useState} from 'react';
import './App.css';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import DogList from './DogList.js'
import NavBar from './NavBar';
import FilterDogDetails from './FilterDogDetails';


function App({dogs}) {


  return (
    <BrowserRouter>
        <NavBar dogs={dogs} />
        <Switch>
          <Route exact path="/dogs" >
            <DogList dogs={dogs}/> 
          </Route>
          <Route path="/dogs/:name" >
            <FilterDogDetails dogs={dogs}/> 
          </Route>
          <Redirect to="/dogs" />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
