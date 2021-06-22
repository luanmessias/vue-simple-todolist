<template>
  <div class="AppContainer">
    <Header />
    <TaskList />
  </div>
</template>

<script>
import Header from "@/components/Header/Component.vue";
import TaskList from "@/components/TaskList/Component.vue";

export default {
  components: {
    Header,
    TaskList,
  },
};
</script>

<style scoped lang="scss">
.AppContainer {
  width: 100%;
  max-width: 320px;
  height: auto;
  background-color: #fff;
  border-radius: 15px;
}
</style>
