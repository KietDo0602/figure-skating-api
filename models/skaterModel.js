const mongoose = require('mongoose');

const skaterSchema = new mongoose.Schema({
  name:  String, // String is shorthand for {type: String}
  gender: {
    type: String,
    enum: ['male', 'female', 'non-binary', 'other', null],
    default: null
  },
  country: String,
  level: {
    type: String,
    enum: ['senior', 'junior', null],
    default: null
  },
  type: [{
    type: String,
    enum: ['men_single', 'women_single', 'pairs', 'ice_dance', null],
    default: null
  }],
  dob: { type: Date , default: null },
  age: { type: Number, min: 0, max: 1000 },
  height: { type: Number, min: 1, max: 1000 },
  profession: String,
  coach: [{type: String}],
  start_date: { type: Date, default: null },
  retired_date: { type: Date, default: null },
  residence: String,
  skating_club: String,
  highest_sp: Number,
  highest_fs: Number,
  competitions: [
    { 
      name: {type: String}, 
      placement: {type: Number, min: 1, max: 1000}
    }
  ],
  medals: [
    { 
      name: {type: String}, 
      medal: {
        type: String,
        enum: ['gold', 'silver', 'bronze'],
        default: 'gold'
      }
    }
  ]
});

module.exports = mongoose.model("skater", skaterSchema);
