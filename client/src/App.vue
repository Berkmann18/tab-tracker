<template>
  <v-app id="app">
    <page-header />
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <router-view />
        </v-layout>
      </v-container>
    </v-content>
    <!--<v-footer app></v-footer>-->
  </v-app>
</template>

<script>
import PageHeader from '@/components/Header'

export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
