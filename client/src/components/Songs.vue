<template>
  <panel title="Songs">
    <div
      v-for="song in songs"
      :key="song.id"
      >
        {{song.title}} - {{song.artist}} - {{song.album}}
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
      .catch(err => console.error('Mouting error:', err))
  }
}
</script>

<style scoped>

</style>
