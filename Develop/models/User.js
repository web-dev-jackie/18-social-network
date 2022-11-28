const { Schema, model } = require('mongoose');
const userSchema = require('./User');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
username: {
      type: String,
      required: true,
      max_length: 50,
    },
   email: {
      type: String,
      required: true,
      max_length: 50,
    },
   thoughts: {
      type: String,
      required: true,
      max_length: 50,
    },
    friends: [assignmentSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;
