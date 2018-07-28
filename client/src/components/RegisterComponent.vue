<template>
  <div>
   <h1>Register</h1>

    <form name="registration">
      <input type="email" name="email" placeholder="Email address"
        v-model="email" />
      <br/>
      <input type="password" name="password"
        v-model="password" />
      <br/>
      <button @click="register">Register</button>
    </form>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: 'a@g.c',
      password: 'fduuf'
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log('Res', response.data)
      // alert('Res=' + response.data.message);
    }
  }
}
</script>

<style scoped lang="scss">

</style>
