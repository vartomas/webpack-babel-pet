const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    socketId: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: 'messages',
  }
);

const Message = mongoose.model('message', MessageSchema);

module.exports = Message;
