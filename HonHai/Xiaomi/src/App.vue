<template>
  <div id="app">
    123
  </div>
</template>

<script>
import storage from './storage/index'
export default {
  name: "app",
  components: {},
  mounted() {
    // storage.setItem('a', 1);
    storage.setItem('user', { 'a': 1 })
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
