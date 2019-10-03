const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  github: {
    type: String,
    required: true
  },
  live: {
    type: String,
    required: true
  }
});

module.exports = Card = mongoose.model("card", CardSchema);
