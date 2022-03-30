const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
    name: String,
    country: String,
    location: String,
    website: String,
    start_date: { type: Date, default: null },
    skaters: [{ type: Schema.Types.ObjectId, ref: 'skater'} ],
})
    
module.exports = mongoose.model("club", clubSchema);
