import User from '../models/user';
import passport from 'passport';
import { returnNormalJson, returnErrorJson } from '../utils';
import routes from '../routes';

export const postJoin = async (req, res) => {
  const {
    body: { name, email, password, passwordCheck },
  } = req;
  console.log(name, email);
  if (password !== passwordCheck) {
    returnErrorJson(res, { error: 'Password not matched' }, 400);
  } else {
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      const token = user.getToken();
      console.log('tet:', user.token, user);
      returnNormalJson(res, { user: { name, email, token } }, 200);
    } catch (error) {
      console.log(error);
    }
  }
};

export const afterlogin = (req, res) => {
  const { user } = req;
  const { name, email } = user;
  console.log('afterlogin from user data:', name, email, user);
  if (user) {
    // const token = user.getToken();
    // console.log('afterLogin-token:', token);
    returnNormalJson(res, { user: { name, email } }, 200);
  } else {
    returnErrorJson(res, { message: 'no user found' }, 400);
  }
};
export const redirectSuccess = (req, res) => {
  returnNormalJson(res, 'success', 200);
};

export const logout = (req, res) => res.send('Logout');

export const check = (req, res) => {
  let data;

  if (res.locals.isAuthenticated) {
    data = {
      name: req.user.name,
      email: req.user.email,
      isAuthenticated: res.locals.isAuthenticated,
    };
    returnNormalJson(res, data, 200);
  } else {
    data = {
      message: 'Not authorized',
      isAuthenticated: res.locals.isAuthenticated,
    };
    returnErrorJson(res, data, 401);
  }
};
export const users = (req, res) => res.send('Users');
export const userDetail = (req, res) => res.send('User Detail');
export const editProfile = (req, res) => res.send('Edit Profile');
export const changePassward = (req, res) => res.send('Change Password');
