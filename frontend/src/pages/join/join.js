import React from 'react';
import SocialLogin from '../socialLogin/socialLogin';

const Join = () => (
  <div className="form_container">
    <form action="/join" method="post">
      <input type="text" name="name" placeholder="Full Name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <input
        type="password"
        name="passwordCheck"
        placeholder="Match Password"
      />
      <button type="submit">Join Now</button>
      <SocialLogin />
    </form>
  </div>
);

export default Join;
