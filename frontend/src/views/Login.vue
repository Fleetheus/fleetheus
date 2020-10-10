<template>
    <div class="body">
        <div class="container">
            <div class="title">
                <h2>Hello fleet admiral!</h2>
                <div class="soldier-icon"></div>
            </div>
            <div class="form" ref="loginForm">
                <vs-input
                    label="Username"
                    v-model="username"
                />
                 <vs-input
                    label="Password"
                    type="password"
                    v-model="password"
                />
                <vs-button class="login-button"
                    gradient
                    @click="loginClick"
                >
                    Login
                </vs-button>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

import plugins from '../../plugins'

export default Vue.extend({
  data () {
    return {
      username: '',
      password: '',
      loading: null
    }
  },
  methods: {
    ...mapActions('users', [
      'login'
    ]),
    loginClick () {
      // post username password
      const loading = this.$vs.loading({
        target: this.$refs.loginForm,
        color: 'dark',
        type: 'corners'
      })
      this.login({ username: this.username, password: this.password })
        .then(() => {
          loading.close()
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
})
</script>

<style lang="scss" scoped>
    .body{
        display: flex;
        justify-content: center;
        align-items: center;
        height:100%;
    }
    .container{
        width: 350px;
        height: 600px;
        box-shadow: 0 4px 25px 0 rgba(0,0,0,.1);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
    }
    .title{
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        padding: 20px;
        background-color: white;
        font-weight: 100;
        color:rgba(0,0,0,.5)
    }
    .soldier-icon{
        height:250px;
        background-image: url("../assets/soldier.png");
        background-repeat: no-repeat;
        background-position-x: center;
    }
    .form{
        height:100%;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;
        .login-button{
            width:200px;
        }
    }
</style>
