import React from 'react';
import firebase from '../../firebase/firebase.util' 
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.util';
import './sign-in.styles.scss';
 

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
      const {email,password}=this.state;
      await  firebase.auth().signInWithEmailAndPassword(email,password);
      
      
      this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <CustomButton type='submit' onClick={this.handleSubmit}> Sign in </CustomButton>
          <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignin> Sign in with Google </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
