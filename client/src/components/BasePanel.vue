<!-- Find a way to link/connect that to Panel.vue so you DRY -->
<template>
  <div class="white elevation-2">
    <v-toolbar
      flat
      dense
      class="cyan"
      dark
    >
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>
    <div class="pl-4 pr-4 pt-2 pb-2">
      <slot>
        No slot content defined.
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'base-panel',
  props: ['title']
}
</script>

<style scoped>
</style>
