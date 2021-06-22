<template>
  <div id="app">
    <ToastNotification />
    <AppContainer />
  </div>
</template>

<script>
import AppContainer from "@/components/AppContainer/Component.vue";
import ToastNotification from "@/components/ToastNotification/Component.vue";

export default {
  name: "App",
  components: {
    AppContainer,
    ToastNotification,
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600&display=swap");

#app {
  font-family: "Oswald", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
