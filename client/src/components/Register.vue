<template>
  <panel title="Register">
    <form
      name="registration"
      autocomplete="off">
      <!--suppress HtmlUnknownTag -->
      <v-text-field
        label="Email"
        v-model="email"
      ></v-text-field>
      <v-text-field
        label="Password"
        v-model="password"
        type="password"
        autocomplete="new-password"
      ></v-text-field>
      <br/>

      <div
        v-html="error"
        class="red--text"
      ></div>
      <v-btn
        class="cyan"
        @click="register"
        dark
      >
        Register
      </v-btn>
    </form>
  </panel>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
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
          // console.log('Res', response.data)
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
