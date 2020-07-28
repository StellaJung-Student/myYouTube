import mongoose, { Schema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const userSchema = new Schema({
  name: String,
  email: String,
  avatarUrl: String,
});

userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

const model = mongoose.model('User', userSchema);

export default model;
