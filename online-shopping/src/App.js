import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/signInAndUp.component'
import Header from './components/header/header.component'
import {auth, createUserProfileDoc} from './firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.action'


class App extends React.Component{

  unsubscribeFromAuth = null

  componentDidMount(){
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if(userAuth) {
        const userRef = await createUserProfileDoc(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
           
              id: snapShot.id,
              ...snapShot.data()
          })
        })
        
      }else {
        setCurrentUser(userAuth)
      }
    }) // in auth library 
    
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path = '/' component = {HomePage} />
          <Route path = '/shop' component = {ShopPage} />
          <Route exact path = '/signin' render = {() => this.props.currentUser ? (<Redirect to = '/' />) : (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }
  // No matter what header will always render
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
