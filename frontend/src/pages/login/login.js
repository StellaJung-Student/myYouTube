import React from 'react';
import SocialLogin from '../socialLogin/socialLogin';

const Login = () => (
  <div className="form_container">
    <form action="/login" method="post">
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />

      <input type="submit" value="Sign In" />
      <SocialLogin />
    </form>
  </div>
);

export default Login;
