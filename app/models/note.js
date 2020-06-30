const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  health: {
    type: Number,
    required: true,
    max: 10
  },
  work: {
    type: Number,
    required: true,
    max: 10
  },
  play: {
    type: Number,
    required: true,
    max: 10
  },
  love: {
    type: Number,
    required: true,
    max: 10
  }
}, {
  timestamps: true
})

module.exports = noteSchema
