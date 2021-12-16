import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import { firebaseAuth } from './firebase/firebase.utils';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-up/signinandup.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
  
  unsuscribeFromAuth = null

  componentDidMount() {
    this.unsuscribeFromAuth = firebaseAuth.onAuthStateChanged( user => {
      this.setState({ currentUser: user});
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render() {
    return (
        <div>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/signin' component={SignInAndSignUpPage} />
          </Switch>
        </div>
      );
  }
}

export default App;
