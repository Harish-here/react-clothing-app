import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import HomePage from './page/homepage.component'
import ShopPage from './page/shop/shoppage.component'
import Header from './components/header/header.component'
import SignInSignUpPage from './page/sign-in-and-sign-up/sign-in-and-sign-up.component'


function App() {
  return (
    <div>
      <Header />
      
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInSignUpPage} />
      </Switch>
     
    </div>
  );
}

export default App;
