<script setup lang="ts">
import { Login } from '../models/session';
    function login()
    {
        Login('Chandra Sekhar', 'mcs')
    }
</script>

<template>
    <div class="section">
        <h1 class="title">Login Page</h1>

        <button class="button is-primary" @click="login">
            <span class="icon">
                <i class="fa fa-sign-in"></i>
            </span>
            <span>Login</span>
        </button>
    </div>
</template>


<style scoped>
</style>