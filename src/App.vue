<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Footer from './components/Footer.vue'
</script>

<template>
  <div flex="~ col" h-screen text-gray-700 dark:text-gray-200 class="bg-[url(/bg.png)] dark:bg-[url(bg-dark.png)] bg-no-repeat bg-cover bg-center">
    <div flex-grow>
      <router-view />
    </div>
    <Footer flex-grow-0 text-center mb-6 />
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
