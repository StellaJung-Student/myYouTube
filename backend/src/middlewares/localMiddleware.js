import multer from 'multer';
import routes from '../routes';

const multerVideo = multer({ dest: 'uploads/videos/' });
export const uploadVideo = multerVideo.single('videoFile');

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = 'YouTube';
  res.locals.isAuthenticated = Boolean(req.user);
  res.locals.user = req.user;

  console.log('localMiddleware-req.user:', req.user);
  console.log('local middle-session:', req.session);
  next();
};
