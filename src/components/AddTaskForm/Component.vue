<template>
  <div :class="['taskform', {active:  activeForm}]">
    <input type="text" placeholder="Type your task here">
    <div @click="changeTasksList" class="AddTaskButton">ADD</div>
  </div>
</template>

<script>
import eventbus from '@/eventbus'

export default {
  props: {
    activeForm: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    changeTasksList() {
      eventbus.addTaskToTaskList('new task!')
    }
  },
}
</script>

<style scoped>
  .taskform {
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
    background-color: rgb(243, 243, 243);
    height: 0px;
    opacity: 0;
    transition: all .3s;
  }

  .taskform.active {
    height: 35px;
    opacity: 1;
  }

  input {
    border: none;
    background-color: transparent;
    box-sizing: border-box;
    padding: 10px;
  }

  .AddTaskButton {
    box-sizing: border-box;
    height: 100%;
    background-color: #999999;
    padding: 0px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #FFF;
    transition: all .3s;
  }

  .AddTaskButton:hover {
    background-color: #666666;
  }
</style>