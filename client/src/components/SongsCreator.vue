<template>
  <v-layout>
    <v-flex xs12>
      <base-panel title="Song metadata">
        <form name="create">
          <v-text-field
            label="Title"
            v-model="song.title"
          ></v-text-field>
          <v-text-field
            label="Artist"
            v-model="song.artist"
          ></v-text-field>
          <v-text-field
            label="Album"
            v-model="song.album"
          ></v-text-field>
          <v-text-field
            label="Genre"
            v-model="song.genre"
          ></v-text-field>
          <v-text-field
            label="Album image URL"
            v-model="song.albumImageUrl"
          ></v-text-field>
          <v-text-field
            label="YouTube ID"
            v-model="song.youtubeId"
          ></v-text-field>
        </form>
      </base-panel>
    </v-flex>
    <v-flex xs12>
      <base-panel
        title="Song details"
        class="ml-2"
      >
        <v-textarea
          label="Lyrics"
          v-model="lyrics"
        ></v-textarea>
        <v-textarea
          label="Tab"
          v-model="tab"
        ></v-textarea>

      </base-panel>
      <v-btn
        dark
        class="cyan"
        @click="create">
        Create song
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import BasePanel from '@/components/BasePanel'
import SongsService from '@/services/SongsService'

export default {
  name: 'song-creator',
  components: {
    BasePanel
  },
  data () {
    return {
      song: {
        title: null,
        artist: null,
        album: null,
        genre: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    }
  },
  methods: {
    async create () {
      // Call API
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.error('Song failed to be created')
      }
    }
  }
}
</script>

<style scoped>

</style>
