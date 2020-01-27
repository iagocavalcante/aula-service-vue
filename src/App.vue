<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Themes />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Themes from './components/Themes.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Themes
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
