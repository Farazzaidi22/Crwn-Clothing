import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  } 

  unsubscribeFormAuth = null

  componentDidMount() {

      this.unsubscribeFormAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth)

          userRef.onSnapshot( snapShot => {
            this.setState(
              {
                currentUser: 
                {
                  id: snapShot.id,
                  ...snapShot.data()
                }
              },
            () => {
              console.log(this.state)
            })
          })

          this.setState({currentUser: userAuth})
        }
      })
    
  }

  componentWillUnmount(){
    this.unsubscribeFormAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route path='/shop' element={<ShopPage/>}/>
          <Route path='/signin' element={<SignInAndSignUpPage/>}></Route>
        </Routes>
      </div>
      
    );
  }
}

export default App;
