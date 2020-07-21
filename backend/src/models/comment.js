import mongoose, { Schema } from 'mongoose';

const commentSchema = new Schema(
  {
    text: {
      type: String,
      required: 'Text is required',
    },
  },
  {
    timestamps: true,
  },
);

const model = mongoose.model('Comment', commentSchema);
export default model;
