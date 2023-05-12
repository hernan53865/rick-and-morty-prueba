import { GoogleOAuthProvider } from '@react-oauth/google'
import  {  GoogleLogin  }  from  '@react-oauth/google' ;
import React from 'react'

const Login = () => {
  return (
<GoogleOAuthProvider clientId="425443352071-bp53jnmkrqbhjkri8aekjec6sq15nbpr.apps.googleusercontent.com">


<GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;


</GoogleOAuthProvider>)
}

export default Login
