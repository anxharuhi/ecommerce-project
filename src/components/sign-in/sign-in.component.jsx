import React from 'react';
import FormInput from '../forms/form-input/form-input.component';
import CustomButton from '../forms/custom-button/custom-button.component';
import { signInWithGoogle, signOutWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' })
  }
  
  handleChange = event => {
    const {value, name} = event.target;
    console.log('Value: ' + value + ' Name: ' + name )
    this.setState({ [name]: value})
  }
  
  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form className='form' onSubmit={this.handleSubmit}>
          <FormInput name='email' type='email' value={this.state.email} label='Email' handleChange={this.handleChange} required />
          <FormInput name='password' type='password' value={this.state.password} label='Password' handleChange={this.handleChange} required />
          <div className='loginButtons'>
            <CustomButton type='submit' children='Sign in' onClick={this.handleSubmit}/>
            <CustomButton type='submit' children='Google sign in' onClick={signInWithGoogle}/>
          </div>
          <CustomButton type='submit' children='Sign out' onClick={signOutWithGoogle}/>
        </form>
      </div>
    )
  }
}

export default SignIn;