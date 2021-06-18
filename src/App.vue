<template>
  <div id="app">
    <AppContainer />
  </div>
</template>

<script>
import AppContainer from '@/components/AppContainer/Component.vue'

export default {
  name: 'App',
  components: {
    AppContainer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600&display=swap');

#app {
  font-family: 'Oswald', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
