import React from 'react';
import { Routes, Route, Navigate  } from 'react-router-dom'

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import './App.css';

class App extends React.Component {

  unsubscribeFormAuth = null

  componentDidMount() {

      const {setCurrentUser} = this.props

      this.unsubscribeFormAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth)

          userRef.onSnapshot( snapShot => {
            this.setState(
              {
                setCurrentUser: 
                {
                  id: snapShot.id,
                  ...snapShot.data()
                }
              })
          })

          setCurrentUser({userAuth})
        }
      })
    
  }

  componentWillUnmount(){
    this.unsubscribeFormAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route path='/shop' element={<ShopPage/>}/>
          <Route exact path='/checkout' element={<CheckoutPage/>}/>
          <Route exact path='/signin' element={ 

            this.props.currentUser ? (<Navigate to='/'/>) :  
            <SignInAndSignUpPage/>
 
          }/>
            
        </Routes>
      </div>
      
    );
  }
}

const mapStateToProps =  createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
