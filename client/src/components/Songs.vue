<template>
  <panel title="Songs">
      <v-btn
        slot="action"
        fab
        light
        absolute
        right
        middle
        class="cyan accent-2"
        to="/songs/create"
      >
        <v-icon>add</v-icon>
      </v-btn>
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
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  name: 'songs',
  components: {
    Panel
  },
  data () {
    return {
      songs: null
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
