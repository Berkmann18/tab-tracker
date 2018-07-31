import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs'
import SongCreator from '@/components/SongsCreator'
import ViewSong from '@/components/ViewSong/SongViewer'
import SongEditor from '@/components/SongsEditor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs/create',
      name: 'song-create',
      component: SongCreator
    },
    {
      path: '/songs/:songId',
      name: 'song',
      component: ViewSong
    },
    {
      path: '/songs/:songId/edit',
      name: 'song-edit',
      component: SongEditor
    }
  ]
})
