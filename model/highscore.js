var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    name: {
      type: String
    },
    score: {
      type: Number
    }
});
  module.exports = mongoose.model('Highscore', schema);
