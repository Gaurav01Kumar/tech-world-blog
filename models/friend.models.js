const mongoose = require("mongoose");
const friendSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    friends: [
      {
        friendId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          default: null,
        },
      },
    ],
  },
  { timestamps: true }
);
export const Friend = mongoose.model("Friend", friendSchema);
