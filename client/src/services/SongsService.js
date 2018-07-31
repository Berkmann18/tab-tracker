'use strict'

import Api from '@/services/Api'

export default {
  async index (search) {
    return search !== '' ? Api().get('songs', {
      params: {
        search
      }
    }) : Api().get('songs')
  },
  async post (song) {
    return Api().post('songs', song)
  },
  async show (id) {
    return Api().get(`/songs/${id}`)
  },
  async put (song) {
    return Api().put(`/songs/${song.id}`, song)
  }
}
