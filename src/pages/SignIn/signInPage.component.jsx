import React from 'react';
import { Route } from 'react-router-dom';

import SignUp from '../../Components/SignUp/signup.component';
import SignIn from '../../Components/SignIn/sign-in.component';

const SignInPage = () => {
  return (
    <div style={{height: '80vh'}}>
      <SignIn />
    </div>
  )
}

export default SignInPage;