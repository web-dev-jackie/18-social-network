const { Schema, model } = require('mongoose');
const userSchema = require('./User');

// Schema to create Thought model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // match: ask tutor
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
    ],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    ],
  },
  {
    toJSON: {
      getters: true,
    }
  }

);

const User = model('user', userSchema);

module.exports = User;
