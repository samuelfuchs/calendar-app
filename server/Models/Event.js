const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  start: Date,
  end: Date,
  title: String,
});

const Event = mongose.model("Event", EventSchema);
module.exports = Event;
