const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  comment: {
    type: String,
  },
  commentLike: {
    type: Number,
  },
});

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    imgae: {
      type: String,
    },
    auther: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    likes: [
      {
        like: {
          type: Number,
          default: 0,
        },
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
    comments: {
      type: [commentSchema],
    },
  },
  { timestamps: true }
);
export const Post = mongoose.model("Post", postSchema);
