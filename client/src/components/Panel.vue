<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar
          flat
          dense
          class="cyan"
          dark
        >
          <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pr-2 pb-2">
          <slot>
            No slot content defined
          </slot>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'panel',
  props: ['title']
}
</script>

<style scoped>

</style>
