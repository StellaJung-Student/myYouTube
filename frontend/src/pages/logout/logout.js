const Logout = ({ setAuth }) => {
  fetch('http://localhost:5000/logout')
    .then(res => res.json())
    .then(res => {
      console.log(res);
      if (res.status === 'ok') {
        setAuth(false);
      }
    });
  return null;
};

export default Logout;
