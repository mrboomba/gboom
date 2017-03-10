var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    name: {
      type: String
    },
    score: {
      type: Number,
      default: 0
    }
});
  module.exports = mongoose.model('AvailableProducts', schema);
