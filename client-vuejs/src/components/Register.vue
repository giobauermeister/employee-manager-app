<template>
  <div id="register">
    <h3>Register</h3>
    <input type="email" name="email" placeholder="email" v-model="email">
    <input type="password" name="password" placeholder="password" v-model="password">
    <button class="waves-effect waves-light btn light-blue" @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService"
export default {
  name: 'register',
  data () {
    return {
      email: '',
      password: ''  
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }  
  }
}
</script>

