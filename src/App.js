import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import HomePage from './page/homepage.component'

const Hats = () => (
  <div>
    HATS
  </div>
)


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/hats' component={Hats} />
      </Switch>
     
    </div>
  );
}

export default App;
