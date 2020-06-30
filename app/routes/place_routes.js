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

//index GET places
//test 5efa07c251c0e4d588439462
router.get('/places', (req, res, next) => {
  Place.find()
    .populate('owner')
    .then(places => res.json({places: places}))
    .catch(next)
})

//show GET place
router.get('/places/:id', requireToken, (req, res, next) => {
  Place.findById(req.params.id)
    .populate('owner')
    .then(handle404)
    .then(place => res.json({place: place}))
    .catch(next)
})

//create POST places
router.post('/places', requireToken, (req, res, next) => {
  Place.create(req.body.place)
    .then(place => res.status(201).json({place: place}))
    .catch(next)
})

//update PATCH places
router.patch('/places/:id', requireToken, removeBlanks, (req, res, next) => {
  Place.findById(req.params.id)
    .populate('owner')
    .then(handle404)
    .then(place =>{
      requireOwnership(req, place)
      return place.updateOne(req.body.place)
    })
    .then(res.sendStatus(204))
    .catch(next)
})

//destroy DELETE places
router.delete('/places/:id', requireToken, (req, res, next) => {
  Place.findById(req.params.id)
    .then(handle404)
    .then(place =>{
      requireOwnership(req, place)
      return place.remove()
    })
    .then(res.sendStatus(204))
    .catch(next)
})

module.exports = router
