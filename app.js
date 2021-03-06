const express = require('express');
const bodyParser = require('body-parser');

const album = require('./routes/album.route'); // Imports routes for the albums
const app = express();

const mongoose = require('mongoose');

mongoose
  .connect(
    "mongodb+srv://berke:berke@articles-pbtu0.mongodb.net/led?retryWrites=true"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.log("Connection failed!");
    console.log(error);
  });

mongoose.set('useFindAndModify', false);

app.get('', (req, res) => {
  res.send('Welcome to Bucketheadland')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/albums', album);


var port = Number(process.env.PORT || 80);

app.listen(port, () => {
  console.log('Server is up and running on port number ' + port);
});