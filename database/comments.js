const db = require('./index.js');
const faker = require('faker');

const getComments = (recipeID) => {
  return new Promise((resolve, reject) => {
    db.Comments.find({ id: recipeID })
      .then((results) => { resolve(results); })
      .catch((err) => { reject(err); });
  });
};

const postComments = (recipeID, text) => {
  return new Promise((resolve, reject) => {
    db.Comments.update(
      { id: recipeID },
      { $push: {
        comments: {
          commentsText: text,
          fullName: 'David Cheng',
          created_At: new Date(),
          userImage: 'https://avatars3.githubusercontent.com/u/33105110?s=400&u=473e3ba3a54d0fbef2b048a54d7810b5629356ea&v=4',
          city: 'San Francisco',
          state: 'California',
        },
      } },
    )
      .then((results) => { resolve(results); })
      .catch((err) => { reject(err); });
  });
};

module.exports.getComments = getComments;
module.exports.postComments = postComments;
