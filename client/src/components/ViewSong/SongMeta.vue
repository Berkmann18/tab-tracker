<template>
  <v-layout>
    <base-panel title="Song metadata">
      <div class="song-title">
        {{song.title}}
      </div>
      <div class="song-artist">
        {{song.artist}}
      </div>
      <div class="song-genre">
        {{song.genre}}
      </div>
      <a :href="song.youtubeId">YouTube link</a>
    </base-panel>
    <base-panel title="Album">
      <img
        class="album-image"
        :src="song.albumImageUrl"
      />
      <br>
      <span>{{song.album}}</span>
    </base-panel>
  </v-layout>
</template>

<script>
import BasePanel from '@/components/BasePanel'

export default {
  name: 'song-meta',
  components: {
    BasePanel
  },
  props: [
    'song'
  ]
}
</script>

<style scoped lang="scss" src="../../song.scss"></style>
