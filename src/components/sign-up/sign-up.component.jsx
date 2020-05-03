import React, { Component } from  'react';
import  CustomButton  from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {createUserProfileDocument, auths} from '../../firebase/firebase.util';
 import './sign-up.component.scss';

export default class Signup extends Component{
   
   constructor(){

    super();
    this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''

    }
   } 
    handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };

  
   handleSubmit= async event =>{
       debugger;
       event.preventDefault();
    const{displayName,email,password,confirmPassword}=this.state;
        if (password!== confirmPassword)
        {
            alert("Password and confirm password does not match");
            return;
        }
        else{
            try {
                    const {user}=await auths.createUserWithEmailAndPassword(email,password);
                     
                    debugger;
                    const s=  await createUserProfileDocument(user,{displayName});
                    console.log(s);
                    
                    this.setState({
                        displayName:'',
                        email:'',
                        password:'',
                        confirmPassword:'' });
                }
                catch(error)
                {
                    console.error("error:"+error);
                }

        }

   }
    render(){
        return (
            <div className='sign-up'>
                 
              <span className='title'>Sign UP with your email and password</span>
              <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput 
                type='text'
                onChange={this.handleChange}
                name="displayName"
                value={this.state.displayName}
                label="Display Name"
                />
                <FormInput 
                type='text'
                onChange={this.handleChange}
                name="email"
                value={this.state.email}
                label="Email"
                /> 
                <FormInput 
                type='password'
                onChange={this.handleChange}
                name="password"
                value={this.state.password}
                label="Password"
                /> 
                <FormInput 
                type='password'
                onChange={this.handleChange}
                name="confirmPassword"
                value={this.state.confirmPassword}
                label="Confirm Password"
                /> 
                <CustomButton type="Submit">Sign Up</CustomButton>
              </form>
            </div>

        );
    }


}