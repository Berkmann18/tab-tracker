<template>
  <v-layout>
    <v-flex xs6 offset-xs3 mt-5>
      <base-panel title="Search">
        <v-text-field
          label="Search by song title, artist, album or genre"
          v-model="search"
        ></v-text-field>
      </base-panel>
      <v-btn
        slot="action"
        fab
        light
        absolute

        middle
        class="cyan accent-2"
        to="/songs/create"
      >
        <v-icon>add</v-icon>
      </v-btn>
      <base-panel title="Songs">
        <div
          v-for="song in songs"
          :key="song.id"
          class="song"
        >
          <v-layout>
            <v-flex xs6>
              <div class="song-title">
                {{song.title}}
              </div>
              <div class="song-artist">
                {{song.artist}}
              </div>
              <div class="song-genre">
                {{song.genre}}
              </div>
              <v-btn
                dark
                class="cyan"
                :to="`/songs/${song.id}`"
              >
                View
              </v-btn>
            </v-flex>
            <v-flex xs6>
              <img
                class="album-image"
                :src="song.albumImageUrl"
              />
            </v-flex>
          </v-layout>
        </div>
      </base-panel>
    </v-flex>
  </v-layout>
</template>

<script>
import BasePanel from '@/components/BasePanel'
import SongsService from '@/services/SongsService'
import _ from 'lodash'

export default {
  name: 'songs',
  components: {
    BasePanel
  },
  data () {
    return {
      songs: null,
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 500),
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.search = value
        this.songs = (await SongsService.index(value)).data
      }
    }
  },
  mounted () {
    // Request BE for songs
    // this.songs = (await SongsService.index()).data
    SongsService.index()
      .then(songs => {
        this.songs = songs.data
      })
      .catch(err => console.error('Mounting error:', err))
  }
}
</script>

<style lang="scss" src="../song.scss"></style>
