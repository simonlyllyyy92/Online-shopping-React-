import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/signInAndUp.component'
import Header from './components/header/header.component'

function App() {
  // No matter what header will always render
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path = '/' component = {HomePage} />
        <Route path = '/shop' component = {ShopPage} />
        <Route path = '/signin' component = {SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
