const mongoose = require('mongoose');

const pairSchema = new mongoose.Schema({
    pid: String,
    skater1: { type: mongoose.Schema.Types.ObjectId, ref: 'skater'} ,
    skater2: { type: mongoose.Schema.Types.ObjectId, ref: 'skater'}
})

module.exports = mongoose.model("pair", pairSchema);
