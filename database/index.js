const mongoose = require('mongoose');
// const mongoUri = 'mongodb://localhost/davidcheng1290';
const mongoUri = 'mongodb://172.17.0.2/davidcheng1290';
const db = mongoose.connect(mongoUri);
mongoose.Promise = global.Promise;

const commentSection = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  recipeName: String,
  comments: [
    {
      commentsText: String,
      fullName: String,
      created_At: String,
      userImage: String,
      city: String,
      state: String,
    }
  ],
});

const Comments = mongoose.model('recipe', commentSection);

module.exports.Comments = Comments;
