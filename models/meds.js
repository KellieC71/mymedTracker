const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MedsSchema = new Schema({
  Email: { 
    type: String, 
    required: true 
  },
  Meds: { 
    type: Array, 
    required: true 
  }
});

const Meds = mongoose.model("Meds", MedsSchema);

module.exports = Meds;