<template>
  <panel title="Login">
    <form name="registration">
      <v-text-field
        label="Email"
        v-model="email"
      ></v-text-field>
      <v-text-field
        label="Password"
        v-model="password"
        type="password"
      ></v-text-field>
      <br/>

      <div
        v-html="error"
        class="white--text"
      ></div>
      <!--suppress HtmlUnknownTag -->
      <v-btn
        class="cyan"
        @click="login"
        dark
      >
        Login
      </v-btn>
    </form>
  </panel>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.error = null

        const fail = (err) => console.error('Login error:', err)

        // Call the setToken() action
        this.$store.dispatch('setToken', response.data.token)
          .catch(fail)
        this.$store.dispatch('setUser', response.data.user)
          .catch(fail)
          // console.log('data', response.data)
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
