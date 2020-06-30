const express = require('express')
const passport = require('passport')
const router = express.Router()

const Place = require('../models/place.js')
const customErrors = require('../../lib/custom_errors.js')

//define middleware calls
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership

const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })

//POST new note
router.post('/notes', (req, res, next) => {
  const placeId = req.body.note.place_id
  Place.findById(placeId)
    .then(place => {
      place.notes.push(req.body.note)
      return place.save()
    })
    .then(place => res.status(201).json({place: place}))
    .catch(next)
})

//Update PATCH note
router.patch('/places/:place_id/notes/:id', (req, res, next) => {
  const placeId = req.params.place_id
  Place.findById(placeId)
    .then(handle404)
    .then(place=>{
      place.notes.id(req.params.id).set(req.body.note)
      return place.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

//destroy DELETE note
router.delete('/places/:place_id/notes/:id', (req, res, next) => {
  const placeId = req.params.place_id
  Place.findById(placeId)
    .then(handle404)
    .then(place=>{
      place.notes.id(req.params.id).remove()
      return place.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
