'use strict'

const {Song} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let songs = null
      const search = req.body.search
      if (search) {
        song = await Song.findAll({
          where: {
            $or: [
              'title', 'artist', 'genre', 'album'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`,
              }
            }))
          }
        })
      } else {
        song = await Song.findAll({
          limit: 10
        })
      }
      res.send(song)
    } catch (err) {
      res.status(404).send({
        error: 'No songs found.'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(400).send({
        error: 'An error occured trying to create a song.'
      })
    }
  },
  async show (req, res) {
    try {
      const song = await Song.findById(req.params.songId);
      res.send(song)
    } catch (err) {
      res.status(400).send({
        error: 'An error occured trying to show a song.'
      })
    }
  },
  async put (req, res) {
    try {
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(400).send({
        error: 'An error occurred trying to update a song.'
      })
    }
  }
}