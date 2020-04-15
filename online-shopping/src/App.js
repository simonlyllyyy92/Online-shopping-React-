import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/signInAndUp.component'
import Header from './components/header/header.component'
import {auth, createUserProfileDoc} from './firebase/firebase.utils'


class App extends React.Component{

  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if(userAuth) {
        const userRef = await createUserProfileDoc(userAuth)
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }else {
        this.setState({currentUser:userAuth})
      }
    }) // in auth library 
    
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path = '/' component = {HomePage} />
          <Route path = '/shop' component = {ShopPage} />
          <Route path = '/signin' component = {SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
  // No matter what header will always render
}

export default App;
