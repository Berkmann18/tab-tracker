<template>
  <v-layout>
    <v-flex xs12>
      <base-panel title="Song metadata">
        <form name="create">
          <v-text-field
            label="Title"
            v-model="song.title"
            required
            :rules="[rules.required]"
          ></v-text-field>
          <v-text-field
            label="Artist"
            v-model="song.artist"
            required
            :rules="[rules.required]"
          ></v-text-field>
          <v-text-field
            label="Album"
            v-model="song.album"
            required
            :rules="[rules.required]"
          ></v-text-field>
          <v-text-field
            label="Genre"
            v-model="song.genre"
            required
            :rules="[rules.required]"
          ></v-text-field>
          <v-text-field
            label="Album image URL"
            v-model="song.albumImageUrl"
            required
            :rules="[rules.required]"
          ></v-text-field>
          <v-text-field
            label="YouTube ID"
            v-model="song.youtubeId"
            required
            :rules="[rules.required]"
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
          v-model="song.lyrics"
          required
          :rules="[rules.required]"
        ></v-textarea>
        <v-textarea
          label="Tab"
          v-model="song.tab"
          required
          :rules="[rules.required]"
        ></v-textarea>

      </base-panel>

      <div
        class="error"
        v-if="error"
        style="display: inline-block;"
      >
        {{error}}
      </div>
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
      },
      error: null,
      rules: {
        required: (value) => !!value || 'Required.'
      }
    }
  },
  methods: {
    async create () {
      this.error = null
      const allFieldsFilled = Object.keys(this.song)
        .every(key => !!this.song[key])

      if (!allFieldsFilled) {
        this.error = 'Please fill in all the required fields.'
        return
      }

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

<style scoped lang="scss" src="../song.scss"></style>
