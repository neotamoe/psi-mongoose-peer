var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gemSchema = new Schema({
  name: String,
  gem: String,
  est_value: Number,
  rare: Boolean,
  date_collected: Date
});

var Gem = mongoose.model('gems', gemSchema);

module.exports = Gem;
