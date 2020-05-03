import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {auths,createUserProfileDocument} from '../src/firebase/firebase.util';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
 
import {connect} from 'react-redux';
import setCurrentUser from './redux/user/user.action'
class App extends React.Component{



  componentDidMount=()=>{
    const {setCurrentUser}=this.props;
    this.unSubsribe= auths.onAuthStateChanged(async userAuth=>
     {
       console.log(userAuth);
         if (userAuth)
        {  
              const userRef=await  createUserProfileDocument(userAuth)
            
              userRef.onSnapshot(snapshot=>{
              setCurrentUser  ({    id:snapshot.id,
                                  ...snapshot.data() } );
              });
              
        }
        setCurrentUser(userAuth);
     });

  }
  unSubsribe=null;

componentWillUnmount(){

  this.unSubsribe();
}
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
  }

 const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))

 })

export default connect (null,mapDispatchToProps)(App);
