export const postJoin = (req, res) => {
  const {
    body: { name, email, password, passwordCheck },
  } = req;
  if (password !== passwordCheck) {
    res.status(400).json({
      status: 'error',
      data: {
        pageTitle: 'Sign Up',
      },
      error: 'Bad Request',
    });
  } else {
    res.json({
      status: 'ok',
      data: {
        pageTitle: 'Sign up',
        user: {
          name,
          email,
        },
      },
      error: '',
    });
  }
};
export const login = (req, res) => res.send('Login');
export const logout = (req, res) => res.send('Logout');
export const users = (req, res) => res.send('Users');
export const userDetail = (req, res) => res.send('User Detail');
export const editProfile = (req, res) => res.send('Edit Profile');
export const changePassward = (req, res) => res.send('Change Password');
