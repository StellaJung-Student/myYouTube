import React from 'react';

const ChangePassword = () => (
  <div className="form_container">
    <form action="/users/changePassword" method="post">
      <input
        type="password"
        name="currentPassword"
        placeholder="Current Password"
      />
      <input type="password" name="NewPassword" placeholder="New Password" />
      <input
        type="password"
        name="NewPasswordCheck"
        placeholder="Verify New Password"
      />
      <button type="submit">Change Password</button>
    </form>
  </div>
);

export default ChangePassword;
