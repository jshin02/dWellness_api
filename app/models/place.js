const mongoose = require('mongoose')
const noteSchema = require('./note')

const placeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  country: {
    type: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  notes:[noteSchema]
}, {
  timestamps: true
})

module.exports = mongoose.model('Place', placeSchema)
