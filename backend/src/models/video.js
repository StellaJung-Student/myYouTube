import mongoose, { Schema, mongo } from 'mongoose';

const videoSchema = new Schema(
  {
    fileUrl: {
      type: String,
      required: 'FIle URL is required',
    },
    title: {
      type: String,
      required: 'Title is required',
    },
    views: {
      type: Number,
      default: 0,
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  },
  {
    timestamps: true,
  },
);

const model = mongoose.model('Video', videoSchema);
export default model;
