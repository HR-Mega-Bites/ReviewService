const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const commentSection = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  recipeName: String,
  comments: [
    { commentsText: String,
      fullName: String,
      created_At: String,
      image: String,
    }
  ],
});

const Comments = mongoose.model('recipe', commentSection);

// getRecipe function
const getRecipe = (recipeName) => {
  return new Promise((resolve, reject) => {
    Comments.find(null, null, {sort: {'created_At': -1}})
      .then((results) => { resolve(results) })
      .catch((err) => { reject(err) })
  });
};


module.exports.Comments = Comments;
module.exports.getRecipe = getRecipe;
