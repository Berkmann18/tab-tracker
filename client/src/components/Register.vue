<template>
  <v-layout>
      <v-flex xs6 offset-xs3>
        <div class="white elevation-2">
            <v-toolbar flat dense class="cyan" dark>
                <v-toolbar-title>Register</v-toolbar-title>
            </v-toolbar>
            <div class="pl-4 pr-4 pr-2 pb-2">
                <form name="registration">
                    <input type="email" name="email" placeholder="Email address"
                           v-model="email" />
                    <br/>
                    <input type="password" name="password"
                           v-model="password" />
                    <br/>

                    <div v-html="error" class="error" />
                    <v-btn class="cyan" @click="register">Register</v-btn>
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
      email: 'a@g.c',
      password: 'fduuf',
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
        console.log('Res', response.data)
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<style scoped lang="scss">
    .error {
        color: red;
    }
</style>
