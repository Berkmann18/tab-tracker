<template>
    <v-layout>
        <v-flex xs6 offset-xs3>
            <div class="white elevation-2">
                <v-toolbar flat dense
                           class="cyan"
                           dark>
                    <v-toolbar-title>Login</v-toolbar-title>
                </v-toolbar>
                <div class="pl-4 pr-4 pr-2 pb-2">
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
                        <br />

                        <div
                                v-html="error"
                                class="white--text"
                        ></div>
                        <v-btn
                                class="cyan"
                                @click="login"
                                dark
                        >
                            Login
                        </v-btn>
                    </form>
                </div>
            </div>
        </v-flex>
    </v-layout>
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
