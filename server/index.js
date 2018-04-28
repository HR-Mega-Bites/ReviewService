const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const Comments = require('../database/comments.js');
const bluebird = require('bluebird');
const redis = require('redis');
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);


const app = express();
const client = redis.createClient(6379, '172.17.0.3');

app.use(cors());
app.use(bodyparser.json());
app.use('/recipes/:id', express.static(__dirname + '/../public/dist'));
app.use('/', express.static(__dirname + '/../public/dist'))

app.post('/recipe', (req, res) => {

  res.send('bye');
})


app.get('/recipes/:id/comments', (req, res) => {
  client.getAsync(req.params.id)
    .then((reviews) => {
      if (reviews !== null) {
        res.status(200);
        res.send(reviews);
      } else {
        Comments.getComments(req.params.id)
          .then((recipes) => {
            res.status(200);
            const jsonRecipes = JSON.stringify(recipes);
            res.send(recipes);
            client.set(req.params.id, jsonRecipes);
          })
          .catch((err) => {
            res.status(400);
            res.send('Failed to get comments', err);
          });
      }
    })
    .catch((err) => {
      res.status(400);
      res.send(err);
    });
});

let port = 5000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

