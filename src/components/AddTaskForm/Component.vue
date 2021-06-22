<template>
  <div :class="['taskform', { active: activeForm }]">
    <input type="text" v-model="inputValue" placeholder="Type your task here" />
    <div v-if="inputValue" @click="changeTasksList" class="AddTaskButton">
      ADD
    </div>
  </div>
</template>

<script>
import eventbus from "@/eventbus";

export default {
  props: {
    activeForm: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    changeTasksList() {
      eventbus.addTaskToTaskList(this.inputValue);
      this.inputValue = "";
    },
  },
};
</script>

<style scoped lang="scss">
.taskform {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  background-color: rgb(243, 243, 243);
  height: 0px;
  opacity: 0;
  transition: all 0.3s;

  &.active {
    height: 35px;
    opacity: 1;
  }
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
  color: #fff;
  transition: all 0.3s;

  &:hover {
    background-color: #666666;
  }
}
</style>
