import React, { useState } from 'react';
import SocialLogin from '../socialLogin/socialLogin';
import PropTypes from 'prop-types';

const Join = ({ setAuth }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'passwordCheck':
        setPasswordCheck(value);
        break;
      default:
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ name, email, password, passwordCheck });
    const user = { name, email, password, passwordCheck };
    fetch('http://localhost:5000/join', {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => {
        console.log('from back data:', res);
        if (res.status === 'ok') {
          setAuth(true);
        }
      });
  };

  return (
    <div className="form_container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="passwordCheck"
          placeholder="Match Password"
          value={passwordCheck}
          onChange={handleChange}
        />
        <input type="submit" value="Join Now" />
        <SocialLogin />
      </form>
    </div>
  );
};

Join.propTypes = {
  setAuth: PropTypes.func.isRequired,
};
export default Join;
