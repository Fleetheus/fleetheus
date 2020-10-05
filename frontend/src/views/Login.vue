<template>
    <div class="body">
        <div class="container">
            <div class="title"><h2>Fleet admiral login</h2></div>
            <div class="form">
                <vs-input
                    label="Name"
                    v-model="value"
                    placeholder="Evan You"
                />
                 <vs-input
                    label="Name"
                    type="password"
                    v-model="value"
                    placeholder="Evan You"
                />
                <vs-button class="login-button"
                    gradient
                    :active="active == 1"
                    @click="active = 1"
                >
                    Login
                </vs-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

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
        height: 400px;
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
