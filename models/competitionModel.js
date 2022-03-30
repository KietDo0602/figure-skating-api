const mongoose = require('mongoose');

const competitionModel = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  type:  String,
  country: String,
  season: String,
  host: String,
  venue: String,
  skaters: [{ type: Schema.Types.ObjectId, ref: 'skater'}],
  men_single: [{skater: { type: Schema.Types.ObjectId, ref: 'skater'}, total_points: Number, short_program: Number, long_program: Number}],
  women_single: [{skater: { type: Schema.Types.ObjectId, ref: 'skater'}, total_points: Number, short_program: Number, long_program: Number}],
  ice_dance: [{skater: { type: Schema.Types.ObjectId, ref: 'skater'}, total_points: Number, short_program: Number, long_program: Number}],
  pairs: [{skater: { type: Schema.Types.ObjectId, ref: 'skater'}, total_points: Number, short_program: Number, long_program: Number}],
});

module.exports = mongoose.model("competition", competitionModel);
