import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import {connect} from 'react-redux';
import './header.styles.scss'; 
import { auths } from '../../firebase/firebase.util';

const Header = ({currentUser}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser?
      <div className='option' onClick={()=>auths.signOut()}>Welcome {currentUser.displayName} Sign Out</div>
      : <Link className='option' to='/signin'>
        SignIn
      </Link>}
    </div>
  </div>
);


const mapStateteProp=state=>({
currentUser:state.user.currentUser
});
export default connect(mapStateteProp)(Header);
