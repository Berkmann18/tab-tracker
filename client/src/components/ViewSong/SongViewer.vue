<template>
  <v-layout>
    <v-flex xs6 mt-5>
      <song-meta :song="song" />
      <v-btn
        dark
        class="cyan"
        :to="`/songs/${song.id}/edit`"
      >
        Edit
      </v-btn>
    </v-flex>

    <v-flex xs6 mt-5>
      <base-panel title="Tabs">
        <pre>
        {{song.tab}}
        </pre>
      </base-panel>
      <base-panel title="Lyrics">
        <pre style="overflow: scroll">
        {{song.lyrics}}
        </pre>
      </base-panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import BasePanel from '@/components/BasePanel'
import SongMeta from '@/components/ViewSong/SongMeta'

export default {
  name: 'song-viewer',
  data () {
    return {
      song: {}
    }
  },
  components: {
    BasePanel,
    SongMeta
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  }
}
</script>

<style scoped>

</style>
