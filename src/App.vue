<template>
  <div id="app">
    <test v-on:click.native ="testFunction"></test>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import Test from './Test'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  methods: {
testFunction: function(event){
  console.log('true');
}
  },
  components: {
  Test
  }
}
</script>

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
